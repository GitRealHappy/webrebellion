# Using Claude Code

The minimum viable knowledge for working with Claude Code in this vault.

---

## Starting a session

Open your terminal, navigate to the vault folder, and start Claude:

```bash
cd path/to/rebellion-vault
claude
```

Claude auto-loads `CLAUDE.md` from the folder. That file tells Claude how this system works. You don't have to do anything special — just start talking.

---

## Plan mode

**What it is:** a read-only mode where Claude designs an approach without changing anything.

**When to use it:**
- Before non-trivial features
- Before deploys or anything hard to undo
- When you want to think through a decision before acting

**How to enter:**
- Type `/plan`
- Or press `shift+tab` (in many terminal setups)

**How to exit:** Claude will present a plan and ask you to approve it. Approve → Claude proceeds. Reject → Claude revises or stops.

Use plan mode whenever a feature feels bigger than "just do it."

---

## Running shell commands while Claude is running

You don't have to leave the chat to run commands. Type `!` then your command:

```
! ls -la
! git status
! open index.html
```

The output appears in the chat. Claude sees it too, so you can follow up: "what's that error?"

---

## Slash commands worth knowing

| Command | Does what |
|---|---|
| `/plan` | Enter plan mode |
| `/clear` | Start a new chat (clears context) |
| `/compact` | Summarize the chat to save tokens |
| `/model` | Switch model (Haiku for small tasks, Sonnet default, Opus for hard ones) |
| `/help` | See all commands |

`/clear` is your friend after long sessions. The Rebellion guide will nudge you when it's time.

---

## Subagents

Claude can dispatch a **subagent** to do focused work without filling your main chat with raw output. Useful for:
- Reading lots of files
- Web research
- Big searches

You don't trigger them yourself — Claude offers when it's relevant. You just say yes or no.

---

## MCP servers

**MCP** = Model Context Protocol. It's how Claude connects to outside services (Stripe, Google, GitHub, etc.) so it can take actions on your behalf.

You don't need to understand the protocol. Just know:
- Some features (like Stripe automation) work better when you connect a service via MCP
- Claude will walk you through connecting one when relevant
- You can manage connections in Claude Code's settings

See `04_FEATURES/01_stripe_payments.md` for an example.

---

## Keyboard shortcuts (most useful)

| Action | Shortcut |
|---|---|
| Send message | Enter |
| New line in message | Shift+Enter |
| Cancel current request | Ctrl+C |
| Run shell command from prompt | Type `!` first |
| Enter plan mode | `/plan` or shift+tab |

---

## When something seems weird

- **Claude not loading instructions?** Confirm `CLAUDE.md` exists at the root of the folder you opened.
- **Wrong project being touched?** Check `01_STATE/active_project.md` — that's the source of truth.
- **Output cluttered?** Type `/compact` or `/clear`.
- **Wrong model?** `/model` to switch.

---

## What Claude *won't* do without your say-so

- Push to GitHub
- Open or merge PRs
- Run destructive commands (rm -rf, git reset --hard)
- Deploy or change DNS
- Charge anything (Stripe etc.)

These all need your explicit OK.

---

## Worth knowing, not memorizing

Don't try to learn Claude Code in advance. Use it. The Rebellion guide will tell you what command to type when it matters. The list above is for reference.
