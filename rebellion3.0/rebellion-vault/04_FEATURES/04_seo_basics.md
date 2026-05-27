# SEO Basics

The small handful of tags and files that decide how your site looks in Google search results, on Twitter/X, in Slack previews, and in iMessage link cards.

You don't need to "do SEO." You need to fill in five or six things in the `<head>` and add two text files at the repo root. That's it.

---

## When to read this

User says:
- "How do I show up in Google?"
- "How do I make link previews look right?"
- "Add meta tags"
- "What about SEO?"
- "Why does my site look weird when I paste the link in Slack?"

---

## The minimum viable head

Every page needs these. Put them at the top of `<head>`, right after `<meta charset>` and the viewport tag from `03_responsive_and_assets.md`.

```html
<title>Oakmoss Studio — Hand-poured candles in Brooklyn</title>
<meta name="description" content="Small-batch soy candles from Oakmoss Studio. Hand-poured in Brooklyn, shipped in 48 hours.">
<link rel="canonical" href="https://oakmoss.studio/">

<!-- Open Graph: used by Facebook, LinkedIn, iMessage, Slack, Discord -->
<meta property="og:title" content="Oakmoss Studio — Hand-poured candles in Brooklyn">
<meta property="og:description" content="Small-batch soy candles from Oakmoss Studio. Hand-poured in Brooklyn, shipped in 48 hours.">
<meta property="og:image" content="https://oakmoss.studio/images/og-card.jpg">
<meta property="og:url" content="https://oakmoss.studio/">
<meta property="og:type" content="website">

<!-- Twitter/X card -->
<meta name="twitter:card" content="summary_large_image">
```

The `og:image` should be **1200×630** pixels, JPG or PNG, under 1MB. Anything smaller and link previews look pixelated; anything off-ratio and Facebook crops weird.

---

## Per-page rules

`<title>` and `<meta name="description">` should be **unique per page**. Don't copy-paste the homepage values onto every page.

| Page | Title pattern |
|---|---|
| Homepage | `Brand — One-line promise` |
| Product / service | `Product name — Brand` |
| About | `About — Brand` |
| Contact | `Contact — Brand` |

Keep `<title>` under ~60 characters. Keep `<meta description>` under ~155 characters. Google truncates past that.

---

## robots.txt and sitemap.xml

Two plain-text files at the repo root. Both optional but cheap and they help.

### `robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://oakmoss.studio/sitemap.xml
```

That's the entire file. It tells crawlers "everything is fair game" and points them to your sitemap.

### `sitemap.xml`

A list of every URL on your site. For a small site, write it by hand:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://oakmoss.studio/</loc></url>
  <url><loc>https://oakmoss.studio/products/</loc></url>
  <url><loc>https://oakmoss.studio/about/</loc></url>
  <url><loc>https://oakmoss.studio/contact/</loc></url>
</urlset>
```

For sites with more than ~20 pages, generate it with **xml-sitemaps.com** (free up to 500 URLs).

Both files go in the project root, alongside `index.html`.

---

## Light JSON-LD (optional, low effort, decent payoff)

JSON-LD is structured data that tells search engines what kind of thing the page is about. For most static sites you only need one of these, placed in the homepage `<head>`.

### Personal site / portfolio

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jane Doe",
  "url": "https://janedoe.com",
  "jobTitle": "Designer",
  "sameAs": [
    "https://twitter.com/janedoe",
    "https://instagram.com/janedoe"
  ]
}
</script>
```

### Local business

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Oakmoss Studio",
  "url": "https://oakmoss.studio",
  "telephone": "+1-718-555-0123",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Bedford Ave",
    "addressLocality": "Brooklyn",
    "addressRegion": "NY",
    "postalCode": "11211",
    "addressCountry": "US"
  }
}
</script>
```

Don't go further than this without a real reason. Schema.org has hundreds of types; ignore them until something specific calls for them.

---

## Test what you wrote

Three free testers, in order of usefulness:

1. **opengraph.xyz** — paste your URL, see how it'll render in Facebook / Twitter / iMessage / Slack.
2. **search.google.com/test/rich-results** — Google's own JSON-LD validator. Use this if you added structured data.
3. **View source** in the browser — confirm the tags actually shipped after deploy. (GitHub Pages caches; sometimes the old `<head>` lingers for a minute.)

Always re-test after going live. Local previews don't catch absolute-URL mistakes (e.g., `og:image` pointing to `localhost`).

---

## Submitting to Google (optional, faster indexing)

Google will eventually find your site on its own. To speed it up:

1. Sign in to **search.google.com/search-console** with the same Google account that owns the domain.
2. Add your property (use the URL prefix option for `https://yourdomain.com/`).
3. Verify ownership via a TXT DNS record (Search Console will give you the value to paste into your registrar — same DNS panel you used in `03_BUILD_FLOW/05_custom_domain.md`).
4. Once verified, submit `https://yourdomain.com/sitemap.xml`.

You don't need to do this. Google indexes most public sites within a week or two without it.

---

## Common pitfalls

- ❌ Same `<title>` and `<meta description>` on every page
- ❌ `og:image` set to a relative path — it must be an absolute URL, otherwise previews break
- ❌ `og:image` smaller than 1200×630 — renders blurry in Slack/iMessage
- ❌ Forgetting to update meta tags after a rebrand
- ❌ "Doing SEO" by stuffing keywords. Write for humans; the tags above cover the rest.
- ❌ Adding JSON-LD that doesn't match the page (`LocalBusiness` schema on a portfolio is worse than no schema)

---

## Update state

```markdown
## Progress
...
- ✓ SEO basics — title, description, OG tags, sitemap, robots.txt
```
