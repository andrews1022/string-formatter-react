# String Formatter

A simple string formatting app I came up with to practice building with React, specifically using class based components instead of functional ones w/ hooks.

## Steps

### Basics

- [x] Setup basic file/folders structure <br />
- [x] Setup remote repo on GitHub <br />
- [x] Setup continuous deployment on Netlify <br />
- [x] Add basic styles <br />

### Formatting

- [x] Set output textarea value same as input textarea value <br />
- [x] Format text to lowercase <br />
- [x] Format text to UPPERCASE <br />
- [x] Format text to web-ready <br />
- [x] Format text to PeOPleFucKInGDyINg <br />

### State

- [x] Keep track of how many checkboxes are checked (allow only 1 to be checked at a time) <br />
- [x] Add it to state array (remove/clear when unclicked) <br />

### Mirroring Text

- [x] On click, get input value (if any, display message if empty) <br />
- [x] Check which checkbox is checked (if any, display message if none are checked) <br />
- [x] Apply formatting logic based on checked checkbox (check which element is in checked state array) <br />
- [x] Display in output box <br />

### Output Textarea

- [x] Add logic to copy output textarea to clipboard <br />
- [x] Set button text to copied for a few seconds once clicked <br />

### Handling Errors

- [x] Add useState call for error message (and setting it) <br />
- [x] Display error message if not text entered, and/or no textbox selected <br />

## Things I Learned

- Using the useState & useRef hooks to set textarea values
- Using useState to limit the number of checkboxes checked, as well as dynamically saving the checked box for future reference
