# Memory Card

A lightweight flashcard web app for studying. Add your own question/answer pairs, flip cards to reveal answers, and step through your deck. Built with vanilla HTML, CSS, and JavaScript — no build step, no framework.

## Features

- Add your own question/answer cards
- Click a card to flip and reveal the answer
- Previous / next navigation with a position counter
- Cards persist in `localStorage` between sessions
- One-click "clear all" to reset the deck
- Responsive layout from mobile (~320px) up to desktop
- Keyboard friendly: `Esc` closes the add-card panel, focusable controls
- Respects `prefers-reduced-motion`

## Getting started

No install or build needed. Just open the file:

```bash
# from the project folder
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

Or serve it locally if you'd rather use `http://` than `file://`:

```bash
npx serve .
# then visit http://localhost:3000
```

## Usage

| Action            | How                                                     |
| ----------------- | ------------------------------------------------------- |
| Add a card        | Click **+ Add Question**, fill in question + answer     |
| Flip a card       | Click the active card                                   |
| Move forward      | Click the **›** button                                  |
| Move backward     | Click the **‹** button                                  |
| Close add panel   | Click **×** or press `Esc`                              |
| Clear all cards   | Click the trash button (bottom-left). This is permanent |

All cards are saved to your browser's `localStorage` under the key `cards`. They live only on the device you created them on.

## Project structure

```
.
├── index.html   # Markup, font + icon links
├── style.css    # Design tokens, layout, card animation, responsive rules
├── script.js    # Card creation, flip, navigation, localStorage I/O
└── README.md
```

## Tech

- Vanilla JavaScript (no dependencies bundled)
- [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- [Font Awesome](https://fontawesome.com/) via CDN kit for icons

## Browser support

Works in any modern evergreen browser (Chrome, Edge, Firefox, Safari). Uses `backdrop-filter`, CSS custom properties, and `clamp()`, which all have wide support as of 2024+.

## License

MIT