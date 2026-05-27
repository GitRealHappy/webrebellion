# Accessibility

Making your site usable by people who don't use a mouse, can't see the screen well, or rely on assistive tech. It's also good for SEO and good for your future self — accessible sites are easier to maintain.

You don't need to memorize WCAG. You need to do six things, and if you do them, the site is dramatically better than 90% of the web.

---

## When to read this

User says:
- "Is the site accessible?"
- "Add a skip link"
- "Screen reader testing"
- "Keyboard nav"
- "Lighthouse said my contrast is bad"
- "Is this compliant?"

---

## The six things

### 1. Use semantic HTML, not `<div>` soup

A screen reader announces a `<button>` as "button" and a `<div onclick>` as nothing useful. Real elements are free a11y.

```html
<!-- Page structure: every page should have these landmarks -->
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <h1>The one true page heading</h1>
  <!-- ... -->
</main>

<footer>
  <p>© 2026 Oakmoss Studio</p>
</footer>
```

- `<header>`, `<nav>`, `<main>`, `<footer>` — landmarks. Screen readers let users jump between them.
- `<button>` for actions, `<a href>` for navigation. Never `<div onclick>`.
- `<label for="email">` paired with `<input id="email">` — clicking the label focuses the input, screen readers announce it.

### 2. One `<h1>` per page, then descend in order

```html
<h1>About Oakmoss</h1>
  <h2>Our process</h2>
    <h3>Sourcing</h3>
    <h3>Pouring</h3>
  <h2>Our team</h2>
```

Don't skip levels (no `<h1>` directly to `<h3>`). Don't use `<h2>` for visual styling when the content isn't actually a section heading — use a styled `<p>` or a class for that.

Screen-reader users navigate by heading. A scrambled heading tree is a maze.

### 3. Color contrast that passes

Body text needs **4.5:1** contrast against its background. Large text (~24px+) needs **3:1**.

Quick check: in Chrome DevTools, click any text → Inspect → the color swatch in the Styles panel shows a contrast ratio with a pass/fail badge. If it shows AA or AAA, you're fine.

Or paste your two colors into **webaim.org/resources/contrastchecker**.

Failures are usually:
- Light gray text on white (`#ccc on #fff` = 1.6:1, fails badly)
- Brand color on brand color
- "Subtle" placeholder text in form inputs

If a design relies on low-contrast text, give it a non-color signal too (an underline, an icon, a border).

### 4. Visible focus states

When a keyboard user tabs through your site, the focused element needs an obvious outline. Browsers ship a default outline that everyone hates and removes — don't remove it without replacing it.

```css
/* Default focus styles, applied everywhere */
:focus-visible {
  outline: 2px solid #1a2e1f;
  outline-offset: 2px;
  border-radius: 2px;
}

/* If you have a CSS reset that nukes outlines, undo it */
*:focus { outline: revert; }
```

`:focus-visible` only shows the outline for keyboard users (not mouse clicks), so mouse users don't see a ring on every click.

Test: click the address bar, then press Tab repeatedly. You should see a clear outline jump from element to element. If it disappears anywhere, that element is invisible to keyboard users.

### 5. Skip-to-main link

A short link at the very top of `<body>` that lets keyboard users skip past the nav directly to the content. It's invisible until focused.

```html
<body>
  <a href="#main" class="skip-link">Skip to content</a>

  <header>
    <!-- nav -->
  </header>

  <main id="main">
    <!-- ... -->
  </main>
```

```css
.skip-link {
  position: absolute;
  top: -100px;          /* off-screen by default */
  left: 0;
  padding: 0.75rem 1rem;
  background: #1a2e1f;
  color: white;
  z-index: 100;
}

.skip-link:focus {
  top: 0;               /* slides in when focused */
}
```

Test: load the page, press Tab once. The "Skip to content" link should appear in the top-left corner.

### 6. Alt text on every meaningful image

Already covered in `03_responsive_and_assets.md:103-109` — read that section. Two extra rules:

- Decorative images (background flourishes, dividers) get `alt=""` (empty string, not missing). Empty alt tells screen readers "skip this."
- Don't start alt text with "Image of…" — screen readers already say "graphic."

---

## Forms (the part most sites get wrong)

Every form input needs a real, visible `<label>`:

```html
<!-- Right -->
<label for="email">Your email</label>
<input type="email" id="email" name="email" required>

<!-- Wrong: placeholder is not a label -->
<input type="email" placeholder="Your email">
```

Placeholders disappear when the user types, which means they forget what the field is. They also fail contrast in most designs.

If you really need a label-less look, use `aria-label`:

```html
<input type="email" aria-label="Your email" placeholder="hi@example.com">
```

For error messages, link the message to the input with `aria-describedby`:

```html
<label for="email">Your email</label>
<input type="email" id="email" aria-describedby="email-error" required>
<p id="email-error" role="alert">Please enter a valid email.</p>
```

---

## Audit your site

Two free tools, in this order:

1. **Lighthouse** (built into Chrome DevTools — right-click → Inspect → Lighthouse tab → check "Accessibility" → Analyze). It catches the obvious stuff in 30 seconds. Aim for 95+; 100 is achievable on most static sites.

2. **WAVE** (wave.webaim.org) — paste your URL, get a visual overlay showing every a11y issue on the page. Better than Lighthouse for catching contrast and heading-structure problems.

These won't catch everything (no tool can — some checks require a human), but they catch most.

---

## Test by keyboard

Disconnect your mouse for two minutes. Try to:
- Navigate the menu
- Open a form, fill it in, submit
- Click any button

If you can't do something with Tab / Shift+Tab / Enter / Space / arrow keys, neither can a keyboard-only user.

---

## Common pitfalls

- ❌ `<div onclick>` instead of `<button>` — screen readers can't tell it's clickable
- ❌ Removing focus outlines without replacing them
- ❌ Placeholder text used as a label
- ❌ `<h2>` chosen for visual size instead of structural meaning
- ❌ Low-contrast "elegant" gray text (`#888 on #fff` fails AA)
- ❌ Decorative images with descriptive alt text — they get announced needlessly. Use `alt=""`.
- ❌ Trusting "100 in Lighthouse" as proof. It's a floor, not a ceiling.

---

## Update state

```markdown
## Progress
...
- ✓ Accessibility pass — semantic HTML, contrast, focus states, skip-link, keyboard nav verified
```