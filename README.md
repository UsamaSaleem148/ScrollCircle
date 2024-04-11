# Scroll Circle

This project implements a scrolling circle effect using HTML, CSS, and JavaScript. The circle elements expand and contract based on the user's scrolling behavior, creating a visually dynamic experience.

## Functionality

- The main circle element contains smaller circle elements arranged around its circumference.
- As the user scrolls up or down, the circle elements expand or contract accordingly.
- Each circle element represents a token with associated information displayed inside.
- The expansion and contraction of the circle elements are animated for smooth visual transitions.
- Clicking on the "Learn More" button inside each circle element can trigger further actions or information display.

## Usage

# HTML Structure
The HTML file `(index.html)` contains the structure of the scrolling circle:

- It consists of a main circle element (main-circle) containing smaller circle elements (circle-data).
- Each smaller circle element represents a token with associated information displayed inside.

# JavaScript Functionality
The JavaScript file `(scroll.js)` handles the scrolling behavior:

- It adjusts the size of the circle elements based on the user's scrolling direction.
- The scrollEnded function uses debounce to optimize performance.
- Circle elements expand or contract based on scroll direction, creating a dynamic effect.

# CSS Styling
The CSS file `(style.css)` provides styling for the scrolling circle:

- It sets the initial size and appearance of the circle elements.
- Additional styles define text alignment, colors, and button appearance.

# Dependencies
- jQuery
- jQuery Throttle / Debounce

# Demo

https://github.com/UsamaSaleem148/ScrollCircle/assets/28651129/f5c6feed-9af8-49b5-832b-6ff70aa86dda
