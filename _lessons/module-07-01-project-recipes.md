---
title: "Project: Recipes"
module: 7
module_title: "Your First Project"
order: 27
estimated_time: "120 min"
layout: lesson
---

<div class="lesson-block" markdown="1">
### Ship Your First Static Site

It's time to build. You've learned HTML; now prove it by creating a functional, multi-page static website. This project focuses purely on HTML structure – we'll style it later.
</div>

<div class="lesson-block" markdown="1">
### Project Setup: Your Command Center

1. **Create Repo:** On GitHub, make a new repository named `rebellion-recipes`.
2. **Clone Locally:** `git clone git@github.com:YOUR_USERNAME/rebellion-recipes.git` into your `repos` directory. `cd` into it.
3. **README:** Create a `README.md` file. Briefly describe the project – a collection of recipes. Commit this change.
</div>

<div class="lesson-block" markdown="1">
### Commit Strategy: Ship Early, Ship Often

- **Atomic Commits:** Each commit should represent a single, logical change.
- **Descriptive Messages:** Use the Subject/Body format we've practiced.
- **Frequency:** Commit after every meaningful step – adding a new page, structuring a recipe, adding links. Don't wait until the end.
- **Push:** Regularly push your work to the `rebellion-recipes` repo.
</div>

<div class="lesson-block" markdown="1">
### Assignment: Build the Recipe Site

#### Iteration 1: The Homepage

1. Create `index.html` in the root of your `rebellion-recipes` directory.
2. Add the basic HTML boilerplate.
3. Add an `<h1>` heading: "Rebellion Recipes".
4. Commit.

#### Iteration 2: Your First Recipe Page

1. Create a `recipes` directory inside `rebellion-recipes`.
2. Inside `recipes`, create an HTML file for a recipe (e.g., `lasagna.html`). Use boilerplate.
3. Add an `<h1>` with the recipe's name (e.g., "The Best Lasagna").
4. In `index.html`, add a link to this recipe page:
```html
<a href="recipes/lasagna.html">The Best Lasagna</a>
```
5. On `lasagna.html`, add a "Home" link to navigate back:
```html
<a href="../index.html">Home</a>
```
6. Commit these changes.

#### Iteration 3: Recipe Content

Enhance your recipe page (`lasagna.html`) with:

1. An `<h1>` for the recipe name.
2. An `<img>` tag for a picture of the dish.
3. An `<h2>` heading: "Description". Add a paragraph or two below it.
4. An `<h2>` heading: "Ingredients". Follow with an unordered list (`<ul>`) of ingredients.
5. An `<h2>` heading: "Steps". Follow with an ordered list (`<ol>`) of cooking steps.
6. Commit.

#### Iteration 4: Expand the Menu

1. Create **two more** recipe pages (e.g., `chili.html`, `cookies.html`) in the `recipes` directory, following the same structure as Iteration 3.
2. On `index.html`, add links to these new recipes.
3. **Improve Navigation:** Wrap all recipe links on `index.html` in an unordered list (`<ul>`) for better structure:
```html
<h1>Rebellion Recipes</h1>
<ul>
  <li><a href="recipes/lasagna.html">The Best Lasagna</a></li>
  <li><a href="recipes/chili.html">Hearty Chili</a></li>
  <li><a href="recipes/cookies.html">Chocolate Chip Cookies</a></li>
</ul>
```
4. Commit.
</div>

<div class="lesson-block" markdown="1">
### Deploying Your Site: Go Live!

Showcase your work. GitHub Pages lets you host static sites directly from your repository.

1. **Ensure `index.html` is in the root:** Your main page *must* be named `index.html`.
2. **Go to GitHub Repo Settings:** Navigate to your `rebellion-recipes` repository on GitHub, click "Settings".
3. **Pages Settings:** On the left sidebar, click "Pages".
4. **Choose Branch:** Under "Deploy from a branch," select your `main` branch and click "Save".
5. **Wait:** It takes a few minutes (sometimes longer) for the site to become live at `https://your-username.github.io/rebellion-recipes/`.

**Troubleshooting:**
- Double-check `index.html` is in the root.
- Ensure the correct branch (`main`) is selected.
- If it doesn't appear after an hour, try toggling the branch setting (save to 'none', then re-save to 'main').

**Remember:** This is about learning. Don't compare your work to advanced examples. Focus on meeting the requirements and building your skills. If you're stuck, ask for help in the Rebel Alliance channels!
</div>
