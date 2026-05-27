# Design System (Lite)

Most "design systems" online are overkill — multi-package monorepos with Storybook and Figma plugins. You don't need that. You need **three scales** in CSS custom properties so the whole site feels coherent and adjusting any one thing is a one-line change.

This file: type, spacing, color. One page. Then stop.

---

## When to read this

User says:
- "The site looks inconsistent"
- "How do I pick colors that work together?"
- "Set up a design system"
- "Make the spacing more consistent"
- "Design tokens"

---

## CSS custom properties = your tokens

CSS custom properties (a.k.a. CSS variables) are how you store reusable values. Define them in `:root`, use them with `var(...)`:

```css
:root {
  --color-text: #1a1a1a;
}

p { color: var(--color-text); }
```

Change the value at the top, the whole site updates. That's the whole pitch of a design system in one block.

---

## The three scales

Put these at the top of `styles.css`. Edit values; never edit the names.

### Type scale

A geometric progression of font sizes. Use a 1.2 or 1.25 ratio. Most small sites need 5–6 sizes; don't add more.

```css
:root {
  --font-size-xs:   0.75rem;    /* 12px - captions, fine print */
  --font-size-sm:   0.875rem;   /* 14px - secondary text */
  --font-size-base: 1rem;       /* 16px - body */
  --font-size-lg:   1.25rem;    /* 20px - lead paragraph */
  --font-size-xl:   1.5rem;     /* 24px - subhead */
  --font-size-2xl:  2rem;       /* 32px - section heading */
  --font-size-3xl:  3rem;       /* 48px - page heading */
}
```

```css
h1 { font-size: var(--font-size-3xl); }
h2 { font-size: var(--font-size-2xl); }
h3 { font-size: var(--font-size-xl); }
body { font-size: var(--font-size-base); }
```

The trick: **never write a raw font-size again**. If a designer asks for "slightly bigger," you adjust the variable. The whole site stays proportional.

### Spacing scale

Same idea for padding and margin. Use a base unit (often 4px or 8px) and multiples.

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-24: 6rem;     /* 96px */
}
```

```css
section { padding: var(--space-16) var(--space-4); }
.card  { padding: var(--space-6); gap: var(--space-4); }
```

Rule: **never write a raw padding or margin again.** If you find yourself wanting `padding: 13px`, you don't — you want `--space-3` (12px) or `--space-4` (16px). Pick one.

The discipline of a spacing scale is what makes "professional" layouts feel different from amateur ones. Random spacing reads as chaos.

### Color tokens

Two layers: **palette** (raw colors) and **semantic** (named uses). Both as variables.

```css
:root {
  /* Palette (raw colors, named by what they are) */
  --color-green-900: #0d1f12;
  --color-green-700: #1a3a23;
  --color-green-500: #2d6741;
  --color-cream-100: #faf6ed;
  --color-cream-200: #f0e8d4;
  --color-gray-900:  #1a1a1a;
  --color-gray-500:  #767676;
  --color-gray-200:  #e5e5e5;
  --color-white:     #ffffff;

  /* Semantic (named by where they go) */
  --color-text:        var(--color-gray-900);
  --color-text-muted:  var(--color-gray-500);
  --color-bg:          var(--color-cream-100);
  --color-bg-alt:      var(--color-cream-200);
  --color-accent:      var(--color-green-700);
  --color-accent-strong: var(--color-green-900);
  --color-border:      var(--color-gray-200);
}
```

```css
body { background: var(--color-bg); color: var(--color-text); }
.button { background: var(--color-accent); color: var(--color-white); }
.card { border: 1px solid var(--color-border); }
```

The reason for two layers: the **semantic** names are what your CSS uses (`--color-accent`). The **palette** names are what you swap when the brand color changes. Decoupling these lets you rebrand without rewriting every selector.

---

## Picking the palette

Two free tools that do the heavy lifting:

- **coolors.co** — generate a 5-color palette by hitting space. Lock the colors you like; iterate.
- **paletton.com** — start from one color, pick a harmony rule (complementary, analogous, triadic), get a coordinated palette.

Rules of thumb for a small site:
- **1 strong accent color** (your brand color)
- **2 neutrals** (one warm-leaning or cool-leaning, one truly neutral)
- **1 background** (often a tinted white — `#faf6ed` not `#ffffff`)
- **A scale of grays** for body text and borders

Don't pick six brand colors. You'll regret it.

### Contrast check the palette

Run every text-on-background combination through **webaim.org/resources/contrastchecker**:

- Body text on background: 4.5:1 minimum (per `06_accessibility.md`)
- Heading text on background: 3:1 minimum at 24px+
- Button text on button background: 4.5:1

If a combination fails, darken/lighten the text token until it passes. Better to find this now than after the site is built.

---

## What about a `:root` overrides for dark mode?

Tempting but **don't do it on a small site**. Adding dark mode doubles your token surface area and quadruples your testing surface for marginal value. Most clients never ask for it.

When a client *does* ask: defer to a v2 engagement. Adding dark mode well takes 1–2 days of additional design and testing for a 5-page site.

---

## Don't bother with

These belong in a bigger design system, not a static-site one:

- **A Storybook** — overkill for a 5-page site
- **A separate JSON token file** — your CSS is the token file
- **Component variants in code** (a `Button` with 5 variants, sizes, states) — that's a JS component library, not a static-site need
- **Type-scale math via `calc()` or `clamp()` chains** — fixed sizes are fine; if responsive sizing is needed, use a couple of `@media` overrides
- **Atomic / utility classes** (Tailwind-style) — you can, but that's its own framework. Plain CSS with tokens beats it for a small static site.

You can grow into these things if a single site outgrows the scale. Most won't.

---

## Common pitfalls

- ❌ Hard-coding colors and font sizes in component CSS. Use the variables.
- ❌ Six brand colors that don't relate to each other. Pick one and shade it.
- ❌ Skipping the contrast check on the palette. Pretty fails to pass.
- ❌ Adding 12 spacing tokens "just in case." Eight is plenty for most sites.
- ❌ Trying to keep the design system in sync with Figma manually. The CSS is the source of truth; everything else is documentation.
- ❌ Spending two days building tokens before any content is on the page. Build a few pages first, **then** factor out the tokens.

---

## Update state

```markdown
## Progress
...
- ✓ Design tokens — type, spacing, color scales in :root
```