---
title: "Setting up Git"
module: 3
module_title: "Git & Version Control"
order: 12
estimated_time: "30 min"
layout: lesson
---

<div class="lesson-block" markdown="1">
### Your Digital ID: Git & GitHub Configuration

- **Git:** The local version control system. It tracks changes on your machine.
- **GitHub:** The remote hosting service. Stores your Git repositories online for backup and collaboration.

They sound similar, but they're distinct. We use GitHub because it's the standard.
</div>

<div class="lesson-block" markdown="1">
### Step 1: Install Git

Ensure you have a recent version.

#### Linux (Ubuntu)

1. **Update System:**
```bash
sudo apt update
sudo apt upgrade
```

2. **Install Git:**
```bash
sudo apt install git
```

3. **Verify Version:** Check if it's 2.28 or higher:
```bash
git --version
```
*(If too old, add the PPA: `sudo add-apt-repository ppa:git-core/ppa`, then `sudo apt update && sudo apt install git`)*

#### macOS

1. **Install Homebrew:** If you don't have it, open Terminal and run:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
*(Follow any on-screen prompts, especially for adding Homebrew to your PATH on Apple Silicon).*

2. **Install Git:**
```bash
brew install git
```

3. **Verify Version:** Open a **new** terminal window and run:
```bash
git --version
```
*(Ensure it's 2.28+)*

*(Troubleshooting: Run `brew doctor` and follow its instructions if you hit errors.)*
</div>

<div class="lesson-block" markdown="1">
### Step 2: Configure Your Identity

Git needs to know who you are for your commits.

1. **GitHub Account:** Create one at [GitHub.com](https://github.com/).
   - **Privacy:** In GitHub settings > Emails, enable **"Keep my email addresses private"** and **"Block command line email from appearing on public contributions"**. Use the provided private email address for Git configuration.

2. **Configure Git:** Open your terminal and run these commands, replacing placeholders with **your actual name and private GitHub email**:
```bash
git config --global user.name "Your Name"
git config --global user.email "your_private_github_email@users.noreply.github.com"
```

3. **Set Default Branch:** Ensure new local repositories default to `main`:
```bash
git config --global init.defaultBranch main
```

4. **Configure Pull Behavior:**
```bash
git config --global pull.rebase false
```

5. **Verify Configuration:**
```bash
git config --get user.name
git config --get user.email
```
*(Output should match your name and private email)*

#### macOS Specific: Ignore `.DS_Store` files

Prevent these system files from cluttering your Git history:
```bash
echo .DS_Store >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```
</div>

<div class="lesson-block" markdown="1">
### Step 3: SSH Key for Secure Access

This lets you interact with GitHub without passwords.

1. **Check for Existing Key:**
```bash
ls ~/.ssh/id_ed25519.pub
```
*(If you see a file path, you likely have a key. If you get "No such file...", proceed to create one.)*

2. **Create New SSH Key:**
```bash
ssh-keygen -t ed25519
```
   - Press Enter to accept the default save location.
   - Enter a strong passphrase (recommended for security) or press Enter for no passphrase.

3. **Copy Public Key:**
```bash
cat ~/.ssh/id_ed25519.pub
```
   - Copy the *entire* output (starts with `ssh-ed25519...`).

4. **Add Key to GitHub:**
   - Go to GitHub > Settings > SSH and GPG keys.
   - Click "New SSH Key".
   - Paste your copied key into the "Key" field.
   - Give it a descriptive title (e.g., "My Laptop").
   - Click "Add SSH Key".

5. **Test Connection:**
```bash
ssh -T git@github.com
```
   - If prompted about authenticity, type `yes`.
   - You should see: `Hi YourUsername! You've successfully authenticated, but GitHub does not provide shell access.`
</div>

<div class="lesson-block" markdown="1">
### Conclusion

**You've set up your Git environment. This is a critical step. Well done, Rebel.**
</div>
