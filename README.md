# learn-how-to-portfolio

A working portfolio that explains its own construction. Explore the finished page, try its interactions, and follow the code back to the HTML, CSS, and JavaScript that produce them.

The site includes a preparation step followed by a 12-step build walkthrough, three runnable checkpoints, three language dictionaries with 73 entries, and comments in the source. Everything uses plain HTML, CSS, and JavaScript, with no framework, package installation, or build command.

## Open the site

1. Download or clone this repository, keeping the files together.
2. Open [index.html](index.html) in a browser.
3. Select **Build guide** for the walkthrough, or expand a **Meet the code behind the page** box and select **click here to learn more** for its dictionary.

To experiment, open the folder in a text editor, save a change, and reload the browser. Browser developer tools let you inspect elements, adjust styles temporarily, and check the console for JavaScript errors. Changes made only in developer tools are not saved to the source files.

## Choose a learning path

| Page | What it teaches |
| --- | --- |
| [Portfolio](index.html) | The finished design, category filters, click counter, learning-notes switch, expandable lessons, and email link. |
| [Build guide](tutorial.html) | Prerequisites, precise create/replace/append instructions, complete code, device formatting, and run-then-commit checkpoints. |
| [HTML dictionary](html-glossary.html) | Document structure, elements, attributes, accessible labels, and navigation. |
| [CSS dictionary](css-glossary.html) | Selectors, theme variables, spacing, typography, layout, illustrations, and responsive behavior. |
| [JavaScript dictionary](javascript-glossary.html) | DOM queries, events, state, filtering, text updates, and checks for missing elements. |

Begin with [Step 0: prerequisites](tutorial.html#prerequisites): a computer, browser, plain-text editor, a reference folder, and a separate `portfolio-practice` folder. Git is optional; the guide explains how to initialize a local repository and review and commit a working checkpoint. No previous language knowledge is assumed.

Then follow these 12 steps:

1. Create the project files.
2. Write the HTML document frame.
3. Organize the portfolio into meaningful sections.
4. Establish the shared visual theme.
5. Arrange layouts and CSS illustrations.
6. Build project cards with categories and lesson links.
7. Adapt the page for smaller screens and accessible interaction.
8. Add expandable code lessons.
9. Connect the click counter.
10. Implement filters and the learning-notes switch.
11. Link separate pages and understand browser navigation.
12. Finish the contact section and verify the site.

## What to expect from the guide

Follow each step's editor instructions in order. Short snippets explain a feature; expandable **Complete code to copy** boxes supply the full code for the specified operation. The instructions explicitly distinguish replacing a file, replacing one section, and appending CSS. They also identify features that will not work until a later step.

You build the homepage, styles, and interactions in your practice folder. In step 11, copy the four reading pages and the `checkpoints` folder from this repository to reuse their instructional content. You do not need to retype the tutorial or dictionary text.

The dictionaries begin with a syntax introduction and break down every example into individual parts, including tag boundaries, attribute values, CSS selectors and declarations, JavaScript strings, function calls, and operators. They are references, so their excerpts should not all be pasted into one file.

## Compare a working checkpoint

| Checkpoint | Expected state |
| --- | --- |
| [Step 3: structure](checkpoints/03-structure/index.html) | Unstyled document, hero and About content, and placeholders for later sections. |
| [Step 7: responsive layout](checkpoints/07-responsive/index.html) | Styled hero and gallery that adapt to viewport width; interactions are still hidden. Gallery-to-lesson destinations arrive in step 8. |
| [Step 10: interactions](checkpoints/10-interactions/index.html) | Working filters, notes switch, counter, and expandable lessons; the guide invitation, dictionary links, and final Contact content arrive later. |

Each checkpoint folder contains its own `index.html`, `styles.css`, and `script.js`. Open it in place or copy its three files into a separate comparison folder. Keep your own practice files for comparison. The guide tells you what to run, what success looks like, and what commit message to use after passing the checks. Without Git, save a separate folder copy at each milestone.

See [device formatting](tutorial.html#device-formatting) for the exact desktop, tablet, and phone rules, including checks at 1440, 1000, 760, 375, and 320 CSS pixels, landscape orientation, keyboard navigation, zoom, and reduced motion.

## How the files work together

- [index.html](index.html) contains the portfolio content and loads both the stylesheet and the script.
- [styles.css](styles.css) supplies the shared colors, typography, layouts, illustrations, focus styles, and responsive rules for all five pages.
- [script.js](script.js) powers the homepage's notes switch, project filters, and counter. Each feature checks for its required elements before initializing.
- The four learning pages are complete HTML documents. They share the stylesheet and work without JavaScript.

A link such as `tutorial.html` opens another document in the same tab. A fragment such as `#contact` targets a section in the current document; `index.html#lesson-html` combines both behaviors. The browser handles navigation and history. The matching design comes from the shared stylesheet; there is no JavaScript router or animated page transition.

The counter and controls store no persistent data. Reloading resets their state, although browser Back may restore a cached page. The contact link opens an email draft through the configured email app; it does not send a message or submit a form.

## Customize and check your work

Replace the example introduction, project descriptions, and `hello@example.com` address with your own content. Update the theme variables near the top of `styles.css` to change shared colors. When changing IDs, category values, or filenames, update their matching links and script selectors too.

After an edit:

- Try each category filter, restore all three cards, and click the counter.
- Toggle learning notes and expand or collapse each code lesson.
- Follow the guide and dictionary links, their return links, and browser Back.
- Check desktop and phone widths for readable text and unwanted horizontal scrolling.
- Navigate with Tab and Enter to check focus indicators and access to controls.
- Disable JavaScript and reload: reading content, links, and disclosures should still work; JavaScript-only controls should remain hidden.
- Check the developer console for errors.

To publish, serve all five top-level HTML files together with `styles.css`, `script.js`, and the complete `checkpoints` folder on a static host, preserving their relative paths. No application server or database is required.
