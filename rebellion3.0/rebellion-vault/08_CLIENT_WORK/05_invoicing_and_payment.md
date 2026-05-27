# Invoicing and Payment

How to send invoices, take the deposit, get the final payment, and (for retainers) bill monthly. This file covers **your** money flow with the client. For the client's payment-collection on the site you're building, see `04_FEATURES/01_stripe_payments.md`.

---

## When to read this

User says:
- "How do I invoice the client?"
- "Send the deposit invoice"
- "Client paid — what now?"
- "Should I use Stripe or something else for invoicing?"
- "Monthly retainer billing"

---

## The three invoice points (matching `02_scope_and_proposal.md`)

```
1. Deposit invoice   → sent with contract, before any work
2. Midpoint invoice  → sent at design approval / agreed milestone
3. Final invoice     → sent before handoff
```

For projects under $2K, collapse to a single 100%-upfront invoice. For projects $15K+, split into more milestones (see `04_pricing.md`).

---

## Pick a tool

You need exactly one. Pick based on volume and what you already use.

### Stripe Invoicing

- Send invoices via email; client pays by card / Apple Pay / Google Pay / ACH (US).
- 0.4% per paid invoice (one of the cheapest options).
- Free; no monthly subscription.
- Integrates with Stripe Tax if you need automated sales-tax handling.
- If you already followed `04_FEATURES/01_stripe_payments.md` Level 3 (Stripe MCP), you can ask Claude to generate invoices directly: "Send a $2,400 deposit invoice to client@oakmoss.studio for the Oakmoss site."

**Best for**: one to ten clients, monthly. Cleanest path if you're already in Stripe for other reasons.

### Wave (waveapps.com)

- Free invoicing tool. Unlimited invoices.
- Built-in basic accounting and reporting.
- US/Canada/UK card payments at standard ~2.9% rates.
- Annoying ads / upsells in the UI.

**Best for**: bookkeeping-curious freelancers who want one tool for invoices + books.

### Bonsai (hellobonsai.com)

- $25/month-ish. Invoices + contracts + proposals + time tracking + tax in one tool.
- Templates for the documents in `02_scope_and_proposal.md` and `03_contracts.md` are baked in.
- Stripe/PayPal on the back end for actual payment processing.

**Best for**: full-time freelancers running multiple clients. Worth the subscription once you're past 3–4 invoices/month.

### Honorable mentions

- **HoneyBook** ($29/month) — same shape as Bonsai, more polished UI, photographer/creative-focused
- **PayPal Business invoicing** — works, but PayPal disputes and account freezes are real; avoid as primary
- **Just a bank transfer with a PDF "invoice"** — fine for local clients you trust; no payment processor fees

**Recommendation for someone starting out**: Stripe Invoicing. Free, fast, you already need Stripe for client *sites*.

---

## What goes on an invoice

Most tools auto-generate this — but if you build one by hand:

```
Invoice #: 2026-004
Date issued: 2026-05-14
Due date: 2026-05-21

From:
  Jane Doe
  jane@janedoe.com
  [address]
  [tax ID if applicable]

To:
  Oakmoss Studio
  sara@oakmoss.studio
  [address]

Description                                       Amount
─────────────────────────────────────────────────────────
Oakmoss Studio website — deposit (50% of $4,800)  $2,400.00
─────────────────────────────────────────────────────────
Total due                                         $2,400.00

Payment methods:
  Card / ACH via the Stripe link below
  Bank transfer to [account] (reference invoice #)

Payment terms: Net 7 — overdue invoices accrue 1.5% per month.
```

The line item description should match the corresponding contract milestone exactly. Don't add line items that aren't in the scope.

---

## The deposit sequence (the most important one)

Get this right and the rest of the project is downhill.

```
1. Client says "approved" to the proposal (see 02_scope_and_proposal.md)
2. You send: signed contract (esign) + deposit invoice in the same email
3. Client signs the contract
4. Client pays the deposit
5. You confirm both received
6. NOW you start the work
```

Order is non-negotiable. **No deposit, no work.** The deposit is the contract's enforcement mechanism — without it, you have a promise from someone you barely know.

Email template:

```
Hi Sara,

Great — attached are two documents to make this official:

1. Contract for the Oakmoss site — please sign and return.
2. Deposit invoice ($2,400 = 50% of $4,800).

Once both are in (contract signed + deposit paid), I'll block off
the four weeks on my calendar and we'll get started. The deposit
typically clears within a business day.

Looking forward to it.

— Jane
```

If they delay either step beyond ~10 days, follow up once. If they delay past 30 days, the proposal is stale — re-quote. Prices may have gone up.

---

## The midpoint invoice

Sent **after** the client has approved a named milestone in writing. Examples:

- "Design approved" — they signed off on the design phase
- "Beta link delivered" — site is built and they've seen it on a staging URL
- "Content frozen" — they've committed to no further content changes

Don't send the midpoint invoice based on calendar time. Send it based on **client-acknowledged progress**. Otherwise the client feels charged for nothing.

---

## The final invoice (and getting paid before handoff)

This is the trickiest one. The natural client instinct is to want the site live, *then* pay. Your instinct must be the opposite.

The pattern that works:

1. Site is built, tested, and live on a **staging URL** (e.g., `oakmoss-staging.netlify.app` or a `staging.oakmoss.studio` subdomain).
2. Client reviews. Final tweaks happen.
3. You send the final invoice.
4. Client pays the final invoice.
5. **Now** you switch the production domain over and deliver access (GitHub repo admin, etc.).

This is enforced in the `03_contracts.md` acceptance clause. If the client pushes back ("we need it live first"):

```
"Standard practice is final invoice before launch — protects both
of us. As soon as the final payment clears, I can flip the DNS and
it'll be live within an hour."
```

If they really won't budge: at minimum, hold back **repo admin access**. The site can be live but they can't take it elsewhere until they've paid.

---

## Late and missing payments

A late payment is normal. A *missing* payment is rare but happens.

| Days overdue | Action |
|---|---|
| 1–7 | Polite reminder by email. Forward the original invoice. |
| 8–14 | Second email. Reference the contract's overdue clause and the work-pause provision. Pause work. |
| 15–30 | Third email, escalating tone. "If this isn't resolved by [date], I'll need to consider it a breach of contract." |
| 30+ | Decision: pursue (small-claims court, collections, lawyer) or write off and learn the lesson |

For projects under ~$2K, the cost of pursuing legal action usually exceeds the money owed. Write it off, internalize the lesson (deposit must clear before work starts), and move on. For larger amounts, a lawyer's demand letter is often enough to get payment.

Note: you've protected yourself in advance via the **deposit**. If you collected 50% upfront, the worst case is losing the back 50% on the rare bad client — survivable. If you collected 0% upfront, you can lose 100% — not survivable as a pattern.

---

## Sales tax / VAT / GST

This depends entirely on where you live and where the client is. **Not legal advice — talk to an accountant for your jurisdiction.**

General shape:

- **US**: federal income tax always. Sales tax on services varies by state — most states don't tax most services, some do (e.g., NY for certain digital services). Stripe Tax can compute it automatically if you set up your taxable nexus.
- **UK/EU**: VAT applies once you cross the threshold (varies by country, ~£90K UK at time of writing). If both you and the client are VAT-registered businesses in the EU, reverse-charge applies.
- **Canada**: GST/HST/QST — registration required past CAD $30K/year revenue.
- **Australia**: GST registration required past AUD $75K/year.

If you're under your country's threshold, you can usually invoice without sales tax / VAT and just track gross income. As soon as you cross the threshold, register before your next invoice.

When in doubt: defer to Discord and find a freelancer in your country.

---

## Common pitfalls

- ❌ Starting work before the deposit clears. The single most common cause of getting stiffed.
- ❌ Vague invoice line items ("design work"). Specifics tie back to the contract; vague items invite disputes.
- ❌ Not charging interest on overdue invoices. Your contract authorizes it; use it.
- ❌ Delivering the production site before the final invoice is paid. Use the staging-URL pattern.
- ❌ Ignoring tax until April. Talk to an accountant once a year; cheap compared to the alternative.
- ❌ Mixing personal and business banking. Open a separate business account from day one — it makes everything (taxes, accounting, audits) dramatically easier.

---

## Update state

Add to `_PROJECT_STATE.md` (in `## Client`):

```markdown
- **Deposit received**: ✓ <date> ($X via <method>)
- **Midpoint paid**: ✓ <date>
- **Final invoice paid**: ✓ <date>
```

Add to `01_STATE/user_knowledge.md`:

```
| Has an invoicing tool set up | yes | <date> (<Stripe / Wave / Bonsai / other>) |
```