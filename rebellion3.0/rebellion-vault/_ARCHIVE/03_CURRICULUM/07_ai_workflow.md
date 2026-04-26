# AI Workflow: Working Effectively with AI

You've learned the fundamentals. Now let's talk about how to actually work — using AI as a force multiplier, not a crutch.

The goal: **You direct, AI executes. You understand, AI accelerates.**

---

## The Rebellion Philosophy on AI

AI can do ~95% of the manual work. But you need to understand enough to:

1. **Direct it** — know what to ask for
2. **Evaluate it** — know if the output is good
3. **Debug it** — know when something's wrong
4. **Learn from it** — understand what it produces

If you skip the fundamentals, you become dependent. If you master the fundamentals, AI makes you 10x faster.

---

## When to Use AI

### Good Uses

- **Generating boilerplate** — "Create an HTML page with a header, nav, and footer"
- **Writing repetitive code** — "Add 10 more list items following this pattern"
- **Explaining code** — "What does this CSS do?"
- **Debugging** — "This isn't working. Here's the error..."
- **Refactoring** — "Clean up this code" or "Make this more readable"
- **Learning** — "How would I add a hover effect to this button?"

### Less Good Uses

- **Generating entire projects without understanding** — You won't be able to maintain it
- **Copying code you don't understand** — You'll be stuck when it breaks
- **Skipping fundamentals** — "Just make it work" without learning why

---

## Prompting Principles

### Be Specific

Vague prompts get vague results.

**Bad:** "Make a website"

**Good:** "Create an HTML page with a dark purple background, a centered h1 that says 'The Web Dev Rebellion' in neon green, and a paragraph below it"

### Provide Context

Tell the AI what you're building and why.

**Better:** "I'm building a landing page for a web development course. The style is Matrix-inspired with dark colors and terminal aesthetics. Create a hero section with..."

### Constrain the Output

If you want simple code, say so.

- "Use only HTML and CSS, no JavaScript"
- "Keep it simple — I'm still learning"
- "Don't use any frameworks or libraries"

### Ask for Explanations

Don't just get code. Understand it.

- "Create this AND explain what each part does"
- "Why did you use flexbox here instead of grid?"
- "What would happen if I removed this line?"

---

## The Iteration Loop

AI rarely gets it perfect on the first try. That's fine. Iterate.

1. **Prompt** — Ask for what you want
2. **Review** — Look at what it produced
3. **Test** — Does it work? Does it look right?
4. **Refine** — "Change the color to..." or "Make the padding larger"
5. **Repeat** — Until it's right

This is normal. Professional developers do this constantly.

---

## Reviewing AI Output

Before accepting AI-generated code:

### Read It

Don't just paste and hope. Read through the code.

- Do you understand what each part does?
- Does it match what you asked for?
- Is anything obviously wrong?

### Test It

- Save the file
- Refresh the browser
- Click around
- Check different screen sizes

### Inspect It

Use browser dev tools to see what's actually happening.

- Is the CSS applying correctly?
- Are there console errors?
- Does the structure make sense?

---

## Common AI Mistakes to Watch For

### Overcomplication

AI sometimes generates more complex solutions than necessary. If you asked for something simple and got 50 lines of code, ask: "Can you simplify this?"

### Outdated Patterns

AI training data has a cutoff. Some suggestions might be outdated. When in doubt, check current documentation.

### Hallucinated Features

AI might reference CSS properties or HTML attributes that don't exist. If something doesn't work, verify it's real.

### Missing Context

AI doesn't remember previous conversations (unless in the same chat). If you start a new chat, re-provide context.

---

## Effective Prompts for Web Development

### Creating Structure

```
Create an HTML page for a landing page with:
- A header with a logo and navigation
- A hero section with a headline and subheadline
- A features section with 3 feature cards
- A footer with copyright

Use semantic HTML elements.
```

### Styling

```
Style the hero section with:
- Dark purple background (#1a0a2e)
- White text, centered
- The headline should be large (48px) and bold
- Add 80px of padding top and bottom
- Make it full viewport height
```

### Debugging

```
This CSS isn't working. The background color isn't showing.

Here's my HTML:
[paste HTML]

Here's my CSS:
[paste CSS]

What's wrong?
```

### Learning

```
Explain how CSS flexbox works. Give me a simple example I can try.
```

### Refactoring

```
Here's my CSS. It's messy and has some repetition. Clean it up and organize it better. Explain what you changed.

[paste CSS]
```

---

## Building with AI: A Workflow

Here's how to build a page with AI assistance:

### 1. Plan First

Before prompting, know what you want:
- What's the purpose of this page?
- What sections does it need?
- What's the visual style?

### 2. Build Structure First

Get the HTML right before styling:

```
Create the HTML structure for a landing page with [sections]. 
Don't add any styling yet.
```

### 3. Style Incrementally

Style one section at a time:

```
Now style the header section. Dark background, white text, 
logo on the left, nav links on the right.
```

### 4. Test Constantly

After each change:
- Save
- Refresh browser
- Check if it looks right
- Check on mobile (resize browser)

### 5. Iterate

```
The nav links are too close together. Add more spacing.
```

```
Make the header sticky so it stays at the top when scrolling.
```

---

## When AI Can't Help

Some things you need to figure out yourself:

- **What to build** — AI can't decide your project for you
- **Design decisions** — AI can implement, but you choose the direction
- **Debugging complex issues** — Sometimes you need to understand the fundamentals
- **Learning deeply** — AI can explain, but you need to practice

When stuck on something AI can't solve, that's when you ask JJ in the Rebel Alliance HQ.

---

## The Long Game

Right now, you're learning. AI helps you move faster while you build understanding.

Over time:
- You'll need fewer explanations
- You'll catch AI mistakes faster
- You'll write better prompts
- You'll know when to use AI and when to just do it yourself

The goal isn't to need AI less — it's to use AI better.

---

## Practice

Try this exercise:

1. **Start a new chat** in Cursor
2. **Describe your project:** "I'm building a landing page for [your project]. The style is [describe it]."
3. **Ask for HTML structure:** "Create the HTML structure for the homepage with [list sections]."
4. **Review and test** the output
5. **Ask for styling:** "Now style the [first section] with [describe what you want]."
6. **Iterate:** Make adjustments until it looks right
7. **Ask for explanations:** "Explain why you used [specific technique]."

Notice how the conversation flows. Notice what works and what doesn't. This is the skill you're building.

---

## Summary

- AI is a force multiplier, not a replacement for understanding
- Be specific, provide context, constrain output
- Always review and test AI-generated code
- Iterate — first attempts are rarely perfect
- Ask for explanations to deepen understanding
- Know when to ask a human (JJ in the Rebel Alliance HQ)

You're not learning to code *or* learning to use AI. You're learning to code *with* AI. That's the modern skill.
