# Git Basics: Version Control

Git is a version control system. It tracks changes to your files over time, lets you undo mistakes, and makes collaboration possible.

Think of it as a **time machine for your project**.

---

## Why Git Matters

Without Git:
- You make a change that breaks everything
- You can't remember what you changed
- You're stuck

With Git:
- Every change is recorded
- You can go back to any previous state
- You can experiment without fear

Git is non-negotiable for professional development. Learn it now.

---

## Git vs GitHub

**Git** — The tool that runs on your computer. Tracks changes locally.

**GitHub** — A website that hosts Git repositories online. For backup, sharing, and collaboration.

You use Git commands. GitHub stores your repositories in the cloud.

---

## Core Concepts

### Repository (Repo)

A project folder that Git is tracking. Contains your files plus a hidden `.git` folder with all the history.

### Commit

A snapshot of your project at a point in time. Like a save point in a video game.

### Staging Area

A holding area for changes you want to include in your next commit. You choose what goes in each commit.

### Remote

A copy of your repository on another computer (like GitHub). You **push** changes up and **pull** changes down.

---

## Setting Up Git

### Install Git

**Mac (with Homebrew):**
```bash
brew install git
```

**Linux:**
```bash
sudo apt update
sudo apt install git
```

**Verify:**
```bash
git --version
```

### Configure Your Identity

Git needs to know who you are:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Use the email associated with your GitHub account.

### Set Default Branch Name

```bash
git config --global init.defaultBranch main
```

---

## Setting Up GitHub

### Create an Account

Go to [github.com](https://github.com) and sign up.

### Set Up SSH (Recommended)

SSH lets you connect to GitHub without typing your password every time.

**Check for existing key:**
```bash
ls ~/.ssh/id_ed25519.pub
```

**If no key exists, create one:**
```bash
ssh-keygen -t ed25519
```

Press Enter to accept defaults. Add a passphrase if you want extra security.

**Copy your public key:**
```bash
cat ~/.ssh/id_ed25519.pub
```

Copy the entire output.

**Add to GitHub:**
1. Go to GitHub → Settings → SSH and GPG keys
2. Click "New SSH key"
3. Paste your key
4. Save

**Test the connection:**
```bash
ssh -T git@github.com
```

You should see: "Hi username! You've successfully authenticated..."

---

## The Basic Workflow

This is what you'll do hundreds of times:

```
1. Make changes to files
2. Stage the changes (git add)
3. Commit the changes (git commit)
4. Push to GitHub (git push)
```

---

## Starting a New Project

### Option A: Start Locally, Push to GitHub

```bash
# Create and enter project folder
mkdir my-project
cd my-project

# Initialize Git
git init

# Create some files
touch index.html styles.css

# Stage all files
git add .

# Commit
git commit -m "Initial commit"
```

Then create a repo on GitHub (don't initialize with README), and:

```bash
git remote add origin git@github.com:username/my-project.git
git push -u origin main
```

### Option B: Clone from GitHub (Easier)

Create the repo on GitHub first (with README), then:

```bash
git clone git@github.com:username/my-project.git
cd my-project
```

Now you have a local copy connected to GitHub.

---

## Essential Commands

### Check Status

```bash
git status
```

Shows:
- What branch you're on
- What files have changed
- What's staged for commit

**Run this constantly.** It tells you what's going on.

### Stage Changes

```bash
git add filename.html      # Stage one file
git add .                  # Stage all changes
git add -A                 # Stage all changes (including deletions)
```

Staging means "I want to include this in my next commit."

### Commit

```bash
git commit -m "Add navigation menu"
```

The `-m` flag adds a message. **Always write meaningful messages.**

Good messages:
- "Add responsive navigation"
- "Fix broken image link on about page"
- "Update footer contact information"

Bad messages:
- "stuff"
- "fixed it"
- "asdfasdf"

### Push to GitHub

```bash
git push origin main
```

Sends your commits to GitHub. After the first push with `-u`, you can just use:

```bash
git push
```

### Pull from GitHub

```bash
git pull
```

Gets changes from GitHub. Do this before starting work if you (or collaborators) might have made changes elsewhere.

### View History

```bash
git log
```

Shows all commits. Press `q` to exit.

```bash
git log --oneline
```

Compact view, one line per commit.

---

## The Typical Session

```bash
# Start of session: get latest changes
git pull

# Do your work...
# Edit files, create new ones, etc.

# Check what changed
git status

# Stage changes
git add .

# Commit with a message
git commit -m "Add hero section to homepage"

# Push to GitHub
git push
```

Repeat the stage → commit → push cycle as you work.

---

## Undoing Things

### Unstage a File

```bash
git restore --staged filename.html
```

Removes from staging area, keeps your changes.

### Discard Changes to a File

```bash
git restore filename.html
```

**Warning:** This throws away your changes. The file reverts to the last commit.

### Undo the Last Commit (Keep Changes)

```bash
git reset --soft HEAD~1
```

Removes the commit but keeps your changes staged.

### View a Previous Version

```bash
git log --oneline           # Find the commit hash
git show abc1234            # View that commit
```

---

## .gitignore

Some files shouldn't be tracked:
- System files (`.DS_Store`)
- Dependencies (`node_modules/`)
- Secrets (`.env`, API keys)

Create a `.gitignore` file:

```
.DS_Store
node_modules/
.env
*.log
```

Git will ignore these files.

---

## Branches (Brief Intro)

Branches let you work on features without affecting the main code.

```bash
git branch feature-nav      # Create branch
git checkout feature-nav    # Switch to it
# Or combined:
git checkout -b feature-nav

# Do work, commit...

git checkout main           # Switch back to main
git merge feature-nav       # Merge your changes
```

For now, working on `main` is fine. Branches become important for collaboration and larger projects.

---

## Common Issues

### "Permission denied (publickey)"

Your SSH key isn't set up correctly. Re-do the SSH setup section.

### "Failed to push some refs"

Someone else pushed changes (or you did from another computer). Pull first:

```bash
git pull
git push
```

### "Merge conflict"

Two changes conflict. Git will mark the file. You need to manually edit it, then:

```bash
git add filename
git commit -m "Resolve merge conflict"
```

### Accidentally Committed Secrets

If you commit a password or API key:
1. Change the password/key immediately
2. The secret is in Git history forever (even if you delete the file)
3. For serious cases, look into `git filter-branch` or BFG Repo-Cleaner

**Prevention:** Use `.gitignore` and never commit `.env` files.

---

## Summary

| Command | What it does |
|---------|--------------|
| `git init` | Initialize a new repo |
| `git clone url` | Copy a repo from GitHub |
| `git status` | Check current state |
| `git add .` | Stage all changes |
| `git commit -m "msg"` | Save a snapshot |
| `git push` | Upload to GitHub |
| `git pull` | Download from GitHub |
| `git log` | View history |

---

## Practice

1. Create a new repository on GitHub (with README)
2. Clone it to your computer
3. Create an `index.html` file
4. Stage and commit: `git add . && git commit -m "Add index.html"`
5. Push to GitHub: `git push`
6. Check GitHub — your file should be there
7. Make a change, commit, push again
8. View your commit history with `git log`

Once you can do this cycle comfortably, you're ready to deploy.
