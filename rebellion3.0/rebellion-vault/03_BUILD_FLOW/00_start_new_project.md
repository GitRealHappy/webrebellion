# Starting a New Project

This is the first real action almost every user takes. Get the foundations right and everything downstream is easier.

---

## When to read this

When the user says any of:
- "I want to build a new site"
- "Let's start a project"
- "I have an idea for a website"

---

## Naming convention

**Folders use kebab-case.** Lowercase, words joined with hyphens. No spaces, no underscores, no capitals.

| Project name | Folder |
|---|---|
| The Unblocked Carver | `the-unblocked-carver` |
| My Portfolio | `my-portfolio` |
| Oakmoss | `oakmoss-site` |

Why kebab-case:
- Plays nicely with URLs (it's likely also the GitHub repo name)
- Plays nicely with file paths
- Easy to say out loud: "switch to oakmoss-site"

---

## Inquiry (the few questions)

Before creating anything, ask **at most 3** questions:

1. What are you building? (one sentence)
2. What should the folder be called? (suggest a kebab-case name based on the project name)
3. Have you set up GitHub + SSH yet? (yes/no — drives whether you skip ahead or hand them `02_BASICS/03_github_and_ssh.md`)

If they already gave the project name and purpose in conversation, skip those questions.

---

## Creation steps

Once name confirmed, run:

```bash
! mkdir 07_PROJECTS/<name>
! cd 07_PROJECTS/<name> && git init
! touch index.html
```

Then create the project state file (template from `00_GUIDE/03_state_management.md`):

```markdown
# <name> — Project State

## Brief
- **What**: <one-line description>
- **Why**: <purpose / audience>
- **Type**: <personal site, landing page, portfolio, etc.>

## Progress
- ✓ Project folder created
- ◯ HTML structure
- ◯ Styled
- ◯ Deployed to GitHub Pages
- ◯ Custom domain (optional)

## Confusion

## Scope changes
| Date | Change | Reason |
|---|---|---|

## Next session
Scaffold the HTML structure.
```

Then update the active project pointer:

```
! echo "<name>" > 01_STATE/active_project.md
```

---

## .gitignore

Drop a starter `.gitignore` into the project root:

```
.DS_Store
.env
*.log
node_modules/
```

---

## Confirm and route

Tell the user, briefly:

> Created `07_PROJECTS/<name>/`. You're now active on it. Next up: figure out what the site needs to look like and what content goes on it. Want to dive into design, or do you have content ready to go?

Then route to `01_discovery.md` for the design/content step.

---

## If they don't know what they want yet

If their answer to "what are you building?" is vague ("just something for me" or "I don't know yet"), don't push forward. Route to `01_discovery.md` first — that file is built for exactly this.

You can still create the folder once they have a name in mind, or wait until discovery surfaces one.

---

## If they already have a project elsewhere

Some users may want to bring an existing project in. Confirm, then:

```
! mv ~/path/to/existing-project 07_PROJECTS/<name>
```

(Or `cp -r` if they want to keep the original.)

Update `_PROJECT_STATE.md` to reflect what's already done. Update `active_project.md`.

---

## Don't do

- ❌ Create the folder before getting the name confirmed
- ❌ Pick HTML frameworks or build tools — plain HTML/CSS only
- ❌ Auto-generate a fancy template "just to start them off" — wait until you know what they're building
- ❌ Forget to update `01_STATE/active_project.md`
