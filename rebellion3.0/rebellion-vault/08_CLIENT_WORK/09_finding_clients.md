# Finding Clients

How to get your first three paying clients. Past three, the work refers itself — but the first three are the hardest part of freelancing.

This file is intentionally deferred-heavy. Sales / marketing strategy is a deep field, most of which is outside the Rebellion's scope. The patterns below are what reliably work for indie static-site freelancers; for anything more sophisticated, see the "ask in Discord" links.

---

## When to read this

User says:
- "How do I get clients?"
- "I want to start freelancing"
- "I have no portfolio yet — what do I show?"
- "Where do I find work?"

---

## You need three things, in order

1. A **portfolio site** with at least 2–3 pieces of work
2. A **case study** for each piece — not just a screenshot, but a story
3. A **way for people to contact you** without 4 layers of friction

You don't need: a logo, a brand identity, a polished marketing funnel, an email list, an Instagram. Those are post-rebellion. Right now: three pieces, three case studies, one contact button.

---

## The portfolio site

Build it using the Rebellion. It should be the **best** site you've ever built — it's the prospect's evidence that you can build a site for them.

Minimum scope:

- **Home** — one sentence about what you do, three cards linking to case studies, contact link
- **About** — one or two paragraphs about you (skip the "I'm passionate about pixel-perfect design" boilerplate). Photo helps.
- **Work / Portfolio** — list of case studies
- **Case study pages** — one per project (see next section)
- **Contact** — simple form (Formspree, per `04_FEATURES/02`) or a `mailto:` link

What to apply rigorously:
- All of `04_FEATURES/04_seo_basics.md` (you want to be findable)
- All of `04_FEATURES/06_accessibility.md` (clients notice when sites are sloppy)
- All of `04_FEATURES/07_performance.md` (a slow portfolio kills the pitch)

Custom domain. Email at the domain (`04_FEATURES/10_domain_email.md`). This is the one site where "professional polish" matters more than any client's.

### What goes in the homepage one-liner

```
Bad:  "Web designer and developer building beautiful, performant websites."
Good: "I build static marketing sites for small businesses. Fast, easy
       to update, and live in 4 weeks."
```

Specifics anchor better than adjectives. Name your niche.

---

## Case study format

A case study is a story, not a screenshot. Use this structure for every piece in your portfolio:

```markdown
# Oakmoss Studio — Brooklyn candle brand

[Live site — Built in May 2026]

## The problem
Oakmoss had been selling on Instagram for two years and were ready
for their own site. They needed to take payments, collect emails,
and look as considered as their packaging.

## What we built
A 5-page static site with Stripe checkout for 12 products, an email
signup connected to MailerLite, and a CMS overlay so Sara can add
new products herself.

[Three or four screenshots — hero, product page, mobile view]

## Decisions worth talking about
- We started with a Stripe Payment Link per product (Level 1) rather
  than full Stripe Checkout. Saved 2 weeks of build time; Sara can
  upgrade later if she outgrows it.
- The site is hosted on GitHub Pages. Zero hosting costs forever, and
  Sara owns every piece of infrastructure.
- All the colors and spacing are in CSS variables (a "design system
  lite") so Sara can rebrand seasonally without my involvement.

## Result
- Launched in 3.5 weeks
- 31% increase in average order value vs. the Instagram-only baseline
  (Stripe analytics, first 3 months)
- Sara's been able to add 4 new products herself since launch

## Tech
HTML, CSS, vanilla JavaScript, Stripe Payment Links, MailerLite,
Decap CMS overlay. Hosted on GitHub Pages.

Built for: Oakmoss Studio (oakmoss.studio)
```

Five sections, every time:
1. **Problem** — what the client needed
2. **What we built** — concrete deliverable
3. **Decisions** — show your thinking (this is what prospects actually buy)
4. **Result** — outcome with a number if you have one
5. **Tech** — what tools

The "Decisions" section is what most freelancers skip. It's the single most persuasive element of a case study because it shows judgment, not just execution.

### When you have no real client work yet

You need 2–3 case studies but you've never been paid? Two solid moves:

1. **Build a site for a real person you know** — your friend's coffee shop, your sibling's freelance practice, a non-profit you care about. Free or token payment. Treat it like real client work: intake, scope, weekly updates, the whole loop. Negotiate that you can use it in your portfolio.

2. **Build a "client" project for a hypothetical brand you invent.** Specifically: not a generic "Lorem Ipsum" portfolio piece. Pick a real category ("a barber in Williamsburg," "a wedding photographer in Portland") and build a complete site for that imagined business. Write the case study as if it were real, but **label it clearly** as a self-directed project at the top.

The second option works better than freelancers think — case studies with specific imagined briefs read more competent than generic mood-board pages.

Three case studies and you've got a portfolio. Don't wait until you have ten; ship at three.

---

## Where to find the first three clients

In approximate order of how reliable each is for a beginning freelancer:

### 1. Your existing network (highest hit rate)

People already in your phone who could be your first client:
- Anyone you know who runs a business without a website
- Friends who just started a side project
- Family in a profession that needs a site (lawyers, therapists, contractors, artisans)
- Past colleagues whose companies might need a microsite

Send a personal text or email — not a mass blast:

```
Hey Mike — I'm starting to take on web work for small businesses,
specifically static marketing sites that are fast and easy to
maintain. Saw you posted about [thing] — wanted to ask if you
need a site (no pressure) or if you know anyone who might. Happy
to talk through what makes sense.

— Jane
```

**Two-thirds of indie freelancers' first clients come from their existing network.** This is not glamorous and it works.

### 2. Local in-person communities

- Local small-business meetups, networking events, chamber-of-commerce mixers (look on Eventbrite + Meetup)
- Maker fairs / craft markets — booth owners frequently need sites
- Co-working spaces — get a day pass; talk to the desk neighbors
- Community boards (libraries, coffee shops) — surprisingly effective for hyperlocal work

Walk in, talk to people about what they do, mention what you do. No pitch deck. Just conversations. Card or domain in hand.

### 3. Marketplaces (mixed quality)

- **Upwork / Fiverr** — high volume, low rates, hard for new freelancers. Workable if you can land 2–3 reviews and then move clients off-platform.
- **Contra** — slightly higher-end indie marketplace, no platform fees for talent.
- **Pangea** — newer, designer-focused.

These work better as a place to **practice** quoting and intake than as a primary income source. Don't depend on them.

### 4. Public-facing content (slow-build but compounds)

- A simple blog/case-study page on your portfolio site that posts every month or two — over 12+ months this drives steady inbound traffic.
- Twitter/X / LinkedIn / Bluesky if you actually enjoy the platforms. Showing your work in public over months produces inbound leads. **If you don't enjoy it, skip it** — performative posting decays into bad content fast.
- Speaking at a local event or recording a Loom walkthrough of a build. Niche, but trust-building.

Don't expect inbound for the first 6+ months. Inbound is a compounding asset, not a quick fix.

### 5. Referral mechanics (how the next 7 clients arrive)

Once you have 3 happy clients, the next 5–10 typically come from them.

At handoff (per `07_handoff_and_training.md`):

```
"If you know anyone else who needs a site, I'm taking new
projects starting [date]. I'd really appreciate any intros."
```

Then at the 30-day, 90-day, and 6-month follow-up:

```
"Hope the site is going well. Have you bumped into anyone else
who might need work? I have one slot opening in July."
```

Specifics ("one slot opening in July") create urgency. Generic asks ("let me know if anyone needs help!") get filed and forgotten.

---

## Deferred to Discord

This file is intentionally surface-level on a lot of sales topics. For deeper questions, **ask in Discord** (https://discord.gg/pqRcUDPtG) or post in `r/freelance` / `r/web_design`:

- Cold outreach (DMs, cold emails to small businesses) — works but high effort, very personality-dependent
- LinkedIn lead generation systems
- Funnels, landing-page sequences for your freelance practice
- Niching strategy ("should I only build sites for dentists?")
- Pricing for international clients
- Long-term agency / scaling strategy

Most of what's online about these topics is built for a different scale of business than indie static-site work. Use the community.

---

## Don't do

- ❌ Posting "I'm available for hire!" on social media as your primary acquisition strategy. Useless without specific case studies + a path to contact.
- ❌ Saying yes to every project to "build the portfolio." Bad projects produce bad case studies. Pick three good ones.
- ❌ Spending two months perfecting your portfolio site before showing it to anyone. Ship at 80% done. The portfolio site is also a case study; ongoing imperfection is fine.
- ❌ Underpricing the first three clients to "win the work." Yes, the first one or two can be slightly discounted, but use it as a one-time-only frame ("intro rate, going up next month") rather than a permanent low.
- ❌ Ignoring referrals. Most freelancers leave 50% of potential client volume on the table by not asking.

---

## Update state

Add to `01_STATE/user_knowledge.md`:

```
- Portfolio site: <url>
- Number of completed client projects: <count>
- Source of first client: <network | local | marketplace | inbound | referral>
```

Track the source of each early client — within 5–10 clients, you'll see a pattern, and you can double down on what's working.