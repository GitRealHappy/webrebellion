# Legal Pages

Privacy policy, terms of service, and the cookie banner question. Most static sites need these only if they collect data (forms, analytics, payments). When they do, generators handle 95% of the work.

> ⚠ This file is **not legal advice**. It's a practical guide to common patterns. For anything serious — a real business with employees, processing EU data at scale, or a regulated industry — get a lawyer.

---

## When to read this

User says:
- "Do I need a privacy policy?"
- "Add terms of service"
- "Cookie banner"
- "Is this GDPR compliant?"
- "Privacy policy" (often surfaced from `01_stripe_payments.md` or `08_analytics.md`)

---

## Decision tree: do you actually need these?

Most personal sites don't. As soon as you collect *any* data, you do.

| Site does… | Privacy policy | Terms | Cookie banner |
|---|---|---|---|
| Pure portfolio, no forms, no analytics, no payments | Optional | Optional | No |
| Contact form (Formspree / mailto with replies) | **Yes** | Optional | No |
| Email signups (MailerLite, ConvertKit, etc.) | **Yes** | Optional | No |
| Privacy-friendly analytics (Plausible, Fathom) | **Yes** (one paragraph) | Optional | Usually no |
| Google Analytics / Facebook Pixel | **Yes** | Optional | **Yes** if EU/UK/CA visitors |
| Stripe / sells things | **Yes** | **Yes** | Same as analytics row |
| Has logins / accounts | **Yes** | **Yes** | **Yes** |

"Optional" means nothing forces you, but a one-paragraph "this site doesn't collect anything" page builds trust and costs nothing.

---

## Where they live on the site

Standard pattern: two links in the footer, on every page.

```html
<footer>
  <p>© 2026 Oakmoss Studio · <a href="/privacy.html">Privacy</a> · <a href="/terms.html">Terms</a></p>
</footer>
```

File layout:

```
07_PROJECTS/<active>/
  ├── index.html
  ├── privacy.html
  └── terms.html
```

If your site has a `pages/` subfolder, put them there and adjust the links.

---

## Generating the documents

Two free generators handle the boilerplate. Pick one and stick with it.

### Termly (termly.io)

- Free tier for one site, basic privacy policy + terms + cookie policy.
- Walks you through a questionnaire ("Do you use Google Analytics? Do you sell to EU residents? Do you collect names and emails?") and outputs HTML you paste into your page.
- Update annually or when you change what you collect.

### TermsFeed (termsfeed.com)

- Free tier covers a basic privacy policy and terms.
- Simpler questionnaire than Termly, fewer features (no cookie consent banner in free tier).
- Good for a one-time generate-and-paste.

### What both ask you

Have these answers ready before starting:

- Site URL and business/contact name
- Country and state/province you operate from
- What you collect (emails via Formspree? names + addresses via Stripe? IP via analytics?)
- Which third parties touch the data (Formspree, Stripe, MailerLite, Plausible, Cloudflare, etc.)
- Whether you sell to EU/UK/California users (drives GDPR/CCPA language)

The output is HTML/Markdown you save as `privacy.html` and `terms.html` inside the project.

---

## The cookie banner question

Annoying topic. Short version:

**You need a cookie banner if and only if** you load third-party scripts that drop tracking cookies *and* you serve EU/UK or California users.

- **No banner needed**: Plausible, Fathom, Simple Analytics — these are cookieless by design (covered in `08_analytics.md`). Same for Cloudflare Email Routing.
- **Banner needed**: Google Analytics 4 (yes, even with "Consent Mode"), Facebook Pixel, Hotjar, Intercom, any ad-network tag.
- **Stripe payment links**: Stripe drops cookies *only* once the user lands on the Stripe-hosted checkout page. That page has its own consent — your site doesn't need a banner because of Stripe.

If you do need one, the simplest free options:

- **Cookie Consent by Osano** (cookieconsent.osano.com) — a small drop-in script, no signup, free.
- **Termly's consent banner** — included with Termly if you use them for the policy too.

Both render a small bar at the bottom of the page with "Accept" / "Reject" buttons and block the scripts until consent.

Don't add a banner just to be safe. A banner where it isn't needed is bad UX and signals "we collect more than we do."

---

## The refund-policy detail (for sites selling things)

Stripe and most payment processors require you to display a refund/return policy somewhere visible. It can be one sentence:

> Digital goods are non-refundable. For physical goods, contact us within 14 days of receipt for a full refund.

Or:

> All sales final.

Put it in the footer, on the checkout page, or as a section inside `terms.html`. Don't bury it.

---

## When to skip generators and call a lawyer

- You're processing health, financial, or children's data
- You operate in a regulated industry (medical, legal, financial advice)
- You have employees, contractors, or partners with shared access
- You're raising money or going through due diligence
- You're a business entity in a jurisdiction with strict rules (Germany, France, California for large operators)

For everyone else: generators are the right tool. They've been vetted by their own lawyers, they're standard-issue across the small-site web, and they're updated as laws change.

---

## Common pitfalls

- ❌ Copy-pasting another site's privacy policy verbatim. It mentions services you don't use and misses ones you do.
- ❌ Adding a cookie banner because everyone else has one, when your site doesn't drop tracking cookies. You're adding friction for no reason.
- ❌ Forgetting to link to the policy from the footer of *every* page (most generators check this; auditors definitely do).
- ❌ Generating a policy once and never updating it after adding new tools (e.g., you added Mailchimp six months later — your policy still says "we don't share data with third parties").
- ❌ Treating "privacy policy generator" output as a substitute for legal counsel when the situation actually warrants one.

---

## Update state

```markdown
## Progress
...
- ✓ Privacy policy + terms (<Termly | TermsFeed | custom>)
- ✓ Cookie banner — <none needed | Osano | Termly>
```