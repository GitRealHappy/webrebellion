# Favicons and Icons

The tiny image in the browser tab. The icon iOS/Android use when someone saves your site to their homescreen. The image Slack/Discord show next to your link.

One generator solves all of this in about three minutes.

---

## When to read this

User says:
- "How do I add a favicon?"
- "The browser tab is showing a blank icon"
- "Add a homescreen icon"
- "Why is there no icon when I save this to my iPhone?"

---

## What you actually need

Three files at the repo root, plus four lines in `<head>`. That's the whole job.

| File | Purpose |
|---|---|
| `favicon.ico` | Browser tab. Legacy format, still required. |
| `apple-touch-icon.png` | iOS / iPadOS "Add to Home Screen". 180×180px. |
| `site.webmanifest` | Android / PWA homescreen + theme color. Tiny JSON file. |

You don't need 27 different sizes anymore. Modern browsers and OSes are smart about scaling.

---

## Generate them in one shot

1. Make a **square source image**. SVG is best (scales perfectly), PNG works fine at 512×512 or larger.
   - For a personal site, your initial or a simple monogram works.
   - For a brand, use the logomark (the icon part of the logo, not the full wordmark — wordmarks become illegible at 16×16).
   - Solid colored background reads better than transparent at tiny sizes. The tab favicon is 16 pixels wide; thin lines disappear.

2. Go to **realfavicongenerator.net**. Upload the image.

3. The site previews how it'll look in Chrome, Safari, iOS, Android, Slack, etc. Adjust the safe-area padding if anything looks cropped. Pick a theme color (the Android status-bar tint when your site is open as a PWA — usually your brand's primary color).

4. Click **Generate**. Download the ZIP.

5. Extract these three files into your project root:
   - `favicon.ico`
   - `apple-touch-icon.png`
   - `site.webmanifest`

   The generator also includes a `favicon-32x32.png`, `favicon-16x16.png`, `android-chrome-*.png`, and a `safari-pinned-tab.svg`. **Keep only the three above** unless you have a specific reason (e.g., Safari pinned tabs). Fewer files = simpler repo.

6. Add to every page's `<head>` (after the meta tags from `04_seo_basics.md`):

   ```html
   <link rel="icon" href="/favicon.ico" sizes="any">
   <link rel="apple-touch-icon" href="/apple-touch-icon.png">
   <link rel="manifest" href="/site.webmanifest">
   ```

7. Open `site.webmanifest` and edit the `name`, `short_name`, and color values to match your site:

   ```json
   {
     "name": "Oakmoss Studio",
     "short_name": "Oakmoss",
     "icons": [
       { "src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" },
       { "src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" }
     ],
     "theme_color": "#1a2e1f",
     "background_color": "#ffffff",
     "display": "standalone"
   }
   ```

   (If you kept only the three core files above, delete the `icons` array — Android will fall back to `apple-touch-icon.png`.)

---

## The path quirk on GitHub Pages

The plan in `03_responsive_and_assets.md:144-158` warns against absolute paths because GitHub Pages serves project repos at `/repo-name/`. **Favicons are an exception** if your site is at a custom domain or at the user/organization root (e.g., `username.github.io`). Browsers expect favicons at the domain root.

- **Custom domain or user/org root**: use `/favicon.ico` (absolute path, leading slash). Works.
- **Project page on `username.github.io/repo-name/`**: use `favicon.ico` and `apple-touch-icon.png` (relative paths). The browser will still find them via the explicit `<link rel="icon">` tags.

If unsure: relative paths everywhere. They always work; absolute paths only work in some hosting setups.

---

## Test it

1. Deploy. Wait 30–60 seconds for GitHub Pages to update.
2. Open the live URL in an **incognito window** (browsers cache favicons aggressively — incognito skips the cache).
3. Check the browser tab. You should see the icon.
4. On iPhone Safari: tap Share → Add to Home Screen. The preview should show `apple-touch-icon.png`.
5. Paste the URL into Slack/Discord. The favicon shows up in the link preview chip.

If the old icon is still there after deploy: hard-refresh with **Cmd-Shift-R** (Mac) / **Ctrl-Shift-R** (Windows), or just wait — the browser cache expires within an hour.

---

## Common pitfalls

- ❌ Using a wordmark (text-heavy logo) at 16×16 — it becomes an illegible smudge. Use the icon-only mark, or a single letter.
- ❌ Transparent background on the source image without testing how it reads on dark browser themes. Solid color is safer.
- ❌ Forgetting to put `favicon.ico` at the repo **root**, not inside `images/`. Browsers look at the root by default.
- ❌ Skipping the incognito test and assuming "it's broken" when really the browser is just caching the old one.
- ❌ Keeping all 12 files from realfavicongenerator's ZIP. You don't need them.

---

## Update state

```markdown
## Progress
...
- ✓ Favicons + apple-touch-icon + manifest
```