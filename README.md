# PageGrab

A browser extension for Chrome and Firefox that takes full-page, visible-area, region and
element screenshots, then opens them in a built-in editor where you can crop, blur, annotate and
export.

I built PageGrab for my own use. It started as a fork of the open-source
[OpenScreenShot](https://github.com/PGHQdev/OpenScreenShot) project by PGHQdev, and I revised it
to fit how I actually work: a quieter editor focused on crop, blur and save, a full-page capture
you can stop partway through, right-click copy of the whole screenshot, and its own name and logo.

> **Not affiliated.** PageGrab is an independent fork. It is not affiliated with, sponsored by or
> endorsed by PGHQdev or the OpenScreenShot project. "OpenScreenShot" is used here only to credit
> where the code came from.

## Features

- **Full page**: scrolls and stitches the whole page. Stop at any point and keep what's captured.
- **Visible area**: whatever is on screen right now.
- **Region**: drag a box around the part you want.
- **Element**: pick a single element on the page.
- **Editor**: crop, blur, annotate, then save as PNG, JPEG or PDF, or copy to the clipboard.
- **Screen recording** (Chrome only; the Firefox build is screenshots only).
- **Keyboard shortcuts**, which you can change in your browser's extension shortcut settings:

  | Action            | Windows / Linux | macOS         |
  | ----------------- | --------------- | ------------- |
  | Full-page capture | `Ctrl+Shift+S`  | `Cmd+Shift+S` |
  | Visible area      | `Alt+Shift+V`   | `Alt+Shift+V` |
  | Region            | `Ctrl+Shift+E`  | `Cmd+Shift+E` |
  | Stop recording    | `Alt+Shift+X`   | `Alt+Shift+X` |

## Privacy

Everything happens in your browser. PageGrab has no account, no analytics and no server.
Screenshots and recordings are not uploaded anywhere; they stay on your machine until you save,
copy or delete them.

## Install from source

PageGrab is not published on the Chrome Web Store or Firefox Add-ons. To use it, build it
yourself.

Requirements: Node.js 22.19+ and pnpm 10.33.0.

```bash
pnpm install --frozen-lockfile
pnpm run icons
```

|              | Chrome                                                                   | Firefox                                                                                         |
| ------------ | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| Develop      | `pnpm run dev`                                                           | `pnpm run dev:firefox`                                                                          |
| Build        | `pnpm run build`                                                         | `pnpm run build:firefox`                                                                        |
| Package      | `pnpm run package`                                                       | `pnpm run package:firefox`                                                                      |
| Load locally | `chrome://extensions` → **Developer mode** → **Load unpacked** → `dist/` | `about:debugging` → **This Firefox** → **Load Temporary Add-on** → `dist-firefox/manifest.json` |

## Development

TypeScript (strict) and Preact, bundled by Vite with
[@crxjs/vite-plugin](https://github.com/crxjs/crxjs).

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm format:check
```

Source layout:

| Folder            | What's in it                                          |
| ----------------- | ----------------------------------------------------- |
| `src/background/` | Service worker: capture, stitching, shortcuts, menus  |
| `src/content/`    | Scripts injected into the page (scrolling, selection) |
| `src/popup/`      | Toolbar popup and settings page                       |
| `src/editor/`     | Screenshot editor and export                          |
| `src/recorder/`   | Recording editor and video export (Chrome only)       |
| `src/shared/`     | Shared types, storage, messaging and design tokens    |
| `tests/`          | Unit tests (Vitest) and browser smoke tests           |

## Need something built for you?

PageGrab is what I do for myself: take an existing tool and shape it around what I actually need.
If you want the same for your own workflow, whether that's a custom browser extension, a web app or
a change to an open-source tool you already use, email me at
[contact@abrahamdan.com](mailto:contact@abrahamdan.com).

Please don't use that address for bug reports on this repo; open an
[issue](https://github.com/abrahamdanalvarez/PageGrab/issues) instead. This is a personal project,
so there's no guarantee of support or a response time.

## License and credits

PageGrab is released under the [MIT License](./LICENSE). As MIT requires, the LICENSE file keeps
the original copyright notice for OpenScreenShot (© 2026 PGHQdev) alongside the notice for my
modifications. If you copy or redistribute this code, keep both notices.

Bundled third-party assets keep their own licenses, included in
[public/licenses/](./public/licenses/):

- **Roboto** font: SIL Open Font License 1.1
- **Material Icons**: Apache License 2.0

The software is provided "as is", without warranty of any kind. See [LICENSE](./LICENSE) for the
full terms.
