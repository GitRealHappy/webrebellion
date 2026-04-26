# The Web Rebellion — Static storefront

This project is a **small, static website** for showcasing and selling AI mega-prompt bundles. It uses plain HTML, CSS, and a thin layer of JavaScript to render the product catalog from a single data file. There is **no build step** and **no backend**; Stripe is linked via checkout URLs you configure in the data.

## Scope

- **Homepage** (`index.html`): hero, catalog section, and a grid of product cards driven by `products.js`.
- **Product detail pages** (`product.html` + `product.js`): one template page; the active product is chosen with the query string `?id=...` (e.g. `product.html?id=one-hour-web-designer`).
- **Styling** (`styles.css`): editorial “printing press” look, responsive layout, and states for unavailable / to-be-announced products.
- **Content source of truth** (`products.js`): titles, descriptions, prices, feature lists, YouTube embed URLs, Stripe links, and flags such as `isTba` / `isUnavailable`.

Out of scope for this repo: payment server code, user accounts, CMS, or automated deploy config. You can host this on any static host (GitHub Pages, Netlify, S3, etc.) and paste real Stripe Payment Links or Checkout URLs when ready.

## Project structure

| File | Role |
|------|------|
| [index.html](index.html) | Site entry: header, hero, catalog mount `#product-grid`, footer. |
| [product.html](product.html) | Product detail shell: mount `#product-container`, shared header/footer. |
| [products.js](products.js) | `window.STORE` — brand metadata and the `products` array (all copy and URLs). |
| [home.js](home.js) | Renders catalog cards from `STORE.products` into `#product-grid`. |
| [product.js](product.js) | Reads `?id=`, finds the product, renders detail layout (video, features, purchase CTA). |
| [styles.css](styles.css) | Global layout, typography, cards, product page, unavailable/TBA styles. |
| [README.md](README.md) | This file — structure and how to work on the site. |

## How the pages connect

1. `index.html` loads `products.js` then `home.js`, which fills `#product-grid` with links like `product.html?id=<product-id>`.
2. `product.html` loads the same `products.js` then `product.js`, which reads `id` and injects HTML into `#product-container`.

Product identifiers are the `id` field on each object in `products.js` (e.g. `purpose-driven-value-creator`).

## Local preview

From this directory, serve files over HTTP (so module-free scripts behave consistently in all browsers):

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/` and use the catalog links to open product pages.

## What to edit for launch

1. **Stripe**: set each product’s `stripeUrl` in [products.js](products.js) to your live Payment Link or Checkout URL.
2. **Videos**: set `videoUrl` to a YouTube **embed** URL (the site uses an `<iframe>`). Optional: append `?start=<seconds>` for deep links.
3. **Unavailable / TBA**:
   - `isUnavailable: true` — grays out the card, shows “Coming soon” on the homepage CTA, blocks purchase on the detail page.
   - `isTba: true` — same unavailable behavior plus blurred title treatment for teaser listings; use `videoUrl: null` for a placeholder panel on the detail page.
4. **Brand / SEO**: update titles and meta descriptions in [index.html](index.html) and [product.html](product.html); optional `supportEmail` in `products.js` if you reintroduce contact links later.

## Design notes

The visual system is intentionally **editorial and print-inspired** (serif display + mono accents), with tight radii and restrained color. Product cards and detail panels read from shared classes in `styles.css`; avoid duplicating layout rules in the JS templates when possible.
