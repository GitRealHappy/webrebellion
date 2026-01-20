---
title: "Inspecting HTML and CSS"
module: 6
module_title: "CSS Fundamentals"
order: 24
estimated_time: "25 min"
layout: lesson
---

<div class="lesson-block" markdown="1">
### Debug Like a Pro: The Inspector is Your Best Friend

Frontend development is iterative. You build, you test, you tweak. The browser's developer tools, specifically the *inspector*, are your essential toolkit for understanding and debugging your live code. Forget guessing; inspect and *know*.
</div>

<div class="lesson-block" markdown="1">
### Accessing the Inspector

- **Right-click** any element on a webpage and select **"Inspect"**.
- Or, press **F12**.

Focus on the **Elements** and **Styles** panels for now.
</div>

<div class="lesson-block" markdown="1">
### Inspecting Elements: Pinpointing the Target

1. **Elements Panel:** Shows your page's HTML structure like a tree. Click any element here to select it.
2. **Element Select Tool:** (Look for an arrow icon, usually top-left in the inspector). Click this, then hover over any element on the *page itself*. This is often faster than digging through the Elements tree.
</div>

<div class="lesson-block" markdown="1">
### Understanding Styles: What's Actually Applied?

Once an element is selected:

- **Styles Panel:** This is gold. It lists all CSS rules currently affecting the selected element.
  - **Active Styles:** These are applied.
  - **Strikethrough Styles:** These are being overridden by a more specific or later rule. This is crucial for debugging conflicts!
</div>

<div class="lesson-block" markdown="1">
### Testing CSS in Real-Time: Experiment Fearlessly

The inspector isn't just for looking; it's for *doing*.

1. **Edit Existing Properties:** Click directly on a property value (e.g., `color: blue;`) and type in a new value (`color: red;`). The page updates instantly.
2. **Add New Properties:** Click within a selector's block (e.g., between `{` and `}`) and start typing a new property (`margin-top`). The inspector will offer suggestions.
3. **Try New Selectors:** You can even add entirely new rules in the Styles panel to see how they'd affect the page.

**Crucial Note:** Changes made in the inspector are **temporary**. They disappear on page refresh. This is fantastic for rapid experimentation but remember to copy your successful tweaks back into your actual code files.
</div>
