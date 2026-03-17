---
name: flags-gallery project
description: World Flags / Geographic Atlas website - tech stack, structure, and key patterns
type: project
---

## Project: Flags Gallery (World Flags Geographic Atlas)

Static HTML/CSS/JS website at `c:\Users\filip\flags-gallery\`.

**Key files:**
- `index.html` — homepage with hero, globe video, Feeling Lucky, continents list
- `style.css` — all styles (~4300 lines), mobile breakpoints at ≤600px and ≤768px
- `script.js` — dynamically injects filter-toggle, adv-toggle, auth-header-slot, mashup panel into `.header-inner`
- `auth.js` — injects `.auth-header-slot` (login/user button) appended to `.header-inner`
- `chat-widget.js` — injects "Learn More" chat widget (`#cw-btn`, `.cw-panel`) with own inline CSS

**Architecture patterns:**
- Dynamic JS injection: filter-toggle, adv-toggle, auth-header-slot all appended to `.header-inner` by JS at runtime
- Theme toggle (`#theme-toggle`) moved into `.header-inner` DOM (was at end of body); position: fixed on desktop, position: static on mobile via media query
- Mobile nav (hamburger + slide-in drawer) hidden on ≤600px; Quiz/Mashup exposed via `.mobile-hero-actions` in hero section instead
- Trivia "Did You Know" widget is a draggable popup on desktop, bottom-sheet on mobile
- Chat widget "Learn More" is a fixed button at right edge; repositioned to top:30% on mobile to avoid trivia overlap

**Mobile layout (≤600px) header structure:**
Row 1: [World's Nations title] → [theme toggle] → [Log In]
Divider line (`.mobile-header-divider`)
Row 2: [Search] → [Sort] → [Filters] → [Adv Filters]

**Why:** Mobile-specific UX redesign requested by user to reorganize header, add Quiz/Mashup hero buttons, and fix widget overlap.
