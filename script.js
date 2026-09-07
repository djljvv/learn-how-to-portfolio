/* JavaScript is the behavior layer. This script uses browser APIs only—no libraries.
   index.html loads it with defer, so HTML parsing finishes before we query elements.
   Each feature checks its required elements so deleting one demo cannot break another.
   The reading pages use native HTML navigation and do not need this script.
   const declares a binding we won't reassign; let declares one that can change. */
'use strict';

// 1. LEARNING NOTES: querySelector returns the first element matching a CSS selector.
const notesToggle = document.querySelector('.notes-toggle');
// querySelector returns null if markup is absent. Check the parent before querying inside it.
const toggleState = notesToggle ? notesToggle.querySelector('.toggle-state') : null;

// Initialize only when this feature's required markup exists.
if (notesToggle && toggleState) {
  // Reveal the control now that its behavior is available. Without JS, notes remain visible.
  notesToggle.hidden = false;
  notesToggle.addEventListener('click', () => {
    // classList.toggle adds a missing class or removes an existing one.
    // It returns true when the class is now present. CSS hides notes when notes-off is present.
    const notesAreOff = document.body.classList.toggle('notes-off');
    // aria-pressed communicates button state to assistive technology; ! reverses a boolean.
    notesToggle.setAttribute('aria-pressed', String(!notesAreOff));
    toggleState.textContent = notesAreOff ? 'OFF' : 'ON';
  });
}

// 2. PROJECT FILTERS: querySelectorAll gives us all matches, not just the first.
const filterBar = document.querySelector('.filter-bar');
const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.project-card');
const filterStatus = document.querySelector('.filter-status');
// Initialize only when this feature's required markup exists.
if (filterBar && filterStatus) {
  filterBar.hidden = false;

  // forEach runs a function for each item. Each button gets its own click listener.
  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      // dataset exposes HTML data-* attributes: data-filter becomes dataset.filter.
      const selectedCategory = filter.dataset.filter;
      let visibleCount = 0;

      cards.forEach((card) => {
        // || means OR; === compares exact values. "all" matches every category.
        const matches = selectedCategory === 'all' || card.dataset.category === selectedCategory;
        // hidden removes a card from layout AND from the accessibility tree.
        card.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      // Only the selected filter is pressed. Focus stays on the button you activated.
      filters.forEach((button) => {
        button.setAttribute('aria-pressed', String(button === filter));
      });

      // textContent writes text safely, without interpreting it as HTML.
      // Backticks create a template literal; ${...} inserts an expression into it.
      filterStatus.textContent = selectedCategory === 'all'
        ? `Showing all ${visibleCount} examples.`
        : `Showing ${visibleCount} ${filter.textContent.trim()} example${visibleCount === 1 ? '' : 's'}.`;
    });
  });
}

// 3. COUNTER: this is the same small example displayed in the JavaScript lesson.
const button = document.querySelector('#counter-button');
const output = document.querySelector('#counter-output');
// Initialize only when this feature's required markup exists.
if (button && output) {
  let count = 0;
  button.hidden = false;

  button.addEventListener('click', () => {
    count += 1; // Shorthand for count = count + 1.
    output.textContent = `Count: ${count}`;
  });
}

// There are deliberately no listeners for the navigation, email link, or lesson accordions.
// HTML already implements those behaviors through anchors and details/summary.
// This script makes no network requests and uses no persistent storage. Reloading resets
// interactive state; browser Back may restore an earlier document from its page cache.
// Links to tutorial.html and the dictionaries load documents through native browser navigation.
