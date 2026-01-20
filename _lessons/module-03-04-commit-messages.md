---
title: "Commit Messages"
module: 3
module_title: "Git & Version Control"
order: 14
estimated_time: "15 min"
layout: lesson
---

<div class="lesson-block" markdown="1">
### Why Bother with Commits?

Let's cut to the chase: good commit messages matter because they're a direct signal of your professionalism and clarity. When you're shipping real projects, your Git history is part of your public-facing work.

- **Employers look.** A clean, descriptive commit history screams "I know what I'm doing."
- **You look back.** Future You will thank Present You for remembering *why* a change was made.
- **Collaboration is faster.** If anyone else ever touches your code, good messages are the bedrock of understanding.
</div>

<div class="lesson-block" markdown="1">
### The Anatomy of a Good Commit

Forget the vague "fixed stuff." A good commit message tells a story. It has two parts:

1. **Subject:** A punchy, 72-character-max summary of the change. Think headline.
```text
Add responsive navigation to mobile view
```

2. **Body:** (Optional, but highly recommended) Explain the *why*. What problem did this solve? How did your change address it? Separate this from the subject with a blank line.
```text
The previous navigation did not collapse correctly on screens smaller than 768px,
leading to usability issues. This change implements a hamburger menu pattern
that expands and collapses as expected.
```
</div>

<div class="lesson-block" markdown="1">
### When to Commit: Ship, Ship, Ship!

Think of commits as checkpoints. Every time you cross a meaningful milestone, capture it.

- Got a feature working? Commit.
- Fixed a stubborn bug? Commit.
- Refactored a messy section? Commit.

Make your commits granular. A history of small, focused commits is far more valuable than a few massive, cryptic ones. Commit often, push often, and keep that momentum going.
</div>

<div class="lesson-block" markdown="1">
### Quick Tips

- **Use active voice:** "Implement feature", not "Feature implemented".
- **Avoid "WIP" or "don't commit":** If it's in your repo, it's potentially releasable.
- **AI is your co-pilot:** Use Cursor's AI to help draft commit messages. It can summarize your changes effectively – just review and refine to ensure it captures the *why*.
</div>
