---
title: "Command Line Basics on Mac (Zsh/Bash)"
module: 1
module_title: "Reprogram Your Mindset"
order: 1
estimated_time: "60 min"
layout: lesson
---

<div class="lesson-block" markdown="1">
<h3>1. Goal of This Module</h3>

By the end of this module, students will be able to:

- Open the Terminal and understand what the prompt is.
- Navigate the filesystem using `pwd`, `ls`, and `cd`.
- Create, rename, move, and delete files and folders.
- Open folders and files from the command line in Finder and in an editor.
- Read file contents quickly via the Terminal.
- Troubleshoot common issues like `command not found` and `No such file or directory`.

No Git. No deep web-dev details. Just enough command-line literacy to build and deploy simple static sites later.
</div>

<div class="lesson-block" markdown="1">
<h3>2. What the Terminal Actually Is</h3>

The Terminal is a text-based way to control your computer.

1. You type a command.
2. The shell (usually Zsh on modern macOS, sometimes Bash) interprets it.
3. The system executes it and prints any output.

**Why this matters for static sites:**

- You’ll often run tools like `npm`, `python`, or `Git`.
- You’ll move between project folders quickly.
- You’ll open editors (Cursor, VS Code, etc.) from specific directories.

Think of it as: “remote control for your folders and tools”.
</div>

<div class="lesson-block" markdown="1">
<h3>3. Getting into the Terminal & Understanding the Prompt</h3>

<h4>3.1 Opening Terminal</h4>

- Press **⌘ + Space** → type **Terminal** → hit **Enter**.
- Or open from **Applications → Utilities → Terminal**.

<h4>3.2 The Prompt</h4>

You’ll see something like:

```bash
JJ@MacBook ~ %
```

Typical pieces:

- `JJ@MacBook` → your username and computer name
- `~` → your current directory (here, `~` = your home folder)
- `%` or `$` → the prompt symbol (where you type commands)

You don’t type the `$` or `%`. That’s just the shell saying: “I’m ready.”
</div>

<div class="lesson-block" markdown="1">
<h3>4. Where Am I? (The Working Directory)</h3>

The command line always has a current location called your **working directory**.

<h4>4.1 Check Your Current Directory</h4>

```bash
pwd
```

Output example:

```text
/Users/jj
```

That means you're inside `/Users/jj` — your home directory.
</div>

<div class="lesson-block" markdown="1">
<h3>5. Listing What’s Around You</h3>

<h4>5.1 List Files and Folders</h4>

```bash
ls
```

This shows the items in the current directory.

<h4>5.2 List with Extra Detail (including hidden files)</h4>

```bash
ls -al
```

You’ll see:
- Permissions
- Sizes
- Dates
- Files starting with a dot (`.gitignore`, `.env`) — usually hidden in Finder.
</div>

<div class="lesson-block" markdown="1">
<h3>6. Moving Around: cd</h3>

`cd` means **change directory**.

<h4>6.1 Go Into a Folder</h4>

```bash
cd foldername
```

Example:

```bash
cd Desktop
```

Now `pwd` might show:

```text
/Users/jj/Desktop
```

<h4>6.2 Go Up One Level</h4>

```bash
cd ..
```

`..` means “the parent folder”.

<h4>6.3 Jump Home</h4>

```bash
cd ~
```

or simply:

```bash
cd
```

<h4>6.4 Directly to Desktop or Documents</h4>

```bash
cd ~/Desktop
cd ~/Documents
```

The `~` means “my home directory,” so `~/Desktop` is `/Users/yourname/Desktop`.

<h4>6.5 The Most Important Trick: Tab Completion</h4>

Type:

```bash
cd Doc
```

Then press **Tab**.

If there’s a folder called `Documents`, it will auto-complete to:

```bash
cd Documents
```

If there are multiple matches, press **Tab twice** to see suggestions.

> **Practice idea:** Navigate from home to Desktop, then up, then into Documents, using Tab completion at each step.
</div>

<div class="lesson-block" markdown="1">
<h3>7. Creating and Managing Folders & Files</h3>

<h4>7.1 Make a New Folder: mkdir</h4>

```bash
mkdir my-site
```

Now `ls` will show `my-site`.

<h4>7.2 Create an Empty File: touch</h4>

```bash
touch index.html
```

Creates an empty file named `index.html` in the current directory.

You can create multiple:

```bash
touch index.html styles.css script.js
```

<h4>7.3 Rename or Move a File: mv</h4>

**Rename:**

```bash
mv oldname.html newname.html
```

**Move into a folder:**

```bash
mv index.html pages/
```

This moves `index.html` into the `pages` directory.

<h4>7.4 Copy a File: cp</h4>

```bash
cp index.html about.html
```

Now you have a duplicate.

<h4>7.5 Delete Files & Folders: rm (Careful)</h4>

**Delete a single file:**

```bash
rm index.html
```

**Delete a folder and everything in it:**

```bash
rm -rf my-site
```

- `-r` = recursive (go through all subfolders)
- `-f` = force (don’t ask for confirmation)

> **Warning:** `rm -rf` is permanent. No trash can. No undo.
</div>

<div class="lesson-block" markdown="1">
<h3>8. Opening Things from the Terminal</h3>

<h4>8.1 Open the Current Folder in Finder</h4>

```bash
open .
```

The `.` means “current directory”.

<h4>8.2 Open a Specific File in Its Default App</h4>

```bash
open index.html
```

This might open in your default browser or editor.

<h4>8.3 Open the Directory in a Code Editor</h4>

**Option A: VS Code with `code`**

From inside your project folder:

```bash
code .
```

This opens the current folder in Visual Studio Code.

If `code` is not working:

You’ll likely see:

```text
zsh: command not found: code
```

That means the shell doesn’t know what `code` is yet.

**Fix:**
1. Open VS Code manually.
2. Press **⌘ + Shift + P** to open the Command Palette.
3. Type: `Shell Command: Install 'code' command in PATH`
4. Select that and run it.
5. Close and reopen Terminal.
6. Try `code .` again.

**Option B: Cursor with `cursor`**

If you have Cursor installed, you can do:

```bash
cursor .
```

If you see:

```text
zsh: command not found: cursor
```

Then the command-line tool isn’t set up yet.

**Fix (high-level):**
1. Open Cursor.
2. Look in the menu for something like: “Install Command Line Tool” or “Install cursor shell command”.
3. Follow the prompts.
4. Close and reopen Terminal.
5. Try `cursor .` again.
</div>

<div class="lesson-block" markdown="1">
<h3>9. Viewing File Contents Quickly</h3>

<h4>9.1 Print File Contents: cat</h4>

```bash
cat filename.txt
```

Good for small files or quick checks.

<h4>9.2 Scroll Through a File: less</h4>

```bash
less filename.txt
```

- Use **Up/Down arrows** or **Space** to scroll.
- Press **Q** to quit.
</div>

<div class="lesson-block" markdown="1">
<h3>10. Quality-of-Life & Common Shortcuts</h3>

- **Arrow Up / Arrow Down**: Scroll through previous commands. Great for re-running something.
- **Tab**: Auto-completes file and folder names.
- **Ctrl + C**: Interrupts a running command (e.g., if something is “stuck”).
- **clear** or **⌘ + K**: Clears the screen. Your command history is still there.
- **Drag & drop**: You can drag a file or folder from Finder into the Terminal window to paste its path.

Example:

```bash
cd [drag folder here]
```
</div>

<div class="lesson-block" markdown="1">
<h3>11. Common Errors & How to Recover</h3>

<h4>11.1 zsh: command not found: something</h4>

This means the shell doesn’t recognize the command.

**Typical cases:**
- `code` not installed in PATH → fix with “Shell Command: Install 'code' command in PATH” from inside VS Code.
- `cursor` not in PATH → install the Cursor CLI from the app menu or docs.
- You mistyped a command name (e.g., `coe .` instead of `code .`).

**Checklist:**
- Is the app installed?
- Did you set up its command-line tool?
- Did you spell it correctly?
- Try closing and reopening Terminal after installation.

<h4>11.2 No such file or directory</h4>

Example:

```bash
cd mysite
# zsh: no such file or directory: mysite
```

This means the folder or file doesn’t exist in the current directory, or the name is wrong.

**Fix:**
- Run `ls` to see what does exist.
- Check spelling (case-sensitive: `MySite` ≠ `mysite`).
- Use **Tab completion** instead of typing the whole name.

<h4>11.3 Permission Issues (Less likely at this level)</h4>

Messages like `Permission denied` usually show up when:
- You’re trying to edit system-level files.
- You’re in a folder you don’t own.

At this command-line knowledge level, the simplest fix is: **stay inside your home directory, Desktop, Documents, or your project folders.**
</div>

