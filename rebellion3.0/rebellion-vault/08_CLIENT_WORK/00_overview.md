# Client Work — Overview

How to actually do this as a job: turning the Rebellion's static-site skills into paid engagements without losing money, losing sleep, or accidentally promising a Next.js rebuild.

---

## When to read this

User says any of:
- "I'm doing this for a client"
- "Someone wants to pay me to build a site"
- "I want to freelance"
- "Help me with a paid project"

If a user just **mentions** a friend or contact in passing ("my friend asked about a site"), ask once whether they want to switch into client-work mode before routing here. Don't assume.

---

## Where I'll send you elsewhere

Some things in this folder look like advice they aren't. Out of scope on purpose:

- **Tax and LLC formation specifics** → accountant + Discord. Different country, different state, different answer.
- **Specific legal contract language** → templates only. For real redlines, hire a lawyer.
- **Next.js / Vercel / React / framework stacks** → still post-rebellion. There may be a separate track later, but this folder assumes static sites.
- **Multi-developer collaboration / agency operations** → out of scope. This track is for one-person shops.

---

## The loop

```
intake → scope → contract → deposit → build → handoff → retainer
   ↑                                                          │
   └────────────────── referral / repeat ←───────────────────┘
```

Seven steps, each with its own file. Do them in order — skipping any one of them is how people lose money.

1. **Intake** (`01_client_intake.md`) — qualify before you scope. Most regret comes from saying yes to the wrong client.
2. **Scope** (`02_scope_and_proposal.md`) — turn the conversation into a written description of what you'll deliver, at what price.
3. **Contract** (`03_contracts.md`) — short, signed, before anything else.
4. **Deposit** (`05_invoicing_and_payment.md`) — money in the account before code in the editor.
5. **Build** (`06_project_management.md`) — the actual work, run on a predictable cadence.
6. **Handoff** (`07_handoff_and_training.md`) — deliver access, train them on what they need to know, send final invoice, get paid.
7. **Retainer** (`08_maintenance_retainers.md`) — optional ongoing monthly relationship for updates and care.

---

## The single biggest principle

**Deposit before build. Final invoice before handoff.**

If you skip either of these, you'll eventually get burned. It happens to every freelancer who doesn't enforce it. Enforce it.

---

## When to enter this track

Reasonable signals:

- "A friend / family member wants me to build a site for their business and is willing to pay"
- "I want to do this on the side / full time"
- "I've built two of my own sites and someone asked how much I'd charge"

Unreasonable signals (route back to features):

- "I'm building my own portfolio" → that's still personal — use `03_BUILD_FLOW/`
- "I'm doing a free favor for my mom" → no money, no contract; just use the regular build flow
- "I want to take payments on my own site" → that's `04_FEATURES/01_stripe_payments.md`

---

## The `## Client` block in project state

When the active project is for a client, the `_PROJECT_STATE.md` template gets an optional `## Client` section (see `00_GUIDE/03_state_management.md` for the canonical version). Use it to track:

- Client name + primary contact
- Contract signed
- Deposit received
- Final invoice paid
- Deadlines

Update it the same conservative way as other state — only when the user confirms a milestone. "Got the deposit today" → tick `Deposit received`. Otherwise, don't guess.

---

## Common pitfalls (across the whole track)

- ❌ Building first, scoping later. "I'll just get started and we'll figure out price as we go." → scope creep + unpaid hours.
- ❌ Verbal-only agreements. Memory diverges between you and the client within a week.
- ❌ Treating the client like your boss. They aren't. They hired you for outcomes; you decide implementation.
- ❌ Saying yes to a stack you don't use ("can you do it in Webflow / Next.js / WordPress?"). Either learn it on your own time first, refer them out, or decline.
- ❌ No deposit. The deposit is the contract's enforcement mechanism. Without it, you have a promise.

---

## Don't escalate to Discord for everything

This folder is dense on purpose. Most client-work questions have an answer in here. Defer to Discord for:

- Legal redlines on a specific contract clause
- Tax/entity formation questions
- "I'm in a weird situation with a client" — judgment-call situations where another freelancer's perspective helps

Otherwise, route within `08_CLIENT_WORK/` first.

---

## Update state

When the user first enters client mode, set `01_STATE/user_knowledge.md`:

```
| Doing paid client work | yes | <date> |
```

Other baselines (`Has a business entity`, `Has a client contract template`, `Has an invoicing tool set up`) get updated as the matching modules walk them through setup.