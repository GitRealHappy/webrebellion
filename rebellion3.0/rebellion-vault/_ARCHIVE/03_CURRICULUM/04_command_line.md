# Command Line: Navigating Your Computer

The command line (also called terminal, shell, or CLI) is how you talk directly to your computer using text commands instead of clicking around.

It looks intimidating at first. It becomes second nature quickly.

---

## Why Bother?

You could do most things with a mouse. But the command line is:

- **Faster** — once you know the commands
- **More powerful** — some things can only be done here
- **Required** — Git, deployment, and many dev tools use it
- **Universal** — works the same on any computer

Every professional developer uses the command line daily. This is a core skill.

---

## Opening the Terminal

**Mac:**
- Press `Cmd + Space`, type "Terminal", press Enter
- Or: Applications → Utilities → Terminal

**Linux:**
- Press `Ctrl + Alt + T`
- Or: Search for "Terminal" in your applications

**Windows (WSL):**
- Search for "Ubuntu" or "WSL" in the Start menu

**In Cursor:**
- Press `` Ctrl + ` `` (backtick) to open the integrated terminal

---

## The Prompt

When you open the terminal, you'll see something like:

```
username@computer:~$
```

or

```
~ %
```

This is the **prompt**. It's waiting for you to type a command.

The `~` means you're in your home directory. The `$` or `%` is just the end of the prompt.

**When you see commands in tutorials, don't type the `$` — that's just showing the prompt.**

---

## Essential Commands

### Where Am I?

```bash
pwd
```

**P**rint **W**orking **D**irectory. Shows your current location.

```
/Users/yourname/Documents
```

### What's Here?

```bash
ls
```

**L**i**s**t. Shows files and folders in the current directory.

```bash
ls -la
```

Shows everything including hidden files, with details.

### Move Around

```bash
cd foldername
```

**C**hange **D**irectory. Move into a folder.

```bash
cd ..
```

Move up one level (to the parent folder).

```bash
cd ~
```

Go to your home directory.

```bash
cd ~/Documents/projects
```

Go to a specific path.

### Create Things

```bash
mkdir my-project
```

**M**a**k**e **Dir**ectory. Create a new folder.

```bash
touch index.html
```

Create a new empty file (or update timestamp if it exists).

```bash
mkdir -p projects/website/images
```

Create nested folders all at once.

### Move and Rename

```bash
mv oldname.txt newname.txt
```

Rename a file.

```bash
mv file.txt folder/
```

Move a file into a folder.

```bash
mv folder/ newfolder/
```

Rename a folder.

### Copy

```bash
cp file.txt copy.txt
```

Copy a file.

```bash
cp -r folder/ folder-copy/
```

Copy a folder (and everything inside). The `-r` means "recursive."

### Delete (Careful!)

```bash
rm file.txt
```

Remove a file. **No trash can. It's gone.**

```bash
rm -r folder/
```

Remove a folder and everything inside. **Be very careful.**

```bash
rm -rf folder/
```

Force remove without confirmation. **Dangerous. Double-check before using.**

---

## Paths: Absolute vs Relative

### Absolute Path

Starts from the root of your filesystem:

```
/Users/yourname/Documents/projects/website/index.html
```

Works from anywhere.

### Relative Path

Relative to your current location:

```
./index.html          # File in current directory
../images/photo.jpg   # File in sibling directory
../../other-project   # Two levels up, then into other-project
```

**Shortcuts:**
- `.` = current directory
- `..` = parent directory
- `~` = home directory

---

## Tab Completion (Your Best Friend)

Start typing a file or folder name, then press `Tab`:

- If there's one match, it auto-completes
- If there are multiple matches, press `Tab` twice to see options

This saves massive amounts of typing and prevents typos.

```bash
cd Doc[TAB]
# becomes: cd Documents/
```

---

## Command History

- **Up arrow** — previous command
- **Down arrow** — next command
- **Ctrl + R** — search command history

You'll reuse commands constantly. Use the arrows.

---

## Clearing and Canceling

```bash
clear
```

Clear the screen (or `Cmd + K` on Mac).

**Ctrl + C** — Cancel the current command (if something is stuck or running).

---

## Opening Files and Folders

**Open current folder in Finder (Mac):**
```bash
open .
```

**Open current folder in Cursor:**
```bash
cursor .
```

**Open a specific file:**
```bash
open index.html        # Opens in default app
cursor index.html      # Opens in Cursor
```

---

## Common Workflows

### Create a New Project

```bash
cd ~/Documents
mkdir my-website
cd my-website
touch index.html styles.css
mkdir images
ls
```

### Navigate to an Existing Project

```bash
cd ~/Documents/projects/my-website
cursor .
```

### Check What's in a Folder

```bash
ls -la
```

---

## Dangerous Commands to Avoid

Until you're confident:

```bash
rm -rf /              # DO NOT RUN - deletes everything
rm -rf ~              # DO NOT RUN - deletes your home folder
sudo rm -rf           # DO NOT RUN without understanding exactly what
```

**Rule:** Never run `rm -rf` on a path you're not 100% sure about. There's no undo.

---

## Getting Help

Most commands have a manual:

```bash
man ls                # Manual for 'ls'
```

Press `q` to exit the manual.

Or just search online: "linux ls command" will give you examples.

---

## Practice Exercises

Try these in order:

1. Open your terminal
2. Run `pwd` — where are you?
3. Run `ls` — what's there?
4. `cd` to your Documents folder
5. Create a folder: `mkdir terminal-practice`
6. Move into it: `cd terminal-practice`
7. Create files: `touch file1.txt file2.txt file3.txt`
8. List them: `ls`
9. Create a subfolder: `mkdir subfolder`
10. Move a file into it: `mv file1.txt subfolder/`
11. Check: `ls subfolder/`
12. Go back up: `cd ..`
13. Delete the practice folder: `rm -r terminal-practice`

---

## Summary

| Command | What it does |
|---------|--------------|
| `pwd` | Print current directory |
| `ls` | List contents |
| `cd folder` | Change directory |
| `cd ..` | Go up one level |
| `mkdir name` | Create folder |
| `touch name` | Create file |
| `mv old new` | Move or rename |
| `cp source dest` | Copy |
| `rm file` | Delete file |
| `rm -r folder` | Delete folder |
| `clear` | Clear screen |

---

## Next Steps

The command line is how you'll interact with Git. Once you're comfortable navigating folders and creating files, you're ready to learn version control.

Don't worry about memorizing everything. You'll use these commands so often they'll become automatic.
