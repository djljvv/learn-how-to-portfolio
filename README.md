# learn-how-to-portfolio

A working portfolio that explains its own construction. Explore the finished page, try its interactions, and follow the code back to the HTML, CSS, and JavaScript that produce them.

The site includes a 12-step build walkthrough, three language dictionaries with 71 entries, and comments in the source. Everything uses plain HTML, CSS, and JavaScript, with no framework, package installation, or build command.

## Open the site

1. Download or clone this repository, keeping the files together.
2. Open [index.html](index.html) in a browser.
3. Select **Build guide** for the walkthrough, or expand a **Meet the code behind the page** box and select **click here to learn more** for its dictionary.

To experiment, open the folder in a text editor, save a change, and reload the browser. Browser developer tools let you inspect elements, adjust styles temporarily, and check the console for JavaScript errors. Changes made only in developer tools are not saved to the source files.

## Choose a learning path

| Page | What it teaches |
| --- | --- |
| [Portfolio](index.html) | The finished design, category filters, click counter, learning-notes switch, expandable lessons, and email link. |
| [Build guide](tutorial.html) | The sequence of building the site, with code excerpts, explanations, and expected results. |
| [HTML dictionary](html-glossary.html) | Document structure, elements, attributes, accessible labels, and navigation. |
| [CSS dictionary](css-glossary.html) | Selectors, theme variables, spacing, typography, layout, illustrations, and responsive behavior. |
| [JavaScript dictionary](javascript-glossary.html) | DOM queries, events, state, filtering, text updates, and checks for missing elements. |

The guide follows these 12 steps:

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

Use the guide alongside the finished source files. Its examples isolate individual features; they do not form a complete, cumulative set of instructions that reproduces the whole site just by pasting each snippet in order. Some layout rules, illustration markup, and JavaScript setup are explained in prose or left to the full source.

For a beginner, the most reliable approach is to run this repository first, follow one step at a time, and modify the corresponding feature in the working site. This gives you a finished example to compare against while learning how to make your own portfolio. Rebuilding from an empty folder requires consulting the full implementation to fill those gaps.

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

To publish, serve all five HTML files together with `styles.css` and `script.js` on a static host, preserving their relative paths. No application server or database is required.
