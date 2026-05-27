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
- The user **stated a new fact** about themsel