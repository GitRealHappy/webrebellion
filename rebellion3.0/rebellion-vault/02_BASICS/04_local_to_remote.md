# Local to Remote: Connecting Your Project to GitHub

Your project lives on your computer (the **local** copy). GitHub stores a synced copy in the cloud (the **remote**). Pushing keeps them in sync.

This file walks through the one-time setup. Claude does almost all of it for you.

> 📺 Videos:
> - `VIDEO:first-repo` — creating the local repo + GitHub remote
> - `VIDEO:first-push` — staging, committing, pushing for the first time

---

## What you'll end up with

A GitHub repo (e.g., `github.com/you/my-portfolio`) that holds your project files, syncs when you push, and is the source for GitHub Pages deployment later.

---

## The flow (Claude runs most of it)

You stay in the chat. Claude runs the commands. You confirm steps when asked.

### 1. Make sure the project folder is a Git repo

If you started the project through `03_BUILD_FLOW/00_start_new_project.md`, this is already done. If not:

```
! cd 07_PROJECTS/my-portfolio && git init
```

### 2. Create the GitHub repo

Two ways:

**Option A — via GitHub CLI** (cleanest, requires `gh` installed):
```
! gh repo create my-portfolio --private --source=. --remote=origin
```

(Use `--public` instead of `--private` if you want it visible. For a static-site portfolio, public is usually fine — GitHub Pages on free tier requires public anyway.)

**Option B — manually on GitHub**:
1. Go to **github.com → New repository**
2. Name: `my-portfolio` (match your folder name)
3. **Don't** initialize with a README, .gitignore, or license — keep it empty
4. Click **Create repository**
5. Copy the SSH URL: `git@github.com:you/my-portfolio.git`
6. Tell Claude the URL; it'll wire up the remote.

### 3. Wire up the remote

If you used Option B:
```
! git remote add origin git@github.com:you/my-portfolio.git
```

Claude will do this for you when you give it the URL.

### 4. Stage, commit, push

```
! git add .
! git commit -m "Initial commit"
! git push -u origin main
```

The `-u origin main` part tells Git to remember the connection. Future pushes are just `git push`.

---

## The everyday loop

After setup, your day-to-day with Claude is:

1. Make changes (Claude does, with your approval)
2. Claude says: "Want me to commit and push?"
3. You say yes
4. Claude runs: `git add .`, `git commit -m "..."`, `git push`
5. Your changes are on GitHub. If GitHub Pages is enabled, your live site updates automatically.

You almost never type Git commands yourself.

---

## .gitignore

Some files shouldn't be tracked — system junk like `.DS_Store`, secrets, etc.

When Claude initializes a project, it'll add a `.gitignore` with sensible defaults:

```
.DS_Store
.env
*.log
node_modules/
```

If you have anything sensitive, tell Claude — it'll add it to `.gitignore` before any commit.

---

## What "main" is

`main` is the default branch name — the canonical version of your project. For static sites in this course, you'll usually only ever work on `main`.

Branches are useful for collaboration and big experiments. Out of scope for now.

---

## When something goes wrong

**"Permission denied (publickey)"**
SSH key isn't connected. See `03_github_and_ssh.md` step 2.

**"Repository not found"**
The remote URL is wrong. Check it with `! git remote -v`. Tell Claude the correct URL.

**"Failed to push some refs"**
GitHub has changes you don't have locally (rare for a fresh repo). Run `! git pull` then `! git push`.

**"Refusing to merge unrelated histories"**
The remote was initialized with a README/license. Either delete and recreate the GitHub repo without those, or run `! git pull origin main --allow-unrelated-histories`. Claude can untangle this.

---

## Watch the videos

Two short walkthroughs make this much clearer:

- `VIDEO:first-repo` — creating the local repo + GitHub remote
- `VIDEO:first-push` — first commit and push

Links in `06_VIDEOS.md`.
