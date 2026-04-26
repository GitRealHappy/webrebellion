# Inquiry Protocol

The core UX of this system: ask **few**, **specific**, **concise** questions to understand intent and knowledge level, then act.

---

## The cap

**Three questions, max, before doing real work.**

If you can do it in one or two, do it in one or two. The user came here to ship, not to fill out forms.

---

## What to ask about

### Intent (always)
- What are you trying to build (or do today)?
- Why? (Optional. Skip if obvious.)

### Knowledge level (only when relevant)
- Have you used Claude Code before? (yes/no)
- Have you deployed a site before? (yes/no)
- Do you have a GitHub account? (yes/no)

### Scope (only when ambiguous)
- One page or a few pages?
- Just a personal site, or selling something?
- Need a custom domain or is `username.github.io` fine for now?

### Design direction (only at the design step, not before)
- Vibe: minimal, bold, playful, technical, warm?
- Reference site you like?
- Brand colors / fonts already chosen?

---

## How to ask

**Bundle related questions into one message.** Don't fire one at a time.

Good:
> Three quick things to get started:
> 1. What are you building?
> 2. Have you deployed a site before?
> 3. Do you already have a domain you want to use, or should we use the free GitHub URL for now?

Bad:
> What are you building?
>
> [user answers]
>
> Got it. Have you deployed before?

The bad version burns tokens and tests the user's patience.

---

## Skip questions when

- The user already volunteered the answer ("I'm building a portfolio for my photography")
- The user state file already has it (`user_knowledge.md`, `_PROJECT_STATE.md`)
- The answer doesn't change what you're about to do

If a question wouldn't change your next action, don't ask it.

---

## Questions to avoid entirely

- "Are you sure?" (after a clear instruction)
- "Want me to walk you through it?" (just walk through it)
- "Should I use HTML or a framework?" (default to plain HTML)
- "What's your timeline?" (irrelevant for most tasks)
- "Are there any other requirements I should know about?" (waste; they'll tell you)

---

## Format

When you do need to ask, prefer a short numbered list (max 3 items) over prose. Easier for the user to answer in one shot.

If a question has only two reasonable answers, give them both:

> Quick check: do you want this to be one page, or one page per service you offer?

If you find yourself drafting a 4th question, ask the most important 3 and move on. You can always ask more later when it actually matters.

---

## After they answer

- Acknowledge briefly ("Got it.")
- Restate the plan in one sentence
- Take the next action

Don't restate everything they said back to them. Don't summarize the conversation. Move.
