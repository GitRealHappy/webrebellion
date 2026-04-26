# The Web Dev Rebellion

A guided system for designing, building, and deploying real static websites — without learning to code line-by-line.

You direct. The AI builds. You ship.

---

## What this is

This folder is the course. There are no videos to binge, no platform to log into. When you open this folder in **Claude Code**, the AI guide auto-loads its instructions from `CLAUDE.md` and walks you through everything.

Most courses teach you HTML and CSS. This one teaches you to **direct an AI** through building real things.

---

## What you need

- **Claude Code** installed and working in your terminal
- **A GitHub account** (you don't need to know Git yet)
- **A web browser**

That's it.

---

## How to start

1. Open this folder in your terminal:
   ```
   cd path/to/rebellion-vault
   ```
2. Start Claude Code:
   ```
   claude
   ```
3. Say:
   > I'm starting the Web Dev Rebellion.

The guide will read your state files, ask a few short questions, and help you start your first project.

---

## How sessions work

| When you want to… | Say something like… |
|---|---|
| Start fresh | "I'm starting the Web Dev Rebellion." |
| Continue | "Let's continue where I left off." |
| Start a new project | "I want to build a new site." |
| Switch projects | "Switch to my-portfolio." |
| Deploy | "Let's make it live." |
| Add a feature | "Help me add a payment button." |
| End a session | "I'm wrapping up." |
| Get unstuck | "I'm stuck on…" |

---

## Folder map

```
rebellion-vault/
├── README.md                ← you are here
├── CLAUDE.md                ← Claude's instructions (auto-loaded)
├── 00_GUIDE/                ← how Claude behaves (you can read these)
├── 01_STATE/                ← your global state across projects
├── 02_BASICS/               ← short modules: Claude Code, terminal, GitHub, SSH
├── 03_BUILD_FLOW/           ← the steps Claude walks you through
├── 04_FEATURES/             ← optional add-ons (Stripe, forms, etc.)
├── 05_TROUBLESHOOTING/      ← when things break
├── 06_VIDEOS.md             ← every video link, in one place
├── 07_PROJECTS/             ← your actual websites live here
└── _ARCHIVE/                ← previous version of the vault, for reference
```

You don't need to read any of these in advance. Claude will pull them in as you go.

---

## Project naming

When you start a project, Claude will ask for a name and convert it to **kebab-case** (lowercase, hyphens). Examples:

- `my-portfolio`
- `oakmoss-site`
- `the-unblocked-carver`

Each project lives in its own folder under `07_PROJECTS/`. Claude only works on the one named in `01_STATE/active_project.md` — your other projects are out of scope until you switch.

To switch: just say "switch to my-portfolio" (or whatever name).

---

## What's in scope

- Static sites: HTML, CSS, a sprinkle of JavaScript when needed
- GitHub for version control
- GitHub Pages for free hosting
- Custom domains (DNS setup)
- Stripe Payment Links and Stripe MCP for selling things
- Simple form handling (Formspree, mailto, etc.)

## What's out of scope

- Learning HTML/CSS syntax in depth (the AI writes it, you direct)
- Backend servers, databases, authentication
- Big JavaScript frameworks (React, Vue, etc.)
- Complex build tools

These aren't forbidden — just **post-rebellion**. Get good at shipping first.

---

## When you're stuck

- **First**: tell Claude what's happening. It can usually help.
- **If it's outside scope**: bring it to the community on **Discord**: https://discord.gg/vGnMSxBsj
- **If you want JJ specifically**: tag him in the Discord.

---

## A note on AI efficiency

You'll get more value out of Claude (and spend fewer tokens) if you learn a few habits:
- Start a new chat between big tasks
- Switch models when the work doesn't need a heavyweight
- Use plan mode for non-trivial decisions
- Let Claude dispatch subagents for read-heavy research

Claude will nudge you toward these in context. Full reference: `02_BASICS/01_token_efficiency.md`.

---

## Ready?

Start Claude. Say:

> I'm starting the Web Dev Rebellion.

Let's ship something.
