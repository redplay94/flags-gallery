'use strict';

/* ── Constants ────────────────────────────────────────────────── */
const LETTERS   = ['A', 'B', 'C', 'D'];
const RING_R    = 52;
const RING_CIRC = parseFloat((2 * Math.PI * RING_R).toFixed(2)); // ≈ 326.73

/* ── Difficulty config ────────────────────────────────────────── */
const DIFFICULTY_CONFIG = {
  easy: {
    label: 'Easy', stars: 1, color: '#22c55e',
    desc:   'Well-known countries only',
    detail: 'Flag ↔ name questions',
    questions: 10,
  },
  medium: {
    label: 'Medium', stars: 2, color: '#f59e0b',
    desc:   'All countries & territories',
    detail: 'All 5 question types',
    questions: 15,
  },
  hard: {
    label: 'Hard', stars: 3, color: '#ef4444',
    desc:   'Obscure nations, tricky options',
    detail: 'Similar wrong answers',
    questions: 20,
  },
};

/* ── Helpers ─────────────────────────────────────────────────── */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sample(arr, n) {
  return shuffle(arr).slice(0, n);
}

function quizFlag(code) {
  return `https://flagcdn.com/w640/${code}.png`;
}

function describeColors(dc) {
  if (!dc) return '—';
  const entries = Object.entries(dc).filter(([, v]) => v >= 20).sort(([, a], [, b]) => b - a);
  return entries.map(([k]) => k.charAt(0).toUpperCase() + k.slice(1)).join(' & ') || '—';
}

/* ── Country pools ────────────────────────────────────────────── */
// Recognisable flags for visual question types (types 1, 4)
const VISUAL_CODES = [
  'us','gb','fr','de','jp','cn','br','au','ca','mx','ru','in','za','eg','it',
  'es','tr','ar','ng','ke','kr','th','vn','my','id','ph','sa','ir','pl','ua',
  'gr','pt','nl','be','ch','se','no','dk','fi','ro','hu','cz','at','pk','bd',
  'tz','gh','ma','tn','et','ug','cm','cd','zm','lb','il','ae','nz','sg','tw',
  'kz','mn','co','pe','cl','ve','py','bo','uy','al','rs','bg','hr','is','ie',
  'lt','lv','ee','by','md','me','mk','az','ge','am','jo','ye','om','kw','qa',
  'np','lk','mm','kh','la','bn','dz','ly','sd','so','sn','ci','mz','na','bw',
  'zw','mw','rw','bi','gn','sl','lr','tg','bj','gm','ki','fj','pg','sb','ws',
  'to','nr','pw','fm','mh','vu','cu','jm','ht','do','cr','pa','ni','hn','gt',
  'bb','tt','lc','vc','kn','ag','gd','bs','lu','mc','sm','li','ad','mt','cy',
  'fo','gi','im','je','gg','xk','ps','sy','af','bf','ne','td','cf','cg','ao'
];

// Top 50 most recognisable countries for Easy mode
const EASY_CODES = [
  'us','gb','fr','de','jp','cn','br','au','ca','mx',
  'ru','in','za','eg','it','es','tr','ar','ng','ke',
  'kr','th','vn','my','id','ph','sa','ir','pl','ua',
  'gr','pt','nl','be','ch','se','no','dk','fi','ro',
  'hu','cz','at','pk','bd','tz','gh','ma','tn','et',
];

// Obscure countries and territories for Hard mode
const HARD_CODES = [
  'ki','fj','pg','sb','ws','to','nr','pw','fm','mh','vu',    // Pacific islands
  'bb','tt','lc','vc','kn','ag','gd','bs',                    // Caribbean micro-states
  'lu','mc','sm','li','ad','mt','cy','fo','gi','im','je','gg',// European micro/territories
  'xk','ps',                                                   // disputed territories
  'bf','ne','td','cf','cg','bi','gn','sl','lr','tg','bj','gm',// obscure Africa
  'mn','kh','la','bn',                                         // obscure Asia
  'py','bo','uy',                                              // less-known S. America
  'mz','na','bw','zw','mw','rw','ao','so','sd','ly',          // more obscure Africa
];

let visualPool   = [];
let easyPool     = [];
let hardPool     = [];
let fullPool     = [];

/* ── Quiz state ─────────────────────────────────────────────── */
let currentDifficulty = null;
let sessionSize       = 15;
let session           = [];
let idx               = 0;
let score             = 0;

/* ── DOM refs ────────────────────────────────────────────────── */
const quizArea   = document.getElementById('quiz-area');
const resultsDiv = document.getElementById('quiz-results');

/* ── Similar wrong options (Hard mode) ───────────────────────── */
// Returns n countries from pool that are visually similar to correct
// (same continent preferred, then shared dominant colours)
function similarWrongs(correct, pool, n) {
  const myTopColors = correct.dominant_colors
    ? Object.entries(correct.dominant_colors).filter(([, v]) => v >= 25).map(([k]) => k)
    : [];
  const scored = pool
    .filter(c => c.code !== correct.code)
    .map(c => {
      let sc = 0;
      if (c.continent === correct.continent) sc += 2;
      if (c.dominant_colors) {
        myTopColors.forEach(col => { if ((c.dominant_colors[col] || 0) >= 20) sc += 1; });
      }
      return { c, sc };
    })
    .sort((a, b) => b.sc - a.sc || Math.random() - 0.5);
  return sample(scored.slice(0, Math.max(n * 3, 9)).map(x => x.c), n);
}

/* ── Question constructors ────────────────────────────────────── */
function makeQ1(correct, pool, hard = false) {
  const wrongs = hard
    ? similarWrongs(correct, pool, 3)
    : sample(pool.filter(c => c.code !== correct.code), 3);
  if (wrongs.length < 3) return null;
  const options = shuffle([
    { label: correct.name, code: null, correct: true },
    ...wrongs.map(c => ({ label: c.name, code: null, correct: false })),
  ]);
  return { type: 1, prompt: 'Which country does this flag belong to?',
           flagCode: correct.code, options };
}

function makeQ2(correct, pool) {
  const myColors   = describeColors(correct.dominant_colors);
  const candidates = pool.filter(c =>
    c.code !== correct.code && describeColors(c.dominant_colors) !== myColors
  );
  if (candidates.length < 3) return null;
  const wrongs  = sample(candidates, 3);
  const options = shuffle([
    { label: myColors, code: null, correct: true },
    ...wrongs.map(c => ({ label: describeColors(c.dominant_colors), code: null, correct: false })),
  ]);
  return { type: 2, prompt: `What are the main colors on the flag of ${correct.name}?`,
           flagCode: null, options };
}

function makeQ3(symbol, correct, pool) {
  const noSym   = pool.filter(c => !(c.symbols || []).includes(symbol) && c.code !== correct.code);
  if (noSym.length < 3) return null;
  const wrongs  = sample(noSym, 3);
  const all     = shuffle([correct, ...wrongs]);
  const options = all.map(c => ({ label: c.name, code: null, correct: c.code === correct.code }));
  const label   = symbol === 'eagle'   ? 'an Eagle'
                : symbol === 'lion'    ? 'a Lion'
                : symbol === 'dragon'  ? 'a Dragon'
                : symbol === 'snake'   ? 'a Snake'
                : symbol === 'horse'   ? 'a Horse'
                : symbol === 'bird'    ? 'a Bird'
                : symbol === 'fish'    ? 'a Fish'
                : symbol === 'star'    ? 'a Star'
                : symbol === 'crescent'? 'a Crescent'
                : symbol === 'cross'   ? 'a Cross'
                : symbol === 'sun'     ? 'a Sun'
                : symbol === 'shield'  ? 'a Shield / Coat of Arms'
                : symbol === 'weapon'  ? 'a Weapon'
                : symbol === 'crown'   ? 'a Crown'
                : symbol === 'tree'    ? 'a Tree or Plant'
                : symbol === 'stripes' ? 'Horizontal Stripes'
                : 'a Tricolor layout';
  return { type: 3, prompt: `Which country's flag contains ${label}?`,
           flagCode: null, options };
}

function makeQ4(correct, pool, hard = false) {
  const wrongs  = hard
    ? similarWrongs(correct, pool, 3)
    : sample(pool.filter(c => c.code !== correct.code), 3);
  if (wrongs.length < 3) return null;
  const options = shuffle([correct, ...wrongs]).map(c =>
    ({ label: c.name, code: c.code, correct: c.code === correct.code })
  );
  return { type: 4, prompt: `What is the flag of ${correct.name}?`,
           flagCode: null, options, flagOptions: true };
}

function makeQ5(correct) {
  const all    = ['Africa','Asia','Europe','North America','South America','Oceania'];
  const wrongs = sample(all.filter(c => c !== correct.continent), 3);
  const options = shuffle([
    { label: correct.continent, code: null, correct: true },
    ...wrongs.map(c => ({ label: c, code: null, correct: false })),
  ]);
  return { type: 5, prompt: `Which continent is ${correct.name} in?`,
           flagCode: correct.code, options };
}

/* ── Pool generation ─────────────────────────────────────────── */
function generatePool(difficulty) {
  visualPool = COUNTRIES.filter(c => VISUAL_CODES.includes(c.code));
  easyPool   = COUNTRIES.filter(c => EASY_CODES.includes(c.code));
  hardPool   = COUNTRIES.filter(c => HARD_CODES.includes(c.code) && VISUAL_CODES.includes(c.code));
  fullPool   = COUNTRIES.filter(c => c.dominant_colors &&
                                     Object.keys(c.dominant_colors).length >= 2);
  const hardFullPool = COUNTRIES.filter(c =>
    HARD_CODES.includes(c.code) && c.dominant_colors &&
    Object.keys(c.dominant_colors).length >= 2
  );

  const pool = [];
  const used = { 1: new Set(), 2: new Set(), 3: new Set(), 4: new Set(), 5: new Set() };

  /* ── EASY: types 1 & 4 only, well-known countries ── */
  if (difficulty === 'easy') {
    // Type 1: flag → name  (7 questions)
    for (const c of shuffle(easyPool)) {
      if (pool.filter(q => q.type === 1).length >= 7) break;
      if (used[1].has(c.code)) continue;
      const q = makeQ1(c, easyPool);
      if (q) { pool.push(q); used[1].add(c.code); }
    }
    // Type 4: name → flag  (8 questions; avoid type-1 countries first)
    for (const c of shuffle(easyPool)) {
      if (pool.filter(q => q.type === 4).length >= 8) break;
      if (used[4].has(c.code) || used[1].has(c.code)) continue;
      const q = makeQ4(c, easyPool);
      if (q) { pool.push(q); used[4].add(c.code); }
    }
    // Top-up type 4 if needed
    for (const c of shuffle(easyPool)) {
      if (pool.filter(q => q.type === 4).length >= 8) break;
      if (used[4].has(c.code)) continue;
      const q = makeQ4(c, easyPool);
      if (q) { pool.push(q); used[4].add(c.code); }
    }
    return pool; // 15 questions → sample 10
  }

  /* ── HARD: obscure countries, similar wrong options ── */
  if (difficulty === 'hard') {
    // Type 1: flag → name, hard countries, similar wrongs  (6 questions)
    for (const c of shuffle(hardPool)) {
      if (pool.filter(q => q.type === 1).length >= 6) break;
      if (used[1].has(c.code)) continue;
      const q = makeQ1(c, visualPool, true);
      if (q) { pool.push(q); used[1].add(c.code); }
    }
    // Type 2: name → colors, hard countries  (5 questions)
    for (const c of shuffle(hardFullPool)) {
      if (pool.filter(q => q.type === 2).length >= 5) break;
      if (used[2].has(c.code)) continue;
      const q = makeQ2(c, fullPool);
      if (q) { pool.push(q); used[2].add(c.code); }
    }
    // Type 3: symbol → country name, prefer hard countries  (4 questions)
    const symListH = shuffle([
      'star','crescent','cross','sun','eagle','lion','shield','tree','tricolor','stripes','weapon','bird'
    ]);
    for (const sym of symListH) {
      if (pool.filter(q => q.type === 3).length >= 4) break;
      const hardCands = hardPool.filter(c => (c.symbols || []).includes(sym));
      const candidates = hardCands.length > 0
        ? hardCands
        : visualPool.filter(c => (c.symbols || []).includes(sym));
      if (candidates.length === 0) continue;
      const correct = sample(candidates, 1)[0];
      if (used[3].has(correct.code)) continue;
      const q = makeQ3(sym, correct, visualPool);
      if (q) { pool.push(q); used[3].add(correct.code); }
    }
    // Type 4: name → flag, hard countries, similar wrongs  (5 questions)
    for (const c of shuffle(hardPool)) {
      if (pool.filter(q => q.type === 4).length >= 5) break;
      if (used[4].has(c.code) || used[1].has(c.code)) continue;
      const q = makeQ4(c, visualPool, true);
      if (q) { pool.push(q); used[4].add(c.code); }
    }
    for (const c of shuffle(hardPool)) {
      if (pool.filter(q => q.type === 4).length >= 5) break;
      if (used[4].has(c.code)) continue;
      const q = makeQ4(c, visualPool, true);
      if (q) { pool.push(q); used[4].add(c.code); }
    }
    // Type 5: name → continent, hard countries  (4 questions)
    const hardAll = COUNTRIES.filter(c => HARD_CODES.includes(c.code));
    for (const c of shuffle(hardAll)) {
      if (pool.filter(q => q.type === 5).length >= 4) break;
      if (used[5].has(c.code)) continue;
      const q = makeQ5(c);
      if (q) { pool.push(q); used[5].add(c.code); }
    }
    return pool; // 24 questions → sample 20
  }

  /* ── MEDIUM: all types, all countries (existing logic) ── */
  for (const c of shuffle(visualPool)) {
    if (pool.filter(q => q.type === 1).length >= 16) break;
    if (used[1].has(c.code)) continue;
    const q = makeQ1(c, visualPool);
    if (q) { pool.push(q); used[1].add(c.code); }
  }
  for (const c of shuffle(fullPool)) {
    if (pool.filter(q => q.type === 2).length >= 12) break;
    if (used[2].has(c.code)) continue;
    const q = makeQ2(c, fullPool);
    if (q) { pool.push(q); used[2].add(c.code); }
  }
  const symbolList = shuffle([
    'star','crescent','cross','sun','eagle','lion','shield','tree','tricolor','stripes','weapon','bird'
  ]);
  for (const sym of symbolList) {
    if (pool.filter(q => q.type === 3).length >= 10) break;
    const candidates = visualPool.filter(c => (c.symbols || []).includes(sym));
    if (candidates.length === 0) continue;
    const correct = sample(candidates, 1)[0];
    if (used[3].has(correct.code)) continue;
    const q = makeQ3(sym, correct, visualPool);
    if (q) { pool.push(q); used[3].add(correct.code); }
  }
  for (const c of shuffle(visualPool)) {
    if (pool.filter(q => q.type === 4).length >= 14) break;
    if (used[4].has(c.code) || used[1].has(c.code)) continue;
    const q = makeQ4(c, visualPool);
    if (q) { pool.push(q); used[4].add(c.code); }
  }
  for (const c of shuffle(visualPool)) {
    if (pool.filter(q => q.type === 4).length >= 14) break;
    if (used[4].has(c.code)) continue;
    const q = makeQ4(c, visualPool);
    if (q) { pool.push(q); used[4].add(c.code); }
  }
  for (const c of shuffle(COUNTRIES)) {
    if (pool.filter(q => q.type === 5).length >= 12) break;
    if (used[5].has(c.code)) continue;
    const q = makeQ5(c);
    if (q) { pool.push(q); used[5].add(c.code); }
  }
  return pool; // 64 questions → sample 15
}

/* ── Difficulty selection screen ─────────────────────────────── */
function showDifficultyScreen() {
  resultsDiv.classList.add('hidden');
  quizArea.classList.remove('hidden');
  quizArea.innerHTML = `
    <div class="qz-diff-screen">
      <h2 class="qz-diff-title">Choose Difficulty</h2>
      <div class="qz-diff-cards">
        ${makeDiffCard('easy')}
        ${makeDiffCard('medium')}
        ${makeDiffCard('hard')}
      </div>
    </div>`;
  quizArea.querySelectorAll('.qz-diff-card').forEach(card => {
    card.addEventListener('click', () => startQuiz(card.dataset.diff));
  });
}

function makeDiffCard(diff) {
  const cfg   = DIFFICULTY_CONFIG[diff];
  const stars = '★'.repeat(cfg.stars) + '☆'.repeat(3 - cfg.stars);
  return `
    <button class="qz-diff-card qz-diff-card--${diff}" data-diff="${diff}">
      <span class="qz-diff-stars">${stars}</span>
      <span class="qz-diff-name">${cfg.label}</span>
      <span class="qz-diff-desc">${cfg.desc}</span>
      <span class="qz-diff-detail">${cfg.detail}</span>
      <span class="qz-diff-count">${cfg.questions} questions</span>
    </button>`;
}

/* ── Session start ───────────────────────────────────────────── */
function startQuiz(difficulty) {
  currentDifficulty = difficulty;
  sessionSize       = DIFFICULTY_CONFIG[difficulty].questions;
  const allQuestions = generatePool(difficulty);
  session = sample(allQuestions, sessionSize);
  idx     = 0;
  score   = 0;
  resultsDiv.classList.add('hidden');
  quizArea.classList.remove('hidden');
  renderQuestion();
}

/* ── Render question ─────────────────────────────────────────── */
function renderQuestion() {
  const q        = session[idx];
  const qNum     = idx + 1;
  const barWidth = (idx / sessionSize * 100).toFixed(1);
  const isLast   = idx === sessionSize - 1;
  const cfg      = DIFFICULTY_CONFIG[currentDifficulty];

  let html = `
    <div class="qz-progress-wrap">
      <div class="qz-progress-bar">
        <div class="qz-progress-fill" style="width:${barWidth}%"></div>
      </div>
      <span class="qz-counter">Question ${qNum} / ${sessionSize}</span>
      <span class="qz-diff-badge qz-diff-badge--${currentDifficulty}">${cfg.label}</span>
    </div>

    <div class="qz-card">
      <p class="qz-prompt">${q.prompt}</p>
  `;

  if (q.flagCode) {
    html += `
      <div class="qz-question-flag">
        <img src="${quizFlag(q.flagCode)}" alt="flag" class="qz-question-flag-img" loading="eager">
      </div>
    `;
  }

  if (q.flagOptions) {
    html += `<div class="qz-opts qz-opts--flags">`;
    q.options.forEach((opt, i) => {
      html += `
        <button class="qz-opt qz-opt--flag" data-idx="${i}" aria-label="${opt.label}">
          <img src="${quizFlag(opt.code)}" alt="${opt.label}" class="qz-opt-flag-img" loading="eager">
          <span class="qz-feedback" aria-hidden="true"></span>
        </button>`;
    });
    html += `</div>`;
  } else {
    html += `<div class="qz-opts qz-opts--text">`;
    q.options.forEach((opt, i) => {
      html += `
        <button class="qz-opt qz-opt--text" data-idx="${i}">
          <span class="qz-letter">${LETTERS[i]}</span>
          <span class="qz-opt-label">${opt.label}</span>
          <span class="qz-feedback" aria-hidden="true"></span>
        </button>`;
    });
    html += `</div>`;
  }

  html += `</div>`; /* end qz-card */

  html += `
    <div class="qz-nav-row">
      <button id="qz-next" class="qz-next hidden">
        ${isLast ? 'See Results' : 'Next Question →'}
      </button>
    </div>`;

  quizArea.innerHTML = html;

  quizArea.querySelectorAll('.qz-opt').forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.idx, 10)));
  });

  document.getElementById('qz-next').addEventListener('click', () => {
    if (isLast) { showResults(); } else { idx++; renderQuestion(); }
  });
}

/* ── Handle answer ───────────────────────────────────────────── */
function handleAnswer(chosen) {
  const q         = session[idx];
  const isCorrect = q.options[chosen].correct;
  if (isCorrect) score++;

  quizArea.querySelectorAll('.qz-opt').forEach(b => {
    b.disabled = true;
    b.style.cursor = 'default';
  });

  quizArea.querySelectorAll('.qz-opt').forEach((btn, i) => {
    const fb = btn.querySelector('.qz-feedback');
    if (q.options[i].correct) {
      btn.classList.add('qz-opt--correct');
      if (fb) fb.textContent = '✓';
    }
    if (i === chosen && !q.options[i].correct) {
      btn.classList.add('qz-opt--wrong');
      if (fb) fb.textContent = '✗';
    }
  });

  document.getElementById('qz-next').classList.remove('hidden');
}

/* ── Results screen ──────────────────────────────────────────── */
function showResults() {
  quizArea.classList.add('hidden');

  const pct    = Math.round((score / sessionSize) * 100);

  /* ── Save result to localStorage for profile stats ── */
  if (window.AuthSystem && window.AuthSystem.saveQuizResult) {
    window.AuthSystem.saveQuizResult({
      difficulty: currentDifficulty,
      score:      score,
      total:      sessionSize,
      pct:        pct,
      date:       new Date().toISOString()
    });
  }

  const color  = pct >= 70 ? '#22c55e' : pct >= 40 ? '#f59e0b' : '#ef4444';
  const target = parseFloat((RING_CIRC * (1 - pct / 100)).toFixed(2));
  const emoji  = pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : pct >= 40 ? '📚' : '💪';
  const cfg    = DIFFICULTY_CONFIG[currentDifficulty];

  resultsDiv.innerHTML = `
    <div class="qz-results-card">
      <div class="qz-ring-wrap">
        <svg class="qz-ring" viewBox="0 0 120 120" aria-hidden="true">
          <circle class="qz-ring-bg" cx="60" cy="60" r="${RING_R}"/>
          <circle class="qz-ring-fill" cx="60" cy="60" r="${RING_R}"
            stroke="${color}"
            stroke-dasharray="${RING_CIRC}"
            stroke-dashoffset="${RING_CIRC}"/>
        </svg>
        <div class="qz-ring-label">
          <span class="qz-pct" style="color:${color}">${pct}%</span>
          <span class="qz-emoji">${emoji}</span>
        </div>
      </div>

      <p class="qz-score-text">You got <strong>${score}</strong> out of <strong>${sessionSize}</strong> correct</p>

      <p class="qz-played-diff">
        <span class="qz-diff-badge qz-diff-badge--${currentDifficulty}">${cfg.label}</span>
        difficulty &middot; ${sessionSize} questions
      </p>

      <div class="qz-results-actions">
        <button class="qz-btn-primary" id="qz-play-again">Play Again</button>
        <a href="index.html" class="qz-btn-secondary">Back to Gallery</a>
      </div>
    </div>`;

  resultsDiv.classList.remove('hidden');

  requestAnimationFrame(() => requestAnimationFrame(() => {
    const fill = resultsDiv.querySelector('.qz-ring-fill');
    if (fill) fill.style.strokeDashoffset = target;
  }));

  document.getElementById('qz-play-again').addEventListener('click', showDifficultyScreen);
}

/* ── Boot ────────────────────────────────────────────────────── */
showDifficultyScreen();
