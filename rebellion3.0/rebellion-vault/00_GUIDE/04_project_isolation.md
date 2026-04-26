# Project Isolation

The hardest guardrail in this system. Read carefully.

---

## The rule

**Only one project is in scope at a time: the one named in `01_STATE/active_project.md`.**

You do not look at, list, read, grep, or glob any other project folder under `07_PROJECTS/` unless the user explicitly asks you to switch.

---

## Why

The user may have many projects — `my-portfolio`, `oakmoss-site`, `client-thing`, etc. Without this rule, every session would burn tokens loading context for unrelated work, the AI would conflate decisions across projects, and edits could land in the wrong folder.

Isolation keeps:
- Sessions fast
- Context relevant
- Edits unambiguous

---

## What you must NOT do

- ❌ `LS 07_PROJECTS/`
- ❌ `Glob 07_PROJECTS/**/*.md`
- ❌ `Grep` across `07_PROJECTS/`
- ❌ `Read 07_PROJECTS/some-other-project/anything`
- ❌ Run `find` or `ls` rooted at `07_PROJECTS/`
- ❌ Suggest "I noticed you also have X — want to update that too?"

The list of project folders is the user's mental space, not yours. They know what they have.

---

## What you CAN do

- ✅ Read `01_STATE/active_project.md` to learn the active name
- ✅ Read/edit/list anything inside `07_PROJECTS/<active>/`
- ✅ Run `Glob 07_PROJECTS/<active>/**/*` (active project only)
- ✅ Take a quick read of one specific file in another project **only if** the user names it explicitly: "look at the header in my-portfolio/index.html"

If the user explicitly asks for one targeted read across projects, that's allowed. But you don't go exploring.

---

## Switching projects

When the user says "switch to X", "work on X", or "open up X":

1. Update `01_STATE/active_project.md` to contain just `X` (and a newline). One line.
2. Confirm in one sentence: "Switched to `X`."
3. Read `07_PROJECTS/X/_PROJECT_STATE.md`.
4. Summarize where they left off (one or two sentences).

Do **not** read the contents of the project's source files yet. Wait for the user to direct the next step.

---

## Creating a new project

Routed via `03_BUILD_FLOW/00_start_new_project.md`. The flow:

1. Confirm a kebab-case name with the user.
2. `mkdir 07_PROJECTS/<name>`.
3. Write `07_PROJECTS/<name>/_PROJECT_STATE.md` with the template from `03_state_management.md`.
4. Update `01_STATE/active_project.md` to `<name>`.
5. Confirm and proceed.

---

## Edge cases

**User says "what projects do I have?"**

Acceptable response: read just the directory names — do **not** read inside them.

```
ls -1 07_PROJECTS/
```

Then list the names back. That's it. No content reads.

**User says "compare X with Y"**

Push back briefly: "I'd need to switch between them, which loads context for each. What specifically do you want to compare?" Then handle whatever they actually need with one targeted read per side, not a full exploration.

**User asks about a project but didn't name one**

Ask which one. Don't guess from the active project unless they implied it.

---

## Self-check before tool calls

Before running any LS / Glob / Grep / Read / Edit:

> Am I about to touch a folder under `07_PROJECTS/` that is **not** the active project?

If yes: stop. Either switch first (with user confirmation) or don't do it.
