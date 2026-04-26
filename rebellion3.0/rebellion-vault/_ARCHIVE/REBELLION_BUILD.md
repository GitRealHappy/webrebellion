# Rebellion Method — Build Tracker

This document tracks the development of the Web Dev Rebellion system. It lives outside the learner-facing materials and serves as a working log for JJ and the AI as we iterate on the course.

---

## Quick Context (For When You Return)

**What is this?** A filesystem-based web development course where the AI guide (via Cursor) teaches learners to build static websites. The course folder *is* the course — no external platform needed.

**How it works:**
1. Learner downloads ZIP, opens in Cursor
2. `.cursor/rules/rebellion-guide.mdc` auto-loads AI instructions
3. Learner says "I'm starting the Web Dev Rebellion"
4. AI reads state files, guides them through project-based learning
5. State files persist progress across chat sessions

**Key innovation:** Learner state lives in markdown files (`02_LEARNER_STATE/`), so chat resets don't lose progress. The AI reads these files at session start and updates them at session end.

**To resume development:** Start a chat and say "I'm the course creator. Let's continue building the Rebellion Method." The AI will read this file and the system prompts to understand context.

---

## Current Status

**Phase:** System refinements complete — ready for learner testing

---

## Completed

- [x] Initial system prompt files created
  - `00_AI_ROLE.md` — defines the AI guide's role, tone, and boundaries
  - `01_MEMORY_RULES.md` — defines how learner state is stored and updated
  - `02_THE_REBELLION_METHOD.md` — defines scope, philosophy, and guardrails
- [x] Learner state file structure established (`02_LEARNER_STATE/`)
- [x] AI role clarifications added:
  - Defer to JJ for out-of-scope or complex questions → "Ask JJ in the Rebel Alliance HQ"
  - Personality: straightforward and practical, with room for puns/jokes when timing is right
  - One learner at a time model confirmed
- [x] Renamed `03_THE_REBELLION_METHOD.md` → `02_THE_REBELLION_METHOD.md`
- [x] Created `01_START_HERE/01_USING_CURSOR.md` — Cursor orientation guide for learners
- [x] Updated `00_README.md` to point to the Cursor guide as Step 1
- [x] **Curriculum restructured into modular files:**
  - `00_orientation.md` — trimmed intro, mindset, how it works
  - `01_cursor_and_ai.md` — Cursor interface, chat modes, @ references, prompting basics
  - `02_html_basics.md` — elements, boilerplate, text, lists, links, images
  - `03_css_basics.md` — selectors, properties, cascade, box model, display
  - `04_command_line.md` — navigation, file manipulation, essential commands
  - `05_git_basics.md` — concepts, setup, daily workflow, GitHub
  - `06_deployment.md` — GitHub Pages, DNS, custom domains, HTTPS
  - `07_ai_workflow.md` — prompting, reviewing output, iteration, when to use AI
  - `08_projects.md` — building process, project structure, quality checklist
- [x] Created reference materials:
  - `reference/html_reference.md`
  - `reference/css_reference.md`
  - `reference/git_reference.md`
- [x] Created `04_PROJECTS/` folder for learner projects
- [x] **System refinements (2025-01-24):**
  - Created `.cursor/rules/rebellion-guide.mdc` — AI instructions auto-loaded by Cursor
  - Updated README with session start/end rituals
  - Restructured orientation with clear learning phases
  - Refined skills.md for stage-based tracking with confirmation dates
  - Added milestones section to project_brief.md
  - Added stage gating and session protocols to AI role
  - Reset learner state files to clean templates

---

## In Progress

- [ ] Test the system with a real learner walkthrough
- [ ] Review and potentially archive `whole-curriculum.md` (original monolithic file)

---

## Upcoming / To Discuss

- Additional reference materials (command line reference?)
- Project templates or starter files?
- Video/visual aids to complement written curriculum?
- Distribution packaging (ZIP file structure)

---

## Design Decisions Log

### 2025-01-24

**Decision:** AI defers to JJ for out-of-scope questions  
**Rationale:** Keeps the AI focused on the current stage; prevents learners from going down rabbit holes without human guidance.

**Decision:** Personality is welcome (puns, jokes) when timing is right  
**Rationale:** Learning should be engaging, not robotic — but clarity always comes first.

**Decision:** One learner at a time  
**Rationale:** State files represent a single person's journey. Multi-learner support would require a different architecture.

**Decision:** Modular curriculum structure  
**Rationale:** Easier to navigate, update, and reference. Each topic is self-contained. Learners can jump to specific topics when needed.

**Decision:** Comprehensive deployment guide including DNS  
**Rationale:** Deployment is a "rite of passage" moment. Learners should understand not just GitHub Pages basics, but also custom domains, DNS records, and HTTPS — enough to launch professional sites.

**Decision:** Separate AI workflow lesson  
**Rationale:** AI usage is central to the Rebellion Method but should come after fundamentals. Learners need to understand what they're directing AI to do before they can do it effectively.

**Decision:** Cursor rules for AI instruction injection  
**Rationale:** `.cursor/rules/rebellion-guide.mdc` with `alwaysApply: true` ensures the AI receives its instructions automatically when the folder is opened in Cursor. Works well with ZIP distribution — no manual setup required.

**Decision:** Session start/end rituals  
**Rationale:** Provides structure for picking up where learners left off. AI reads state files at session start, updates them at session end. Maintains continuity across chat resets.

**Decision:** Soft stage gating  
**Rationale:** Prerequisites are checked but not strictly enforced. If learner says they understand, they can proceed. Honor system with gentle nudges.

**Decision:** Project-driven learning after Phase 1  
**Rationale:** Learners complete Foundation (orientation, cursor, HTML, CSS) in order, then start building. Remaining lessons (command line, git, deployment) are learned when needed for the project.

---

## How the System Works (Technical Summary)

### AI Instruction Injection
- `.cursor/rules/rebellion-guide.mdc` contains condensed AI instructions
- `alwaysApply: true` means Cursor loads it automatically when folder is opened
- `00_SYSTEM_PROMPTS/` folder contains full documentation (for transparency/reference)

### Learner State Files
- `current_stage.md` — which stage they're on (orientation → post_rebellion)
- `skills.md` — confirmed understanding of each stage (not_started/learning/understood)
- `project_brief.md` — what they're building, with milestones checklist
- `confusion.md` — tracked sticking points
- `goals.md` — short/long term learning goals

### Session Flow
1. **Start:** Learner says "let's continue" → AI reads all state files
2. **Work:** AI teaches on-the-fly, encourages good habits
3. **End:** Learner says "wrapping up" → AI confirms progress, updates state files

### Stage Gating (Soft)
- Deployment requires: HTML, CSS, Command Line, Git understood
- AI asks light questions to gauge readiness, doesn't strictly block
- Honor system: if learner says they understand, they can proceed

### Distribution
- ZIP file download
- Learner extracts, opens folder in Cursor
- No setup required — `.cursor/rules/` is recognized automatically

---

## Notes & Ideas

*Space for capturing ideas, questions, and observations as we build.*

- Consider adding a "troubleshooting" reference for common errors
- Could add example prompts library for common tasks
- May want session log file for tracking what was worked on each day
- Test with a real beginner learner to identify gaps

---

## File Structure Reference

```
rebellion-method/
├── .cursor/
│   └── rules/
│       └── rebellion-guide.mdc  ← AI instructions (auto-loaded)
├── 00_SYSTEM_PROMPTS/
│   ├── 00_AI_ROLE.md
│   ├── 01_MEMORY_RULES.md
│   └── 02_THE_REBELLION_METHOD.md
├── 01_START_HERE/
│   ├── 00_README.md
│   └── 01_USING_CURSOR.md
├── 02_LEARNER_STATE/
│   ├── project_brief.md
│   ├── current_stage.md
│   ├── skills.md
│   ├── confusion.md
│   └── goals.md
├── 03_CURRICULUM/
│   ├── 00_orientation.md
│   ├── 01_cursor_and_ai.md
│   ├── 02_html_basics.md
│   ├── 03_css_basics.md
│   ├── 04_command_line.md
│   ├── 05_git_basics.md
│   ├── 06_deployment.md
│   ├── 07_ai_workflow.md
│   ├── 08_projects.md
│   ├── whole-curriculum.md  (original, may archive)
│   └── reference/
│       ├── html_reference.md
│       ├── css_reference.md
│       └── git_reference.md
├── 04_PROJECTS/
│   └── (learner projects go here)
└── REBELLION_BUILD.md  ← you are here
```

---

## Learning Phases

### Phase 1: Foundation (do in order)
1. Orientation — understand the system
2. Cursor & AI — learn the tools
3. HTML Basics — structure and content
4. CSS Basics — styling

### Phase 2: Start Building
- Begin project with HTML structure
- Apply basic styling
- Learn on-the-fly as questions arise

### Phase 3: Tooling (when ready to deploy)
5. Command Line — terminal navigation
6. Git Basics — version control
7. Deployment — going live

### Phase 4: Mastery (ongoing)
8. AI Workflow — working effectively with AI
9. Projects — iterate and expand
10. Post-rebellion — you're independent!

---

## Session Flow

```
┌─────────────────────────────────────────────────────────┐
│ SESSION START                                           │
│ "I'm starting the Web Dev Rebellion" or                │
│ "Let's continue where I left off"                      │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│ AI READS STATE FILES                                    │
│ - current_stage.md                                      │
│ - project_brief.md                                      │
│ - skills.md                                             │
│ - confusion.md                                          │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│ AI SUMMARIZES                                           │
│ - Current stage and project                            │
│ - Skills confirmed so far                              │
│ - Suggested next steps                                 │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│ WORK SESSION                                            │
│ - Learner works on project                             │
│ - AI teaches concepts on-the-fly                       │
│ - AI encourages good habits (commits, brief updates)   │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│ SESSION END                                             │
│ "I'm wrapping up for today"                            │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│ AI WRAP-UP                                              │
│ - Ask what was accomplished                            │
│ - Confirm skill progression                            │
│ - Update state files                                   │
│ - Remind: commit/push, update brief                    │
│ - Suggest next session focus                           │
└─────────────────────────────────────────────────────────┘
```
