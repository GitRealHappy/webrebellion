# Token Efficiency

A few habits that make Claude faster, cheaper, and more focused.

You don't need to memorize this. The Rebellion guide will nudge you in context. This file is the *why*.

---

## What's a token, briefly

Every word, character, and bit of code you and Claude exchange counts as tokens. Long chats, big files, repetitive context — they all add up.

Cheaper sessions = faster responses, lower bills, less noise.

---

## The big four habits

### 1. Start a fresh chat between big tasks

The longer a chat goes, the more context Claude re-reads every turn. After ~30+ exchanges, that gets expensive.

**When to clear:**
- Switching projects
- Switching from "design" to "deploy"
- Coming back the next day

**How:**
- Type `/clear`
- Or open a new chat window

Before clearing, the guide will save state to your project file so the next session has full context.

---

### 2. Switch models for the job

Claude Code has multiple models. Bigger isn't always better.

| Model | When to use |
|---|---|
| **Haiku** | Tiny tasks: rename a class, fix a typo, format something |
| **Sonnet** (default) | Most building work — good balance of speed and capability |
| **Opus** | Hard reasoning, big architectural decisions, debugging weird stuff |

Switch with `/model`.

The guide will nudge you when a smaller model would be plenty.

---

### 3. Use plan mode for non-trivial decisions

Plan mode = read-only. Claude can read files but can't write or run commands.

This forces a design step before action, which is often cheaper than fixing a wrong implementation.

Enter with `/plan` or shift+tab.

---

### 4. Let Claude dispatch subagents

When you ask something that requires reading 10 files or doing 5 web searches, Claude can send a **subagent** to do the work in isolation. The subagent reports back a summary; the raw output never enters your main chat.

You don't trigger this — Claude offers when relevant. Just say yes.

---

## A medium-leverage habit: update CLAUDE.md / state files

When you settle on a preference ("always use kebab-case for file names", "I always want hover effects on buttons"), tell Claude to add it to `CLAUDE.md` or `01_STATE/user_knowledge.md`.

Why: future sessions read these files automatically. You don't have to re-explain.

This is one of the highest ROI moves you can make. A 30-second edit saves hours over the life of the project.

---

## Smaller habits

- **Reference specific files** instead of pasting them. Say "in `index.html`" rather than pasting the whole file.
- **Be specific in requests.** "Add 20px padding to the header" beats "make it look better."
- **Don't ask Claude to summarize what just happened.** You can read the diff or commit.
- **Avoid speculative requests.** "Show me 5 different approaches" loads 5x the cost. Pick one direction first.

---

## What costs the most tokens

In rough order:
1. Long chat history being re-read every turn
2. Reading large files repeatedly (just edit, don't re-read)
3. Web fetches and search results
4. Letting the conversation explore tangents

Most of these you fix with `/clear` and tighter prompts.

---

## What you should NOT optimize away

Don't sacrifice clarity to save tokens.

Don't:
- Write cryptic 5-word prompts to be "efficient"
- Skip plan mode for things that need it just to save tokens
- Refuse to use Opus when the task actually needs it

Token efficiency is a habit, not a religion. The cheapest move is the one that gets you to a working site fastest.

---

## Quick reference

| Habit | Command |
|---|---|
| New chat | `/clear` |
| Compact current chat | `/compact` |
| Switch model | `/model` |
| Plan mode | `/plan` or shift+tab |
| Run shell command | `! <command>` |
