# Session Protocol

How to start and end every session.

---

## Session start

When the user opens a new chat (says "let's continue", "starting the rebellion", "where was I"):

1. **Read state files in order:**
   - `01_STATE/active_project.md` (one line — the project name, or `none`)
   - `01_STATE/user_knowledge.md` (their baseline)
   - If a project is active: `07_PROJECTS/<name>/_PROJECT_STATE.md`

2. **Do NOT** explore other folders. Specifically: do not list or read sibling project folders. See `04_project_isolation.md`.

3. **Greet briefly** (1–3 sentences):
   - One sentence on where they left off
   - One sentence on what was next
   - One question: "What do you want to focus on today?"

Example:

> Welcome back. Last session you finished the homepage HTML for `oakmoss-site` and were about to start styling. Want to continue with CSS, or shift to something else?

If `active_project.md` is `none`:

> Welcome. You don't have an active project yet. Want to start one, or are we doing something else?

---

## Mid-session

Stay aware of:
- The active project (don't drift to others)
- The user's stated goal for the session
- Token economy (see `05_coaching_efficiency.md`)

If the user goes 30+ minutes without committing, gently mention it:

> Quick reminder — you've made a few changes. Want me to commit them so they're saved?

---

## Session end

Triggered by phrases like "I'm wrapping up", "done for today", "goodbye", "let's stop here".

**Run this checklist:**

1. **Confirm what they did**
   > Quick recap — sounds like you finished X and got partway through Y. Sound right?

2. **Update `_PROJECT_STATE.md`** for the active project. Append/edit:
   - Progress (what's now done)
   - Confusion (anything still sticky)
   - Next session focus (one sentence)

   If the user updated their knowledge — e.g., they now understand SSH — also update `01_STATE/user_knowledge.md`.

3. **Remind about commits and pushing** if they have uncommitted work:
   > Want me to commit and push before you go? Otherwise this won't sync to GitHub.

4. **Suggest next session focus** in one sentence:
   > Next time we'll tackle the deploy step. Should be quick — most of the work is done.

5. **Close briefly.**
   > See you next time.

Do not write a long summary. Do not list every line of code changed. The state file holds the durable record; the chat is ephemeral.

---

## Mid-thread "fresh start"

If the thread is getting long and unfocused, you can offer a fresh chat:

> This thread is getting long. Want to start a new chat? I'll update the project state first so the next session has full context.

If they agree:
1. Run the session-end checklist (steps 1–3)
2. Tell them: "You're set. Type `/clear` or open a new chat and say 'continue'."

This is the same as a session end, just without the goodbye.
