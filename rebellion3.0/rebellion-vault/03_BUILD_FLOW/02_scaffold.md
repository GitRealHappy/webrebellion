# Scaffold

Building the HTML/CSS structure for the project.

This is where Claude does most of the writing. The user directs.

---

## Goal

Produce a working static site with:
- `index.html` (and any other page files)
- `styles/main.css` (or inline styles for tiny sites)
- `images/` folder (empty if no assets yet)
- Anything else the design calls for

The site should open in a browser and look reasonable. It doesn't have to be polished yet — that's iteration.

---

## Order of operations

1. **HTML structure first.** Get the bones right before colors.
2. **CSS pass for layout.** Spacing, sizing, basic alignment.
3. **CSS pass for vibe.** Colors, fonts, finishing touches.
4. **Mobile check.** Viewport meta, responsive layout.
5. **Preview.** Open in browser. Iterate.

Don't try to do all of it at once. Each pass should be reviewable.

---

## Standard project layout

```
<project-name>/
├── index.html
├── styles/
│   └── main.css
├── images/
└── (other pages: about.html, contact.html, etc.)
```

For very small sites (single landing page), inline `<style>` in `index.html` is fine.

---

## HTML defaults

Every HTML file starts with this skeleton:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><Page Title></title>
  <link rel="stylesheet" href="styles/main.css">
</head>
<body>
  <!-- content -->
</body>
</html>
```

Use semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`. Helps accessibility and looks cleaner.

---

## CSS defaults

Always start `main.css` with these:

```css
*, *::before, *::after { box-sizing: border-box; }

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #222;
}

img { max-width: 100%; height: auto; }
```

Then build out the project-specific styles below.

---

## Color and font choices

When the user hasn't specified:

- **Colors**: ask for one or two — a primary accent and (optionally) a background. Default neutrals if they don't have preferences.
- **Fonts**: system fonts by default (the stack above). If they want something specific, propose Google Fonts and add the `<link>` to the `<head>`.

Don't show 5 options. Pick a sensible default, name it, give them one alternative if relevant. Move.

---

## Generating content

If the user doesn't have copy yet:
- Use realistic placeholder text — not Lorem ipsum. Write *plausible* content for their type of site.
- Mark it clearly: `<!-- TODO: replace with real copy -->`
- Plan to revise once they have real content

If they have content, ask for it (paste into chat or pointer to a file). Drop it in directly.

---

## Images

If they don't have images yet:
- Skip image elements (or use a colored placeholder block)
- Don't generate AI images by default — ask first
- Suggest: take photos, use Unsplash for stock, or commission later

Image element pattern:

```html
<img src="images/hero.jpg" alt="Description of the image" width="1200" height="800">
```

Always include `alt` text and dimensions when known.

---

## Show, then iterate

After the first scaffold:

1. Save files
2. Tell the user how to preview (route to `03_iterate_and_preview.md`)
3. Wait for feedback
4. Iterate one section at a time

Don't dump 500 lines and ask "how does it look?" Build a section, check it, keep going.

---

## Update state

When the user confirms the scaffold looks right, update the project state file:

```markdown
## Progress
- ✓ Project folder created
- ✓ HTML structure
- ◯ Styled
- ...
```

If they're partway, mark partial:

```
- ⏳ Styled (homepage done, about page pending)
```

---

## Common scaffolding pitfalls

- ❌ Adding a build tool because "professionals do it"
- ❌ Generating a 200-line stylesheet upfront with rules they don't need
- ❌ Picking framework code (Bootstrap, Tailwind) without asking
- ❌ Skipping the `<meta name="viewport">` (mobile breaks)
- ❌ Forgetting to link the stylesheet
- ❌ Not setting `box-sizing: border-box` (causes layout confusion)

---

## Then route to preview

Once there's something to look at, route to `03_iterate_and_preview.md`.
