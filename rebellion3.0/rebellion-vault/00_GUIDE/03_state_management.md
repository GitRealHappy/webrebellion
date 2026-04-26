# State Management

Rules for reading and writing state files. The filesystem is the single source of truth — chats reset, files persist.

---

## Files

### Global state (apply across projects)

| File | Purpose |
|---|---|
| `01_STATE/active_project.md` | One line: name of currently active project, or `none` |
| `01_STATE/user_knowledge.md` | What the user knows, baselines, prior experience |

### Per-project state

Each project has **one** state file:

```
07_PROJECTS/<project-name>/_PROJECT_STATE.md
```

It holds: brief, current progress, sticking points, milestones, scope changes, next-session focus.

One file per project, not five. Easier for the user to read.

---

## Reading rules

**Before giving directional guidance, read the relevant state file(s).**

- Session start → read both global files + active project state
- "Switch to X" → update `active_project.md`, then read `07_PROJECTS/X/_PROJECT_STATE.md`
- New project → no read needed; you'll create the file
- Quick task in active project → state already loaded, don't re-read

**Do not** read state files for inactive projects (project isolation, see `04_project_isolation.md`).

---

## Writing rules

You may write to a state file when one of these is true:

- The user **explicitly confirmed** something ("yes mark that done", "that's right")
- The user **completed a clear milestone** (project created, deployed, domain connected)
- The user **stated a new fact** about themselves or the project ("I have a Stripe account now")

You may **not** write when:
- You're guessing
- You inferred progress from a conversation
- You want to encourage them ("good work today!" is not memory)
- You think they'd probably approve

When in doubt: ask. "Should I mark X as done?"

---

## What to write

Be **factual** and **brief**. State files are not journals.

Good:
> ✓ Homepage HTML scaffolded (2026-04-25)
> ✓ Deployed to GitHub Pages (2026-04-26)
> ◯ Custom domain pending — DNS not yet configured

Bad:
> Today the user made great progress on the homepage and is feeling really good about the project!

State files reflect *learning state* and *project state*. Not feelings, not encouragement.

---

## Per-project state file format

When you create a new project, scaffold its `_PROJECT_STATE.md` with this structure:

```markdown
# <project-name> — Project State

## Brief
- **What**: [one-line description]
- **Why**: [purpose / audience]
- **Type**: [personal site, landing page, portfolio, etc.]

## Progress
- ◯ Project folder created
- ◯ HTML structure
- ◯ Styled
- ◯ Deployed to GitHub Pages
- ◯ Custom domain (optional)

## Confusion
(Sticking points or unclear concepts. Empty is fine.)

## Scope changes
| Date | Change | Reason |
|---|---|---|

## Next session
[One sentence — what to do next.]
```

Use `◯` for not done, `✓` for done.

---

## When state and reality conflict

If the user says something that contradicts the state file:

1. **Surface it.** "The state file says you haven't deployed yet — is that still true?"
2. **Ask.** Don't silently overwrite.
3. **Update only after they confirm.**

Never silently reconcile.

---

## What NOT to store

- Emotional state ("frustrated today")
- Speculative future plans ("might add a blog someday")
- One-off frustrations
- Long narrative recaps of the session
- Code snippets (they're already in the project files)

State files should stay short enough to skim in 30 seconds.

---

## Final principle

After a chat resets, the user — or a fresh Claude session — should be able to read the state files and immediately know:
- What they're building
- Where they are
- What they know
- What's next

If that's true, state is working.
