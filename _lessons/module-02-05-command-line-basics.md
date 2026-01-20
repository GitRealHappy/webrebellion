---
title: "Command Line Basics"
module: 2
module_title: "Computer & Environment Setup"
order: 10
estimated_time: "45 min"
layout: lesson
---

<div class="lesson-block" markdown="1">
### Master Your Machine: Navigate and Control

Forget the hacker movie tropes. The command line interface (CLI) is your direct link to the computer's core functions. It's where you'll run programs, manage files, and execute powerful commands – efficiently.

Yes, it has its own language, but the commands you'll use 95% of the time are simple and become second nature quickly. This isn't optional; it's essential for a developer.
</div>

<div class="lesson-block" markdown="1">
### What You'll Conquer

- **Opening the Terminal:** Your gateway to the CLI.
- **Navigation:** Move through directories (folders) like a pro.
- **File & Directory Manipulation:** Create, rename, move, and delete files and folders directly.
- **Launching Programs:** Open files and applications from the command line.
</div>

<div class="lesson-block" markdown="1">
### Your Terminal Toolkit

- **Linux:** Search for "Terminal" or press `Ctrl + Alt + T`.
- **macOS:** Use Spotlight (`Cmd + Space`) and search for "Terminal", or find it in `Applications > Utilities`.

You'll see a prompt – usually ending in `$` or `%`. This is where you type commands.

```bash
$ whoami
```

(Type this and press Enter) This will show your username. Simple, effective.

**Tip:** Commands are often shown with the prompt, like `$ command`. **Don't type the `$`**.
</div>

<div class="lesson-block" markdown="1">
### Work Like a Rebel: Efficiency Hacks

1. **Smart Copy/Paste:** Use `Ctrl + Shift + C` (Cmd + C on Mac) to copy and `Ctrl + Shift + V` (Cmd + V on Mac) to paste *inside* the terminal.
2. **Tab Completion:** **This is critical.** Start typing a command or path, hit `Tab`, and the CLI will autocomplete if there's only one option, or show you the possibilities if there are multiple. This saves massive amounts of typing and prevents errors.
   - Example: `cd Doc` + `Tab` might show `Documents/` and `Downloads/`. Type `cd Docu` + `Tab` and it will complete `Documents/`.
3. **Current Directory Shortcut (`.`):** Use `cursor .` (assuming Cursor is installed and in your PATH) to open the current directory and all its files in Cursor. It's a massive time-saver for project management.
</div>

<div class="lesson-block" markdown="1">
### Essential Commands to Practice

Start by creating a basic web project structure.

1. **Create a project directory:**
```bash
mkdir my-first-site
```

2. **Move into it:**
```bash
cd my-first-site
```

3. **Create essential files:**
```bash
touch index.html style.css script.js
```

4. **Create an image folder:**
```bash
mkdir images
```

5. **Check your work:**
```bash
ls
```
(Lists the contents of the current directory)

This simple sequence is the foundation for most web projects. Practice it until it's muscle memory.
</div>

<div class="lesson-block" markdown="1">
### Knowledge Check

- What is the command line?
- How do you open the command line on your computer?
- How can you navigate to a particular directory?
- What does `cd ..` do?
- How do you display the name of the current directory?
- How do you display the contents of the current directory?
- How do you create a new directory?
- How do you create a new file?
- How do you destroy a directory or file?
- How do you rename a directory or file?
</div>
