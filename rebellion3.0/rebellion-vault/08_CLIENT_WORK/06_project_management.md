# Project Management

How to run the engagement after the deposit lands and before handoff. The unglamorous middle of client work — and the place where good freelancers separate themselves from average ones.

The goal: the client never has to wonder what's happening. You're predictable.

---

## When to read this

User says:
- "How do I run the project once it starts?"
- "The client keeps Slacking me at 11pm"
- "How often should I update them?"
- "Tracking what I owe them"

---

## The one-channel rule

Pick one communication channel and use only that for project work. If the client emails you, Slacks you, and texts you the same week, you'll lose track and so will they.

**Recommended channel by client type:**

- **Business client with a team** → shared Slack/Teams channel, or shared email thread
- **Small business / solo client** → email
- **Anyone who keeps texting you** → reply with "Let's keep everything in email so we have a record" and don't break the rule

Out-of-band channels (Whatsapp, SMS, hallway conversations at a coffee shop) lose history. Anything decided there must be moved into the canonical channel as a written summary.

---

## The weekly cadence

Once the project starts, set a predictable rhythm. Two patterns work; pick one.

### Pattern A — Async weekly update (recommended for most)

Every Friday afternoon, send a 5-line update by email or Slack:

```
Week of May 12 — Oakmoss site

Done this week:
- Homepage layout finalized + styled
- Product page template built (2 of 12 products styled in)

Next week:
- Remaining 10 products styled in
- Newsletter signup wired to MailerLite

Blocked / waiting on you:
- Photo of the founder for the About page
- Approval on the "Process" page copy I sent Wed

Heads up:
- I'll be out of office Tues afternoon
```

Five sections, every time:
1. **Done this week** — proof you're working
2. **Next week** — sets expectations
3. **Blocked / waiting on you** — surfaces their delays
4. **Heads up** — anything they need to know

Friday afternoon is best — the client reads it over the weekend, you don't owe them a response till Monday.

### Pattern B — Weekly call (only when needed)

A 30-minute call every Monday or Tuesday. Same content as the async update, but spoken. Better for:

- Clients with multiple stakeholders who need to align
- Visual / design-heavy projects where reviewing a screen-share is faster than written feedback
- Clients who are otherwise hard to pin down on async

Worse for:
- Anything that can be decided async without losing time
- Clients who'll run over their 30 minutes every time

If you go calls, **always follow up with a written summary** of what was decided. Otherwise memory drifts.

---

## Loom for design reviews

When the work is visual — a draft homepage, a layout option, a styled component — record a 3-minute Loom walking through it instead of sending a static screenshot.

Why this works:
- You walk through your decisions ("I went with the cream background because the brand color is dark green and white was too stark") → fewer "why did you do that?" questions.
- The client watches it on their own time → no calendar Tetris.
- They can pause, rewatch, share with their team.

Free tier (loom.com) is plenty for client work. Keep videos under 5 minutes — past that, people skim and miss things.

---

## Async by default

Resist the urge to put everything on a call. As a rule:

| Topic | Default channel |
|---|---|
| Status update | Async (Friday email) |
| Design review | Async (Loom + written response) |
| Scope question | Async (email with a recommendation, ask client to confirm) |
| Decision between two design options | Async (Loom showing both, ask which) |
| Stakeholder alignment ("the partners disagree") | Sync (call) |
| First-week kickoff | Sync (call, 30 min) |
| Final handoff training | Sync (call, 30–60 min) |

The default of "async unless there's a reason for sync" saves both of you hours per project.

---

## Scope-change protocol

This is the one thing that kills profitability if you don't enforce it. Pattern (already in `02_scope_and_proposal.md` but worth restating here):

1. Client asks for something not in the original scope.
2. You acknowledge: "Happy to add it."
3. You quote: "Adds ~$X and ~Y days to the timeline."
4. You require written approval: "Reply 'approved' and I'll add it to the next change order."
5. **Do not start the work until they reply.**

Send a one-paragraph change order at most once a week to summarize accumulated changes:

```
Hi Sara,

Change order #2 for the Oakmoss site:

  • Add gift-message field to the Stripe Payment Link form     +$150
  • Add a "Featured in" press section to the homepage          +$300

Total addition: +$450
Updated total: $5,250
Updated launch date: June 14 (was June 10)

Reply 'approved' to add these to the project.
```

Don't bundle change orders for too long. After two weeks, the client forgets they agreed to them.

---

## When you're behind schedule

It happens. Two principles:

1. **Tell the client as soon as you know,** not the day before the deadline.
2. **Frame it with a new plan, not just an apology.**

Example:

```
Hi Sara,

Heads up: I'm a few days behind on the product pages — Shopify
photo exports were trickier to integrate than I expected.

New plan:
- I'll have the product pages ready by Tuesday (was Friday)
- The launch still hits on June 10 because there's slack in the
  QA week

Sorry for the shift. Let me know if Tuesday-ish doesn't work and
we'll regroup.
```

Bad clients punish you for being honest. Good clients respect it. Either way, the only worse thing than being late is being late and silent.

---

## When the client is behind schedule

Far more common. Pattern:

1. Surface it in the weekly update ("Waiting on About page photo since May 14").
2. After a second week of silence, send a direct question: "Sara, are you still able to provide the About-page photo? If not, I have a placeholder I can use that we can swap later. Let me know."
3. After a third week, lock in the consequence: "I'm going to use a placeholder photo so we don't blow the launch date. You can replace it post-launch through GitHub."

Your contract (`03_contracts.md`) protects you: "Delays in content delivery by Client extend the timeline by the equivalent number of days." Use it.

---

## Track the work somewhere they can see

Three options for visible task tracking, in order of complexity:

1. **A pinned email thread / Notion page with a checklist** — fine for a 4-week project, low overhead.
2. **A shared Trello / Linear / Asana board** — better for projects with 20+ items, multiple stakeholders.
3. **An Airtable or Notion database** — overkill for a single-site project; useful if you're running 5+ clients in parallel.

The point isn't the tool. The point is: the client should be able to look at one place and see what's done, what's in progress, and what's blocked. Reduces "any update?" emails by ~80%.

---

## Office hours, not 24/7

Set expectations on the kickoff call: "I work Monday through Thursday, roughly 9–5 [your timezone]. I check email twice a day. I won't be on Slack on Fridays unless we have something live."

Most clients are fine with this. Some test it ("can you hop on a call Saturday?"). Hold the line politely once and they'll learn.

If a client repeatedly violates working hours after you've set them, that's an escalation: bring it up directly in the next weekly update, in writing.

---

## Common pitfalls

- ❌ Going silent for two weeks because "you have nothing new to report." Send the Friday update anyway — even "Done: nothing new this week, waiting on content" is reassuring.
- ❌ Letting the client communicate across email + Slack + texts. Consolidate.
- ❌ Verbal-only scope changes. Anything that costs money is in writing.
- ❌ Apologizing for being late without a new ETA. Always pair the apology with a plan.
- ❌ Going on a call every time the client wants to "quickly chat." Most of those can be one email.
- ❌ Letting a Friday update slip for 3 weeks. Predictability is more valuable than perfection.

---

## Update state

Add to `_PROJECT_STATE.md`:

```markdown
## Progress
...
- ✓ Week 1: kickoff, scope finalized, contract + deposit
- ✓ Week 2: design phase, homepage approved
- ◯ Week 3: build remaining pages
- ◯ Week 4: QA, training, launch

## Scope changes
| 2026-05-22 | +$450 / +4 days | Gift-message field, press section (CO #2) |
```