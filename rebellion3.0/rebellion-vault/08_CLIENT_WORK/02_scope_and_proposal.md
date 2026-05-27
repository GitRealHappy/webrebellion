# Scope and Proposal

Turning the intake conversation into a written, signable description of what you'll build, when, and for how much.

A good scope is your single best defense against scope creep. It is the document you point to when, six weeks in, the client says "and could we also add a blog?"

---

## When to read this

User says:
- "How do I write a proposal?"
- "What goes in a scope of work?"
- "How do I price this project?"
- "The client wants to know what they're getting"

(For raw pricing strategy, see `04_pricing.md`. This file covers how to *structure* what you'll build; that one covers what to *charge*.)

---

## Fixed-bid vs. hourly

Pick one before writing the proposal. They lead to very different documents.

| | Fixed-bid | Hourly |
|---|---|---|
| Client knows total cost upfront | ✅ | ❌ |
| You absorb overruns | ✅ (your problem) | ❌ (their problem) |
| Encourages tight scope | ✅ | ❌ (incentivizes rambling) |
| Good for unfamiliar work | ❌ (you'll underestimate) | ✅ |
| Easy to invoice | ✅ | ❌ (need time tracking) |

**Recommend: fixed-bid for most Rebellion-scope sites.** They're known territory — landing pages, small marketing sites, portfolio sites — and the client wants certainty. Save hourly for ambiguous scopes (debugging an old site, "make whatever changes I think of this month").

---

## Scope of work structure

One page. Two if you must. Past two pages people stop reading.

### 1. What we're building (1 paragraph)

```
A 5-page static marketing site for Oakmoss Studio: home, products,
process, about, contact. Mobile-friendly, lightly animated, ready
for Oakmoss to add new product pages themselves via the GitHub web
UI after launch.
```

Plain English. No jargon they won't recognize.

### 2. Pages (list every one)

```
- Home (hero, product grid, about teaser, newsletter signup)
- Products (full product grid, filterable by scent family)
- Individual product page template (one per product, max 20)
- Process (how candles are made — text + photos)
- About (founder bio + brand story)
- Contact (form + studio address)
```

If a page isn't in the list, it isn't in the scope. Period.

### 3. Features (list every one)

```
- Stripe Payment Link per product (Level 1, per 04_FEATURES/01)
- Contact form via Formspree
- Newsletter signup connected to MailerLite (free tier)
- SEO basics: title, meta, OG cards (per 04_FEATURES/04)
- Favicons + apple-touch-icon (per 04_FEATURES/05)
- Privacy policy + terms (generated via Termly)
```

Reference the Rebellion modules you'll use. It commits you to scope and signals to the client (and future-you) which patterns you're applying.

### 4. What's not included

```
Out of scope for this engagement:
- Logo design / brand identity (Oakmoss provides finished logo)
- Product photography (Oakmoss provides photos, edited)
- Copywriting beyond light editing (Oakmoss provides copy)
- E-commerce inventory management (Stripe Payment Links only)
- Email marketing automation beyond signup
- Blog / content management beyond GitHub web UI editing
- Hosting cost or domain registration fees (Oakmoss pays directly)
```

This is the **most important section in the document.** Anything not listed here is going to be argued about later. Be generous with what you list.

### 5. Timeline

```
Week 1: Content collection, sitemap finalized
Week 2: Page designs (homepage + one inner page) reviewed
Week 3: Build out all pages
Week 4: QA, accessibility check, deployment, training
```

Round numbers. Build in slack — clients are slow to provide content; assume 50% padding.

### 6. Deliverables

```
- Live site at oakmoss.studio
- GitHub repository, Oakmoss as admin
- One 30-min training call (CMS / making text edits)
- One-page "how to edit your site" doc
- 30 days of post-launch bug fixes (anything broken at handoff)
```

What they get at the end. Tangible items, not "a great site."

### 7. Price + payment terms

```
Total: $4,800
- 50% ($2,400) deposit, due before work begins
- 25% ($1,200) at design approval (end of week 2)
- 25% ($1,200) at launch
```

See `04_pricing.md` for how to land on the number. See `05_invoicing_and_payment.md` for sending the invoices.

### 8. Revisions

```
Includes two rounds of revisions on the design phase and two rounds
on the built site. Additional revisions billed at $125/hour, agreed
in writing before work starts.
```

Without this clause, "just one more tweak" is infinite.

### 9. Acceptance

```
The site is deemed complete and accepted when:
- All pages listed in section 2 are live at oakmoss.studio
- The form, Stripe link, and signup are tested and working
- Training call is delivered

If acceptance is delayed beyond 30 days due to client unavailability,
the final invoice is due regardless.
```

This is the clause that gets you paid when a client ghosts you at the end. Important.

---

## Scope-creep guardrails

When a client asks for something not in the scope:

```
Happy to add that — it's outside the scope we agreed on. Here's
what I'd estimate:

Add [feature]: ~$X, adds [Y days] to the timeline.

Want me to send a change order to add it formally?
```

Three reasons this works:
1. You don't say no — saying no makes you a roadblock.
2. You name the price and timeline impact — the client decides whether it's worth it.
3. The "change order" formalism keeps it on paper, not buried in Slack.

A change order is just an email or short PDF: "Adding X for $Y, due Z. Reply 'approved' to proceed." Don't start the work until they approve in writing.

---

## Send the proposal

PDF is the standard. Tools:

- **Pages / Word / Google Docs** → export to PDF. Fine for most.
- **Notion** → can publish as a public page; some clients like this.
- **Better Proposals / Bonsai / HoneyBook** → all-in-one proposal + esign + invoice. Worth it if you're sending more than ~one proposal a month.

Send via email with a short cover:

```
Hi Sara,

Attached is the proposal for the Oakmoss site, based on our call
on the 14th. Quick summary:

- 5 pages, Stripe checkout, contact form, newsletter signup
- 4 weeks from deposit to launch
- Total $4,800, 50% deposit

Let me know if anything needs adjusting. If it looks good, reply with
'approved' and I'll send a contract and invoice for the deposit.

— Jane
```

Don't attach the contract yet. The contract comes once they agree to the scope, in the next step (`03_contracts.md`).

---

## Common pitfalls

- ❌ Scope that's a paragraph instead of a list. Lists are easier to dispute and enforce.
- ❌ No "out of scope" section. The most important section.
- ❌ Quoting the project without writing the scope first. The scope **is** how you arrived at the price.
- ❌ "Two rounds of revisions" with no definition of what a round is. A round = one consolidated list of changes from the client, delivered together.
- ❌ Tying the project to a fixed launch date without a clause for content delays. Client provides content late → you eat the delay → you miss the date → you look bad. Tie the date to "X weeks from deposit + content delivery."

---

## Update state

Add to `_PROJECT_STATE.md`:

```markdown
## Progress
...
- ✓ Scope of work sent (<date>)
- ◯ Scope approved
- ◯ Contract signed
- ◯ Deposit received
```