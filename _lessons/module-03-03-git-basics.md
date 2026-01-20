---
title: "Git Basics"
module: 3
module_title: "Git & Version Control"
order: 13
estimated_time: "45 min"
layout: lesson
---

<div class="lesson-block" markdown="1">
### Workflow Essentials: Commit, Stage, Push

This is your core Git toolkit – the commands you'll use 80% of the time. Master these, and you've got Git licked.
</div>

<div class="lesson-block" markdown="1">
### Your First Repository

1. **Create a GitHub Repo:**
   - Go to GitHub. Create a new repository named `git-test`.
   - **Crucially:** Enable "Add a README file".
   - Click "Create repository".

2. **Get the SSH URL:** On your new repo page, click the green "Code" button. Select **SSH**, then copy the URL (it looks like `git@github.com:YourUsername/git-test.git`).

3. **Local Setup:**
   - Open your terminal.
   - Create a directory for all your projects: `mkdir repos`
   - Navigate into it: `cd repos`

4. **Clone:** Bring the repository to your machine:
```bash
git clone git@github.com:YourUsername/git-test.git
```
*(Replace `YourUsername` with your actual GitHub username)*

5. **Verify:** Navigate into the cloned directory (`cd git-test`) and run `git remote -v`. You should see your GitHub repository listed.
</div>

<div class="lesson-block" markdown="1">
### The Git Workflow: Snapshots of Your Code

This is the cycle: **Stage -> Commit -> Push**.

1. **Create a File:** Inside your `git-test` directory, create a file:
```bash
touch hello_world.txt
```

2. **Check Status:** See what Git knows about your files:
```bash
git status
```
*(You'll see `hello_world.txt` listed in red as "Untracked")*

3. **Stage Changes:** Add the file to Git's "waiting room" for the next commit:
```bash
git add hello_world.txt
```

4. **Check Status Again:**
```bash
git status
```
*(`hello_world.txt` should now be green, listed under "Changes to be committed")*

5. **Commit:** Take a snapshot. The `-m` flag adds a message describing the change:
```bash
git commit -m "Add hello_world.txt"
```
*(This saves the snapshot locally.)*

6. **Check Log:** View your commit history:
```bash
git log
```
*(You'll see your commit listed.)*
</div>

<div class="lesson-block" markdown="1">
### Modify and Re-Commit

1. **Edit:** Open `README.md` in Cursor (`cursor .` in the terminal, then open `README.md`). Add "Hello Rebellion!" and save.

2. **Check Status:**
```bash
git status
```
*(`README.md` will be red, under "Changes not staged for commit")*

3. **Stage:**
```bash
git add README.md
```

4. **Stage All:** (A common shortcut)
```bash
git add .
```
*(Adds all modified/new files in the current directory and subdirectories)*

5. **Check Status:** Everything should be green.

6. **Commit:**
```bash
git commit -m "Edit README.md and hello_world.txt"
```
</div>

<div class="lesson-block" markdown="1">
### Ship It: Push to GitHub

1. **Upload:** Send your local commits to GitHub:
```bash
git push origin main
```
*(Assuming your default branch is `main`. If you get errors about authentication, double-check your SSH key setup.)*

2. **Final Check:** Run `git status`. It should say you're up-to-date. Refresh your GitHub repo page – you'll see your changes.

**Rule:** **Never edit directly on GitHub.** Always work locally, commit, and then push.
</div>

<div class="lesson-block" markdown="1">
### Essential Commands Cheat Sheet

- **Clone:** `git clone [ssh_url]`
- **Status:** `git status`
- **Add:** `git add .` (stage all) or `git add [file]`
- **Commit:** `git commit -m "Your descriptive message"`
- **Push:** `git push origin main`
- **Log:** `git log`
- **Remote:** `git remote -v`
</div>
