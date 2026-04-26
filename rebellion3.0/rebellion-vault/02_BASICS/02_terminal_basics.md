# Terminal Basics

You'll spend most of your time talking to Claude, but knowing a few terminal commands keeps you from being stuck when Claude isn't running or when something needs a quick check.

> 📺 Video: `VIDEO:terminal-nav` — see `06_VIDEOS.md` for the link.

---

## What's the terminal?

A text-based way to talk to your computer. You type a command, hit Enter, your computer does the thing.

On Mac, the default shell is **zsh**. On Linux it's usually **bash**. They're nearly identical for everyday use.

Open Terminal (Mac):
- `Cmd + Space`, type "Terminal", Enter
- Or: Applications → Utilities → Terminal

---

## The prompt

When the terminal is ready for input, you'll see something like:

```
yourname@computer ~ %
```

Don't type the prompt. Just type your command after it.

---

## Three commands that cover 90% of what you'll do

### `pwd` — where am I?

```
pwd
```

Prints your current folder. Useful when you're lost.

### `ls` — what's in this folder?

```
ls
ls -la
```

Lists files and folders. `-la` shows hidden files and details.

### `cd` — change folder

```
cd path/to/folder
cd ..              # up one level
cd ~               # home
cd -               # back to where you were
```

---

## Tab completion

Start typing a folder or file name, hit `Tab`. The terminal completes it for you.

```
cd Doc[Tab]
# → cd Documents/
```

Use this constantly. It saves typing and prevents typos.

---

## Up arrow

Press the up arrow to recall your previous commands. Most of what you do in the terminal is repeating things.

---

## Letting Claude do most of it

In this system, you usually don't run terminal commands yourself — Claude does. But two situations where you will:

1. **Starting Claude itself** (`cd path && claude`)
2. **One-off commands** while Claude is running, using the `!` prefix in the chat:
   ```
   ! ls
   ! open index.html
   ```
   The output appears in the chat for you and Claude to see.

---

## The "open" command (Mac)

Opens a file or folder in its default app:

```
open index.html       # opens in your default browser
open .                # opens current folder in Finder
open -a "Visual Studio Code" .   # opens current folder in VS Code
```

`open .` (with the dot) is one of the most useful commands you'll learn.

---

## Don't run these without understanding

| Command | What it does | Why be careful |
|---|---|---|
| `rm file` | Deletes a file | No trash. It's gone. |
| `rm -rf folder` | Deletes a folder and everything in it | No trash. Recursive. |
| `sudo anything` | Runs as administrator | Can break your system. |

If Claude proposes any of these, read the proposal before approving.

---

## Cancel a stuck command

`Ctrl + C` cancels whatever's running in the terminal.

---

## That's enough

You don't need to be a terminal wizard. Tab completion, up arrow, `cd`, `ls`, `pwd`, and `open` cover almost everything.

Watch the video for a 3-minute visual tour: `VIDEO:terminal-nav`.
