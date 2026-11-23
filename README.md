# Screenshot extension (personal fork)

A personal fork of [OpenScreenShot](https://github.com/PGHQdev/OpenScreenShot) by PGHQdev,
used under the MIT License. It's a Chrome and Firefox extension for full-page, region,
element and visible-area screenshots, with an annotation editor, PDF export and screen
recording. This fork is not affiliated with or endorsed by the original project.

## Development

TypeScript (strict) and Preact, bundled by Vite with
[@crxjs/vite-plugin](https://github.com/crxjs/crxjs). It needs Node.js 22.19+ and pnpm 10.33.0.

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

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm format:check
```

## License

MIT. See [LICENSE](./LICENSE), which keeps the original copyright notice as the license requires.
Bundled fonts and icons have their own licenses in [public/licenses/](./public/licenses/).
