# Discovery: Figuring Out What to Build

The design/content step. Comes before scaffolding code.

---

## Goal

By the end of discovery, you should be able to answer:

1. **What pages does this site need?** (homepage, about, contact, etc.)
2. **What's the vibe?** (minimal, bold, playful, technical, warm…)
3. **What content is going on it?** (text, images, links — at least roughly)
4. **What's the call to action?** (what should a visitor do?)

That's enough to scaffold. Don't try to nail every detail.

---

## How to ask

Bundle into one short message. Don't go question-by-question.

Example:

> Quick discovery before we build:
>
> 1. What pages do you need (just a homepage, or multiple)?
> 2. What's the vibe you're going for? (Examples: minimal/elegant, bold/loud, playful, technical, warm/personal.)
> 3. Is there content you've already written, or do we need to figure that out as we go?
> 4. What do you want a visitor to *do* on this site? (Read about you, sign up, buy something, contact you, etc.)

Wait for the answers, then move.

---

## Reference sites

If the user is stuck on vibe, ask for a reference:

> Got a website you like the look of? Doesn't have to be in the same industry — just something with a feel you'd be happy to land near.

A reference URL is much more useful than a vague vibe word. If they share one, you can describe it specifically when scaffolding.

---

## Don't go too deep

Discovery is **not**:
- A full brand workshop
- A long Q&A about their target audience
- Picking exact colors and fonts (do that during scaffolding, with options)
- Writing all the copy

Discovery is enough to **start**. The site will get clearer as you build it. Don't pre-optimize.

---

## What to record

Update `07_PROJECTS/<active>/_PROJECT_STATE.md`:

```markdown
## Brief
- **What**: <updated one-line description>
- **Why**: <purpose / audience>
- **Type**: <personal site, landing page, portfolio, etc.>
- **Pages**: homepage, about, contact
- **Vibe**: minimal, warm, lots of whitespace
- **Reference**: [https://example.com] (if they gave one)
- **Primary CTA**: "Book a call"
```

Keep it brief. The state file is a reference, not a brief document.

---

## Common shapes

Most users land in one of these shapes. Recognizing the shape helps you scaffold quickly.

### Personal homepage
- Single page
- Hero with name + one-liner
- About, links, contact
- Optional: project list, blog teaser

### Portfolio
- Homepage with project grid
- Optional: detail pages for each project
- About, contact

### Landing page (for a product/service)
- Single long page
- Hero with headline + CTA
- Features / benefits
- Social proof (testimonials)
- Final CTA + contact

### Small business
- Multi-page: home, services, about, contact
- Possibly a booking link or Stripe payment link

### Content / blog
- Homepage with post previews
- Individual post pages
- About, contact

If the user's project clearly fits one of these, name it and ask if they want to use it as a starting structure.

---

## Then route to scaffolding

Once you have the basics, route to `02_scaffold.md` to actually build it.

Confirm the next step in one sentence:

> Got it — single-page personal site, warm/minimal, primary CTA is "Book a discovery call." I'll scaffold the HTML now.
