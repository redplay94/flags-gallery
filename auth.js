/* ── Auth System ─────────────────────────────────────────────── */
(function () {
  'use strict';

  const USER_KEY         = 'flags-user';
  const ACCOUNTS_KEY     = 'flags-accounts';
  const QUIZ_HISTORY_KEY = 'flags-quiz-history';
  const MAX_HISTORY      = 20;

  /* ── Persistence helpers ─────────────────────────────────────── */
  function getUser() {
    try { return JSON.parse(localStorage.getItem(USER_KEY)); } catch { return null; }
  }
  function setUser(data) { localStorage.setItem(USER_KEY, JSON.stringify(data)); }
  function clearUser()   { localStorage.removeItem(USER_KEY); }

  function getAccounts() {
    try { return JSON.parse(localStorage.getItem(ACCOUNTS_KEY)) || []; } catch { return []; }
  }
  function saveAccounts(list) { localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(list)); }

  /* ── Quiz history (exposed globally for quiz.js) ─────────────── */
  function getQuizHistory() {
    try { return JSON.parse(localStorage.getItem(QUIZ_HISTORY_KEY)) || []; } catch { return []; }
  }
  function saveQuizResult(result) {
    const history = getQuizHistory();
    history.unshift(result);
    if (history.length > MAX_HISTORY) history.length = MAX_HISTORY;
    localStorage.setItem(QUIZ_HISTORY_KEY, JSON.stringify(history));
  }

  window.AuthSystem = { saveQuizResult, getQuizHistory, openModal: openModal, getUser: getUser };

  /* ── HTML helpers ────────────────────────────────────────────── */
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* ── Inject modal into <body> ────────────────────────────────── */
  function injectModal() {
    if (document.getElementById('auth-overlay')) return;
    document.body.insertAdjacentHTML('beforeend', `
<div id="auth-overlay" class="auth-overlay" aria-hidden="true">
  <div class="auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
    <button class="auth-close" id="auth-close" aria-label="Close">&times;</button>
    <h2 id="auth-modal-title" class="auth-modal-title">Welcome</h2>
    <div id="auth-modal-hint" class="auth-modal-hint"></div>

    <div class="auth-tabs" role="tablist">
      <button class="auth-tab auth-tab--active" role="tab" data-tab="login" aria-selected="true">Log In</button>
      <button class="auth-tab" role="tab" data-tab="signup" aria-selected="false">Sign Up</button>
    </div>

    <form id="auth-login-form" class="auth-form" novalidate>
      <div class="auth-field" id="lf-identifier-wrap">
        <label for="lf-identifier">Email or Username</label>
        <input type="text" id="lf-identifier" name="identifier" autocomplete="username" />
      </div>
      <div class="auth-field" id="lf-password-wrap">
        <label for="lf-password">Password</label>
        <input type="password" id="lf-password" name="password" autocomplete="current-password" />
      </div>
      <div class="auth-form-footer">
        <a href="#" class="auth-forgot" onclick="return false;">Forgot password?</a>
      </div>
      <button type="submit" class="auth-submit">Log In</button>
    </form>

    <form id="auth-signup-form" class="auth-form auth-form--hidden" novalidate>
      <div class="auth-field" id="sf-username-wrap">
        <label for="sf-username">Username</label>
        <input type="text" id="sf-username" name="username" autocomplete="username" />
      </div>
      <div class="auth-field" id="sf-email-wrap">
        <label for="sf-email">Email</label>
        <input type="email" id="sf-email" name="email" autocomplete="email" />
      </div>
      <div class="auth-field" id="sf-password-wrap">
        <label for="sf-password-s">Password</label>
        <input type="password" id="sf-password" name="password" autocomplete="new-password" />
      </div>
      <div class="auth-field" id="sf-confirm-wrap">
        <label for="sf-confirm">Confirm Password</label>
        <input type="password" id="sf-confirm" name="confirm" autocomplete="new-password" />
      </div>
      <button type="submit" class="auth-submit">Sign Up</button>
    </form>

    <div id="auth-msg" class="auth-msg" aria-live="polite"></div>

    <div class="auth-divider"><span>or</span></div>

    <button type="button" class="auth-google-btn" id="auth-google-btn">
      <svg class="auth-google-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      Continue with Google
    </button>
  </div>
</div>`);
  }

  /* ── Inject header slot ──────────────────────────────────────── */
  function injectHeaderSlot() {
    if (document.getElementById('auth-header-slot')) return;
    const inner = document.querySelector('.header-inner');
    if (!inner) return;
    const slot = document.createElement('div');
    slot.id        = 'auth-header-slot';
    slot.className = 'auth-header-slot';
    inner.appendChild(slot);
  }

  /* ── Update header UI based on auth state ────────────────────── */
  function updateHeaderUI() {
    const slot = document.getElementById('auth-header-slot');
    if (!slot) return;
    const user = getUser();

    if (user) {
      const initial = (user.username || user.email || '?')[0].toUpperCase();
      const name    = escapeHtml(user.username || user.email || '');
      slot.innerHTML = `
        <div class="auth-user-btn" id="auth-user-btn" role="button" tabindex="0"
             aria-haspopup="true" aria-expanded="false">
          <span class="auth-avatar">${initial}</span>
          <span class="auth-username-label">Hello, ${name}!</span>
          <svg class="auth-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2.2" width="12" height="12">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
        <div class="auth-dropdown" id="auth-dropdown" role="menu" aria-hidden="true">
          <a href="profile.html" class="auth-dropdown-item" role="menuitem">My Profile</a>
          <button class="auth-dropdown-item auth-dropdown-item--logout"
                  id="auth-logout-btn" role="menuitem">Log Out</button>
        </div>`;

      document.getElementById('auth-user-btn').addEventListener('click', toggleDropdown);
      document.getElementById('auth-user-btn').addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleDropdown(); }
      });
      document.getElementById('auth-logout-btn').addEventListener('click', logout);
    } else {
      slot.innerHTML = `<button class="auth-login-btn" id="auth-login-btn">Log In</button>`;
      document.getElementById('auth-login-btn').addEventListener('click', openModal);
    }
  }

  /* ── Modal open / close ──────────────────────────────────────── */
  function openModal(hint) {
    const overlay = document.getElementById('auth-overlay');
    if (!overlay) return;
    overlay.classList.add('auth-overlay--visible');
    overlay.setAttribute('aria-hidden', 'false');
    clearMsg();
    /* Show optional hint banner (e.g. "Log in to save your favorite flags") */
    const hintEl = document.getElementById('auth-modal-hint');
    if (hintEl) {
      if (hint) {
        hintEl.textContent = hint;
        hintEl.classList.add('auth-modal-hint--visible');
      } else {
        hintEl.textContent = '';
        hintEl.classList.remove('auth-modal-hint--visible');
      }
    }
    document.body.style.overflow = 'hidden';
    setTimeout(function () {
      const first = overlay.querySelector('.auth-form:not(.auth-form--hidden) input');
      if (first) first.focus();
    }, 150);
  }

  function closeModal() {
    const overlay = document.getElementById('auth-overlay');
    if (!overlay) return;
    overlay.classList.remove('auth-overlay--visible');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    clearErrors();
    clearMsg();
    const hintEl = document.getElementById('auth-modal-hint');
    if (hintEl) { hintEl.textContent = ''; hintEl.classList.remove('auth-modal-hint--visible'); }
  }

  /* ── Dropdown toggle ─────────────────────────────────────────── */
  function toggleDropdown() {
    const btn = document.getElementById('auth-user-btn');
    const dd  = document.getElementById('auth-dropdown');
    if (!btn || !dd) return;
    const isOpen = dd.classList.contains('auth-dropdown--open');
    dd.classList.toggle('auth-dropdown--open', !isOpen);
    btn.setAttribute('aria-expanded', String(!isOpen));
    dd.setAttribute('aria-hidden', String(isOpen));
  }

  function closeDropdown() {
    const btn = document.getElementById('auth-user-btn');
    const dd  = document.getElementById('auth-dropdown');
    if (!dd) return;
    dd.classList.remove('auth-dropdown--open');
    dd.setAttribute('aria-hidden', 'true');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }

  /* ── Tab switching ───────────────────────────────────────────── */
  function switchTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(function (t) {
      const active = t.dataset.tab === tab;
      t.classList.toggle('auth-tab--active', active);
      t.setAttribute('aria-selected', String(active));
    });
    const loginForm  = document.getElementById('auth-login-form');
    const signupForm = document.getElementById('auth-signup-form');
    if (tab === 'login') {
      loginForm.classList.remove('auth-form--hidden');
      signupForm.classList.add('auth-form--hidden');
    } else {
      loginForm.classList.add('auth-form--hidden');
      signupForm.classList.remove('auth-form--hidden');
    }
    clearErrors();
    clearMsg();
  }

  /* ── Validation helpers ──────────────────────────────────────── */
  function setError(wrapId, msg) {
    const wrap = document.getElementById(wrapId);
    if (!wrap) return;
    wrap.classList.add('auth-field--error');
    let err = wrap.querySelector('.auth-field-error');
    if (!err) {
      err = document.createElement('span');
      err.className = 'auth-field-error';
      wrap.appendChild(err);
    }
    err.textContent = msg;
  }

  function clearErrors() {
    document.querySelectorAll('.auth-field--error').forEach(function (el) {
      el.classList.remove('auth-field--error');
      const err = el.querySelector('.auth-field-error');
      if (err) err.remove();
    });
  }

  function showMsg(text, type) {
    const el = document.getElementById('auth-msg');
    if (!el) return;
    el.textContent = text;
    el.className   = 'auth-msg auth-msg--' + type + ' auth-msg--visible';
  }

  function clearMsg() {
    const el = document.getElementById('auth-msg');
    if (!el) return;
    el.className   = 'auth-msg';
    el.textContent = '';
  }

  /* ── Login handler ───────────────────────────────────────────── */
  function handleLogin(e) {
    e.preventDefault();
    clearErrors(); clearMsg();

    const identifier = document.getElementById('lf-identifier').value.trim();
    const password   = document.getElementById('lf-password').value;
    let valid = true;

    if (!identifier) { setError('lf-identifier-wrap', 'This field is required'); valid = false; }
    if (!password)   { setError('lf-password-wrap',   'This field is required'); valid = false; }
    if (!valid) return;

    const accounts = getAccounts();
    const match    = accounts.find(function (a) {
      return (a.email === identifier || a.username === identifier) && a.password === password;
    });

    let userData;
    if (match) {
      userData = { username: match.username, email: match.email };
    } else if (accounts.length > 0) {
      showMsg('Invalid username / email or password.', 'error');
      return;
    } else {
      /* No accounts yet — demo mode: accept any credentials */
      const isEmail = isValidEmail(identifier);
      userData = {
        username: isEmail ? identifier.split('@')[0] : identifier,
        email:    isEmail ? identifier : ''
      };
    }

    setUser(userData);
    showMsg('Logged in successfully!', 'success');
    setTimeout(function () { closeModal(); updateHeaderUI(); }, 800);
  }

  /* ── Sign-up handler ─────────────────────────────────────────── */
  function handleSignup(e) {
    e.preventDefault();
    clearErrors(); clearMsg();

    const username = document.getElementById('sf-username').value.trim();
    const email    = document.getElementById('sf-email').value.trim();
    const password = document.getElementById('sf-password').value;
    const confirm  = document.getElementById('sf-confirm').value;
    let valid = true;

    if (!username) {
      setError('sf-username-wrap', 'Username is required'); valid = false;
    } else if (username.length < 2) {
      setError('sf-username-wrap', 'Must be at least 2 characters'); valid = false;
    }

    if (!email) {
      setError('sf-email-wrap', 'Email is required'); valid = false;
    } else if (!isValidEmail(email)) {
      setError('sf-email-wrap', 'Please enter a valid email'); valid = false;
    }

    if (!password) {
      setError('sf-password-wrap', 'Password is required'); valid = false;
    } else if (password.length < 6) {
      setError('sf-password-wrap', 'Must be at least 6 characters'); valid = false;
    }

    if (!confirm) {
      setError('sf-confirm-wrap', 'Please confirm your password'); valid = false;
    } else if (password && confirm !== password) {
      setError('sf-confirm-wrap', 'Passwords do not match'); valid = false;
    }

    if (!valid) return;

    const accounts = getAccounts();
    const existing = accounts.find(function (a) {
      return a.email === email || a.username === username;
    });
    if (existing) {
      if (existing.email === email) {
        setError('sf-email-wrap', 'An account with this email already exists');
      } else {
        setError('sf-username-wrap', 'Username is already taken');
      }
      return;
    }

    accounts.push({ username: username, email: email, password: password });
    saveAccounts(accounts);
    setUser({ username: username, email: email });
    showMsg('Account created! Welcome aboard.', 'success');
    setTimeout(function () { closeModal(); updateHeaderUI(); }, 800);
  }

  /* ── Logout ──────────────────────────────────────────────────── */
  function logout() {
    clearUser();
    closeDropdown();
    updateHeaderUI();
    /* Redirect away from profile page if needed */
    if (window.location.pathname.endsWith('profile.html')) {
      window.location.href = 'index.html';
    }
  }

  /* ── Bind all events ─────────────────────────────────────────── */
  function bindEvents() {
    /* Overlay background click → close */
    document.getElementById('auth-overlay').addEventListener('click', function (e) {
      if (e.target === this) closeModal();
    });

    /* Close button */
    document.getElementById('auth-close').addEventListener('click', closeModal);

    /* Escape key */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeModal(); closeDropdown(); }
    });

    /* Tab buttons */
    document.querySelectorAll('.auth-tab').forEach(function (tab) {
      tab.addEventListener('click', function () { switchTab(tab.dataset.tab); });
    });

    /* Forms */
    document.getElementById('auth-login-form').addEventListener('submit',  handleLogin);
    document.getElementById('auth-signup-form').addEventListener('submit', handleSignup);

    /* Google button */
    document.getElementById('auth-google-btn').addEventListener('click', function () {
      alert('Google login coming soon!');
    });

    /* Close dropdown when clicking outside */
    document.addEventListener('click', function (e) {
      const slot = document.getElementById('auth-header-slot');
      if (slot && !slot.contains(e.target)) closeDropdown();
    });
  }

  /* ── Init ────────────────────────────────────────────────────── */
  function init() {
    injectHeaderSlot();
    injectModal();
    bindEvents();
    updateHeaderUI();
    /* Expose updateHeaderUI so profile page can refresh header after edits */
    window.AuthSystem.updateHeaderUI = updateHeaderUI;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
