# Git Quick Reference

A quick lookup for common Git commands.

---

## Setup

```bash
# Configure identity
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Set default branch
git config --global init.defaultBranch main

# Check configuration
git config --list
```

---

## Starting a Project

```bash
# Initialize new repo
git init

# Clone existing repo
git clone git@github.com:username/repo.git

# Clone into specific folder
git clone git@github.com:username/repo.git folder-name
```

---

## Daily Workflow

```bash
# Check status (do this constantly)
git status

# Stage changes
git add filename           # Single file
git add .                  # All changes
git add -A                 # All changes including deletions

# Commit
git commit -m "Your message"

# Push to remote
git push origin main
git push                   # After first push with -u

# Pull from remote
git pull
```

---

## Viewing History

```bash
# View commits
git log
git log --oneline          # Compact view
git log --oneline -10      # Last 10 commits

# View specific commit
git show abc1234

# View changes
git diff                   # Unstaged changes
git diff --staged          # Staged changes
```

---

## Undoing Things

```bash
# Unstage a file (keep changes)
git restore --staged filename

# Discard changes to a file (DESTRUCTIVE)
git restore filename

# Undo last commit (keep changes staged)
git reset --soft HEAD~1

# Undo last commit (keep changes unstaged)
git reset HEAD~1

# Undo last commit (DESTRUCTIVE - lose changes)
git reset --hard HEAD~1
```

---

## Branches

```bash
# List branches
git branch

# Create branch
git branch branch-name

# Switch branch
git checkout branch-name

# Create and switch
git checkout -b branch-name

# Merge branch into current
git merge branch-name

# Delete branch
git branch -d branch-name
```

---

## Remote Repositories

```bash
# View remotes
git remote -v

# Add remote
git remote add origin git@github.com:username/repo.git

# Change remote URL
git remote set-url origin git@github.com:username/new-repo.git

# Push and set upstream
git push -u origin main
```

---

## .gitignore

Create a `.gitignore` file:

```
# OS files
.DS_Store
Thumbs.db

# Dependencies
node_modules/

# Environment
.env
.env.local

# Build output
dist/
build/

# Logs
*.log

# Editor
.vscode/
.idea/
```

---

## Common Scenarios

### Start new project, push to GitHub

```bash
mkdir my-project
cd my-project
git init
touch README.md
git add .
git commit -m "Initial commit"
# Create repo on GitHub, then:
git remote add origin git@github.com:username/my-project.git
git push -u origin main
```

### Save work in progress

```bash
git add .
git commit -m "WIP: description of current state"
git push
```

### See what changed in a file

```bash
git diff filename
git log -p filename        # History of changes
```

### Undo changes to one file

```bash
git restore filename
```

### Fix last commit message

```bash
git commit --amend -m "New message"
```

### Add forgotten file to last commit

```bash
git add forgotten-file
git commit --amend --no-edit
```

---

## SSH Setup

```bash
# Check for existing key
ls ~/.ssh/id_ed25519.pub

# Generate new key
ssh-keygen -t ed25519

# Copy public key
cat ~/.ssh/id_ed25519.pub
# Add to GitHub: Settings > SSH Keys

# Test connection
ssh -T git@github.com
```

---

## Troubleshooting

### "Permission denied (publickey)"
SSH key not set up. Run through SSH setup again.

### "Failed to push some refs"
Remote has changes you don't have locally.
```bash
git pull
git push
```

### "Merge conflict"
Two changes conflict. Edit the file to resolve, then:
```bash
git add filename
git commit -m "Resolve merge conflict"
```

### Accidentally committed secrets
1. Change the password/key immediately
2. Remove from future commits
3. The secret is still in history (consider it compromised)

---

## Quick Reference

| Command | What it does |
|---------|--------------|
| `git init` | Initialize repo |
| `git clone url` | Copy repo |
| `git status` | Check state |
| `git add .` | Stage all |
| `git commit -m "msg"` | Save snapshot |
| `git push` | Upload to remote |
| `git pull` | Download from remote |
| `git log` | View history |
| `git diff` | View changes |
| `git branch` | List branches |
| `git checkout -b name` | Create & switch branch |
| `git merge name` | Merge branch |
