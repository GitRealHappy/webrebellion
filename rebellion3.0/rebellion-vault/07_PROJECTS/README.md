# Projects

Your actual websites live here, one folder per project.

---

## Naming

Each project folder uses **kebab-case** (lowercase, hyphens):

- `my-portfolio`
- `oakmoss-site`
- `the-unblocked-carver`

The folder name matches what you put in `01_STATE/active_project.md` to make it active.

---

## Per-project state

Each project folder has a `_PROJECT_STATE.md` with brief, progress, confusion, and next-session notes. Claude creates this when you start the project.

---

## Adding a project

Don't create folders here manually. Tell Claude:

> I want to start a new project.

Claude will walk you through naming, creation, and setup (see `03_BUILD_FLOW/00_start_new_project.md`).

---

## Switching between projects

To work on a different project:

> Switch to my-portfolio.

Claude updates `01_STATE/active_project.md`, loads that project's state, and stays focused on it. **Other project folders are off-limits** until you switch — see `00_GUIDE/04_project_isolation.md` for why.

---

## Listing your projects

Ask Claude:

> What projects do I have?

It'll list folder names — but won't read the contents of inactive ones.
