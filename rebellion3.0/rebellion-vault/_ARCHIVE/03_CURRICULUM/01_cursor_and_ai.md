# Cursor and AI: Your Development Environment

Cursor is where you'll spend most of your time. It's a code editor with AI built in — which means you can write code, get help, and have conversations about what you're building, all in one place.

This lesson covers what you need to know to use it effectively.

---

## The Interface

When you open Cursor with a folder, you'll see:

- **Sidebar (left):** File explorer. Navigate your project here.
- **Editor (center):** Where you read and write code. Multiple files open as tabs.
- **Chat Panel (right):** Where you talk to the AI.

If the chat panel isn't visible, press `Cmd + L` (Mac) or `Ctrl + L` (Windows/Linux).

---

## Talking to the AI

The chat panel is your primary way to get help. Just type naturally.

### Good questions:
- "What does this line do?"
- "I'm getting an error — here's what I see..."
- "How do I center this element?"
- "I'm stuck. What should I try next?"

### Better questions (with context):
- "In `index.html`, what does the `<head>` section do?"
- "My CSS isn't applying to the header. Here's my code..."
- "I want to add a navigation menu. Where should I start?"

The more specific you are, the better the help.

---

## Referencing Files with @

This is important: **use `@` to reference files directly in your messages.**

Examples:
- `@index.html` — reference a specific file
- `@styles/main.css` — reference a file in a folder
- `@04_PROJECTS/` — reference an entire folder

When you type `@`, Cursor shows a dropdown of matching files. Select one, and the AI can see its contents.

Use this when:
- Asking about specific code
- Wanting the AI to check your work
- Referencing curriculum lessons

---

## Chat Modes

Cursor has different modes for different tasks.

### Ask Mode
- **Purpose:** Questions, explanations, exploring
- **What it does:** AI reads files and answers questions, but makes no changes
- **When to use:** Learning, debugging, understanding code

### Agent Mode
- **Purpose:** Building, editing, creating
- **What it does:** AI can read files AND make changes (with your approval)
- **When to use:** When you're ready to write or modify code

Switch modes using the dropdown at the top of the chat panel.

**Rule of thumb:**
- Confused or learning? → **Ask mode**
- Ready to build? → **Agent mode**

---

## Inline AI Features

Beyond the chat panel, Cursor has inline AI features:

### Cmd + K (Quick Edit)
Select some code, press `Cmd + K` (Mac) or `Ctrl + K` (Windows/Linux), and type what you want to change.

Example: Select a paragraph, press Cmd + K, type "make this a heading" — the AI suggests the edit.

### Tab Completion
As you type, Cursor suggests completions. Press `Tab` to accept.

This gets smarter over time as the AI learns your patterns.

---

## The AI Is a Tool, Not an Oracle

Important mindset shift:

The AI is incredibly useful, but it's not always right. It can:
- Generate code that doesn't quite work
- Misunderstand what you're asking
- Give outdated information

Your job is to:
1. **Direct it** — be clear about what you want
2. **Review its output** — don't blindly accept
3. **Iterate** — if something's wrong, say so and refine

This is a skill. You'll get better at it.

---

## Prompting Basics

How you ask affects what you get. Some tips:

### Be Specific
- Vague: "Make this better"
- Specific: "Add 20px of padding to the header and change the background to dark blue"

### Provide Context
- "I'm building a landing page for a web development course"
- "This is a navigation menu that should be responsive"

### State Your Constraints
- "Keep it simple — no JavaScript"
- "Use only CSS we've covered so far"

### Ask for Explanations
- "Do this AND explain what each part does"
- "Why did you choose this approach?"

---

## When Things Go Wrong

### Chat getting confusing?
Start a new chat (click `+` in the chat panel). Your learner state is in files, not the chat history.

### AI not understanding?
- Rephrase your question
- Add more context
- Reference specific files with `@`

### AI suggesting something too complex?
Say so: "That's too advanced. Can you show me a simpler approach?"

### Made a mistake?
Use `Cmd + Z` to undo. Git also lets you revert changes (we'll cover that later).

---

## Keyboard Shortcuts

| Action | Mac | Windows/Linux |
|--------|-----|---------------|
| Open chat | `Cmd + L` | `Ctrl + L` |
| Quick AI edit | `Cmd + K` | `Ctrl + K` |
| Quick file search | `Cmd + P` | `Ctrl + P` |
| Save file | `Cmd + S` | `Ctrl + S` |
| Toggle sidebar | `Cmd + B` | `Ctrl + B` |
| Comment/uncomment | `Cmd + /` | `Ctrl + /` |

You don't need to memorize these. Just know they exist.

---

## Summary

- Cursor = code editor + AI assistant
- Use `@` to reference files in your messages
- **Ask mode** for learning, **Agent mode** for building
- Be specific in your prompts
- Review AI output — don't blindly accept
- When stuck, rephrase or add context

---

## Practice

Before moving on, try these:

1. Open a file in the editor
2. Open the chat panel (`Cmd + L`)
3. Ask: "What is this file for?"
4. Reference a file with `@` in your message
5. Try switching between Ask and Agent modes

Once you're comfortable navigating Cursor, you're ready to write some HTML.
