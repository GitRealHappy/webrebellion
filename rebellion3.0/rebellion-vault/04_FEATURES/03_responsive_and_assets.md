# Responsive Design and Assets

Making the site work on phones and adding images / files.

---

## When to read this

User wants:
- The site to look good on a phone or tablet
- To add images, photos, or downloads
- To fix layout issues on small screens

---

## The viewport meta tag (non-negotiable)

Every HTML page should have this in the `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Without it, mobile browsers render the page at desktop width and zoom out — everything looks tiny.

If a site looks broken on mobile, check this first.

---

## The mobile-first mindset

Design for the small screen, then add larger-screen styles via media queries. Easier than the reverse.

### Default styles (small screens, written first)

```css
.container {
  padding: 1rem;
  max-width: 100%;
}

nav ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
```

### Larger-screen overrides

```css
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }

  nav ul {
    flex-direction: row;
  }
}
```

### Common breakpoints

| Width | Roughly |
|---|---|
| < 640px | phones |
| 640–1024px | tablets |
| > 1024px | laptops/desktops |

You don't need every breakpoint — pick one or two where things actually need to change.

---

## Common mobile fixes

| Problem | Fix |
|---|---|
| Content overflows horizontally | Don't use fixed `width:` — use `max-width:` instead. Add `overflow-x: hidden` on `body` if a stubborn child is misbehaving. |
| Text too small | Bump base `font-size` to 16px+. Some tools default to 14px. |
| Tap targets too small | Buttons/links should be at least 44×44px (Apple HIG). Add padding. |
| Images push the layout wide | `img { max-width: 100%; height: auto; }` in your reset. |
| Nav menu doesn't collapse | Switch to vertical (`flex-direction: column`) on small screens, or build a hamburger menu (more involved — usually skip until needed). |

---

## Adding images

### Image folder

```
07_PROJECTS/<active>/images/
  ├── hero.jpg
  ├── logo.svg
  └── ...
```

Reference relatively from HTML:

```html
<img src="images/hero.jpg" alt="Photo of a sunlit kitchen" width="1600" height="900">
```

Always:
- Use `alt` text (describe the image; "Photo of a sunlit kitchen" not "image1.jpg")
- Set `width` and `height` to the actual pixel dimensions (prevents layout jumping while loading)
- Use `max-width: 100%` in CSS so images shrink on small screens

---

### Image formats

| Format | When to use |
|---|---|
| **JPG** | Photos. Smallest size for natural images. |
| **PNG** | Logos, icons with transparency, screenshots. |
| **SVG** | Vector logos, icons. Scales without loss. |
| **WebP** | Modern, smaller than JPG/PNG. Good if you can generate it. |

For most users: JPG for photos, PNG/SVG for graphics. Don't overthink it.

---

### Image size

A 5MB image will make a fast site slow. Resize before uploading:

- Aim for **< 500KB** per image, ideally < 200KB
- Hero images can be larger (up to 1MB) but compress them
- Use **squoosh.app** (free, in-browser) or `sips` (Mac built-in) for compression

Quick Mac compression:

```
! sips -Z 1600 images/hero.jpg
```

(Resizes to max 1600px on the longest edge. `-Z` preserves aspect ratio.)

---

### Asset paths on GitHub Pages

GitHub Pages serves your repo at `/repo-name/`. So an absolute path like `/images/hero.jpg` will look for `/images/hero.jpg` on the domain root and 404.

**Always use relative paths:**

```html
<!-- Good -->
<img src="images/hero.jpg" alt="...">

<!-- Bad on GitHub Pages -->
<img src="/images/hero.jpg" alt="...">
```

Same for stylesheets and links.

---

### Downloads (PDFs, etc.)

If they want a "download my résumé" link:

```html
<a href="files/resume.pdf" download>Download résumé</a>
```

The `download` attribute hints to the browser to download instead of opening. Some browsers ignore it but most respect it.

Files folder:

```
07_PROJECTS/<active>/files/
  └── resume.pdf
```

---

## Test responsively

Two ways:

### Resize the browser

Drag the window narrow. Most issues show up between 320px and 800px.

### Chrome DevTools device mode

Right-click → Inspect → click the phone/tablet icon at the top. Choose a device preset. Reloads as that device.

This is more accurate for mobile-specific behavior (touch events, etc.) but a window resize covers most layout issues.

---

## Update state

```markdown
## Progress
...
- ✓ Responsive design — works on mobile/tablet
- ✓ Assets — <description, e.g., "hero photo, logo">
```

---

## Don't do

- ❌ Skip the viewport meta tag and wonder why mobile looks weird
- ❌ Upload 10MB phone-camera images directly
- ❌ Use absolute `/images/...` paths and expect them to work on Pages
- ❌ Build a hamburger menu before you need one — most sites work fine without
