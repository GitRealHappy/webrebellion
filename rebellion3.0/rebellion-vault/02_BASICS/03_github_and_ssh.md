# GitHub and SSH

GitHub is where your code lives online. SSH is how Claude (running on your computer) talks to GitHub without typing your password every time.

You'll set both up once and rarely think about them again.

> 📺 Videos:
> - `VIDEO:github-account` — creating a GitHub account
> - `VIDEO:ssh-setup` — generating an SSH key and adding it to GitHub

---

## Step 1: GitHub account

If you don't have one: go to **github.com**, sign up. Free tier is fine for everything in this course.

Use a real email — GitHub Pages may use it, and you'll get notifications about your repos.

> 📺 Walkthrough: `VIDEO:github-account`

---

## Step 2: SSH key

SSH = Secure Shell. An SSH key is a pair of files on your computer that GitHub recognizes as "you" — so you don't have to type a password for every push.

### Check if you already have one

In the chat, type:

```
! ls -la ~/.ssh/
```

If you see files like `id_ed25519` or `id_rsa`, you already have a key. Skip to "Add to GitHub" below.

### Generate one

```
! ssh-keygen -t ed25519 -C "your-github-email@example.com"
```

When prompted:
- **File location**: press Enter (use the default)
- **Passphrase**: optional. Hit Enter twice for none, or set one if you want extra security.

You now have two files:
- `~/.ssh/id_ed25519` — private key (never share)
- `~/.ssh/id_ed25519.pub` — public key (this is the one you give GitHub)

### Copy the public key

```
! cat ~/.ssh/id_ed25519.pub | pbcopy
```

`pbcopy` puts it on your clipboard (Mac). On Linux, use `xclip` or just print it with `cat ~/.ssh/id_ed25519.pub` and copy by hand.

### Add it to GitHub

1. Go to **github.com → Settings → SSH and GPG keys → New SSH key**
2. Title: anything (e.g., "MacBook")
3. Key: paste
4. Click **Add SSH key**

### Test the connection

```
! ssh -T git@github.com
```

You should see something like:
```
Hi yourusername! You've successfully authenticated...
```

If you get "Permission denied (publickey)" — the key didn't get added correctly. Re-do the "Add to GitHub" step, or ask Claude to walk you through it.

> 📺 Full walkthrough: `VIDEO:ssh-setup`

---

## Step 3: Tell Git who you are

Git wants to know your name and email for commits:

```
! git config --global user.name "Your Name"
! git config --global user.email "your-github-email@example.com"
```

Use the same email as your GitHub account.

---

## Step 4 (optional): SSH agent + keychain

On Mac, your SSH key passphrase (if you set one) can be saved to your keychain so you don't re-enter it. Claude can set this up if you want — just say "set up the SSH agent."

If you didn't set a passphrase, you don't need this.

---

## Common problems

**"Permission denied (publickey)"**
The key isn't recognized. Re-paste it into GitHub. Make sure you copied the *public* key (`.pub` file), not the private one.

**"Could not open a connection to your authentication agent"**
The SSH agent isn't running. Start it:
```
! eval "$(ssh-agent -s)" && ssh-add ~/.ssh/id_ed25519
```

**Two GitHub accounts?**
You'll need separate keys per account. Out of scope for the basic setup — ask Claude or check the Discord.

---

## What you've now done

- ✓ GitHub account created
- ✓ SSH key generated
- ✓ Public key added to GitHub
- ✓ Git knows your name and email

You're ready to push code. Next: `04_local_to_remote.md`.
