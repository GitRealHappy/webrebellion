# Features Overview

Optional add-ons. Don't reach for these until the basic site is live and you have a real reason to.

---

## When to look here

When the user asks any of:
- "How do I take payments?"
- "How do I collect emails / get a contact form?"
- "How do I make this look good on phones?"
- "What features can I add?"

If the user is still scaffolding or hasn't deployed yet, gently push payment/forms questions to *after* the site is live. Easier to add features to a working site than to debug a partially working one.

---

## Decision tree

| User wants… | Read this |
|---|---|
| To accept payments / sell something | `01_stripe_payments.md` |
| To collect email signups or messages | `02_forms_and_email.md` |
| The site to work on phones, or to add images | `03_responsive_and_assets.md` |
| Analytics | (Out of scope for now — defer to Discord) |
| A blog | (Possible but heavyweight — defer or use a static-blog generator post-rebellion) |

---

## What's deliberately *not* here

- **Database** — we're static-only. If they need user accounts or saved data, that's post-rebellion.
- **Login / authentication** — same.
- **Server-side anything** — same.
- **JavaScript frameworks** — most things they want, they can do with a tiny script or a third-party embed.

If they ask, explain the tradeoff briefly and route to Discord for advice (`00_GUIDE/06_deferring_to_community.md`).

---

## Common pitfalls when adding features

- ❌ Adding three features at once
- ❌ Picking the most powerful tool when a simple one would do (full Stripe API when a Payment Link works)
- ❌ Adding a JS framework "just in case"
- ❌ Forgetting to test the feature on the deployed site (works locally, breaks on Pages)

Add one thing at a time. Test it live. Move on.

---

## Order of typical add-ons

For most learners, this is a sane order to add features:

1. **Custom domain** (covered in `03_BUILD_FLOW/05_custom_domain.md`)
2. **Responsive polish** (`03_responsive_and_assets.md`)
3. **Contact form / email collection** (`02_forms_and_email.md`)
4. **Payments** (`01_stripe_payments.md`)

Don't impose the order — but if they're picking what to do next and don't know, suggest along these lines.
