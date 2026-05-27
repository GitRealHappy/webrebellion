# Performance

Making the site fast. On a static site, most of "performance" is about images, fonts, and not loading things the page doesn't need. There's no server to optimize.

Aim for a **Lighthouse Performance score of 90+** and a **Largest Contentful Paint under 2.5 seconds.** Past that, you're chasing diminishing returns.

---

## When to read this

User says:
- "The site feels slow"
- "Lighthouse score is low"
- "Improve performance"
- "Core Web Vitals"
- "The hero image takes forever"

---

## Run Lighthouse first

Before changing anything, measure.

1. Open the live site in **Chrome Incognito** (extensions can skew results).
2. Right-click → Inspect → **Lighthouse** tab.
3. Check **Performance** only (leave the others for `06_accessibility.md` / `04_seo_basics.md` audits).
4. Pick **Mobile** (mobile is the harder test; if mobile passes, desktop passes).
5. Click **Analyze page load**.

You get four numbers:

| Metric | Target | What it means |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | When the biggest thing in view loads |
| INP (Interaction to Next Paint) | < 200ms | How fast clicks/taps respond |
| CLS (Cumulative Layout Shift) | < 0.1 | How much stuff jumps around as the page loads |
| FCP (First Contentful Paint) | < 1.8s | First text/image appears |

These are **Core Web Vitals** — Google uses them as a ranking signal. If they all pass, you're done.

---

## The big six fixes

In order of impact for static sites.

### 1. Image sizes and formats

Already covered in `03_responsive_and_assets.md:127-141` — read that section. Two performance-specific reminders:

- Hero images: budget **under 200KB** for mobile. Bigger and LCP suffers.
- Use **WebP** when you can. WebP is ~25–35% smaller than JPG at the same quality. **squoosh.app** converts JPG/PNG → WebP in the browser.
- For the hero image specifically, add `fetchpriority="high"`:
  ```html
  <img src="images/hero.webp" alt="..." width="1600" height="900" fetchpriority="high">
  ```
  This tells the browser to prioritize loading it.

### 2. Lazy-load below-the-fold images

For images that aren't visible on first paint:

```html
<img src="images/product-3.jpg" alt="..." width="800" height="600" loading="lazy">
```

`loading="lazy"` skips the image until the user scrolls near it. Works in every modern browser. Don't put it on the hero — you want that loaded immediately.

### 3. Font loading

Google Fonts, Adobe Fonts, and self-hosted fonts all have the same gotcha: by default, browsers wait for the font to load before painting any text. Sometimes for seconds. The fix:

```css
@font-face {
  font-family: 'YourFont';
  src: url('fonts/your-font.woff2') format('woff2');
  font-display: swap;
}
```

`font-display: swap` tells the browser: "show fallback text immediately, swap in the real font when it arrives." Eliminates a common source of slow LCP.

Google Fonts URL form — append `&display=swap`:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap">
```

Bonus: limit yourself to **two font families** total (body + display). Three is rare, four is bloat.

### 4. Preconnect to external origins

If you load assets from a different domain (Google Fonts, Stripe, Cloudflare images), hint the browser to start the connection early:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

Put these high in `<head>`, before the actual `<link rel="stylesheet">`. Saves 100–300ms on first paint.

Don't preconnect to everything. Each preconnect opens a connection — overdo it and you waste bandwidth. Limit to 2–4 origins you actually load critical assets from.

### 5. Set explicit width and height on images

Already in `03_responsive_and_assets.md:103-109`. The performance angle: missing dimensions cause **CLS** (layout shift) as images load and push other content around. Browsers can't reserve space without knowing the size.

```html
<!-- Right: layout reserves the space -->
<img src="hero.webp" alt="..." width="1600" height="900">

<!-- Wrong: page jumps when the image loads -->
<img src="hero.webp" alt="...">
```

### 6. Don't ship JS you don't use

Static sites should ship **minimal JavaScript.** If you have a build process that generates a 500KB bundle for a 5-page site, you're doing too much.

Common offenders:
- jQuery (rarely needed in 2026 — modern HTML/CSS does most of what people used jQuery for)
- Full-page animation libraries (GSAP, anime.js) when a few CSS transitions would do
- Carousel libraries for a 3-image carousel
- Analytics tags that load 200KB of tracking SDK (use `08_analytics.md`'s lightweight options)

If you must use a library, load it deferred:

```html
<script src="library.js" defer></script>
```

`defer` waits to execute the script until after HTML is parsed, so it doesn't block rendering.

---

## What Lighthouse will yell at you about

Common warnings and the fix:

| Warning | Fix |
|---|---|
| "Properly size images" | Resize before upload (see image-size section above) |
| "Serve images in next-gen formats" | Convert to WebP via squoosh.app |
| "Ensure text remains visible during webfont load" | Add `font-display: swap` |
| "Avoid enormous network payloads" | Compress images, remove unused libraries |
| "Avoid an excessive DOM size" | Trim pages with thousands of elements — usually means rethinking the page |
| "Eliminate render-blocking resources" | Move non-critical `<script>` tags to before `</body>` or add `defer` |
| "Largest Contentful Paint element" | Add `fetchpriority="high"` to the hero, compress it harder |
| "Cumulative Layout Shift" | Set width/height on images; reserve space for embeds with aspect-ratio CSS |

Don't chase 100. Chase 90+ and call it done. The last 10 points usually require trade-offs (no fonts, no analytics, no embedded video) that aren't worth it.

---

## Test on a real phone

Lighthouse Mobile simulates throttled CPU and slow network, but it's still a simulation. Test the actual site on an actual phone over actual cellular:

1. Push the change to live.
2. On your phone, turn off Wi-Fi (force cellular).
3. Open the live URL in an incognito/private tab.
4. Does it feel slow? Does the hero image load quickly? Does text appear immediately?

Subjective but accurate.

---

## When to stop

If you're at:
- Lighthouse Performance 90+
- LCP under 2.5s on mobile
- No visible layout shift
- Page feels fast on a real phone

…**stop.** Don't go further. Every additional optimization risks introducing complexity (image-CDN, service worker, critical-CSS inlining) that's hard to maintain on a static site.

---

## Common pitfalls

- ❌ Optimizing without measuring first. You can't tell what's slow without Lighthouse / a real test.
- ❌ Shipping 5MB hero images "because they look great." Compress before upload.
- ❌ Loading three font families with five weights each — guaranteed slow.
- ❌ Adding `loading="lazy"` to the hero image. The hero needs to load immediately, not lazily.
- ❌ Chasing Lighthouse 100 at the cost of removing useful features.
- ❌ Trusting localhost performance. Always test the deployed site over a real network.

---

## Update state

```markdown
## Progress
...
- ✓ Performance pass — Lighthouse <score>, LCP <time>, mobile-tested
```