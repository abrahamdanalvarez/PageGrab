# Editor top bar: quieter controls (design)

## Why

The usual path after a capture is: crop or blur, then save as an image or a PDF.
The top bar gave ~13 controls equal weight and the Express banner took a full row,
so that path was not obvious and the screenshot had less room.

## Approaches

- **A. Quieter top bar (picked).** Keep Save image and PDF as buttons, move the rest
  into a More menu, shrink the Express banner to a chip, put Crop and Blur first on
  the rail. Costs one extra click for Copy.
- B. One "Save image ▾" split button with PNG/JPG/PDF/Copy. Tidiest, but PDF becomes
  two clicks, and the user saves PDFs often.

## Design

- Top bar right side: Zoom, Frame (quiet), More ▾, PDF, Save image (primary).
- More menu (same keyboard pattern as the zoom menu): Copy (⌘C), History, Pin
  (when supported), Shortcuts (?), Settings. After Copy the More button briefly
  reads "Copied" / "Copy failed" so the result is still visible.
- Express banner becomes a "⚡ Express" toggle chip beside the capture-mode label;
  its tooltip carries the old hint text.
- Default rail order: Crop, Blur | Select | Arrow, Shape, Text, Pen. A user who
  reordered the rail keeps their order.

## Calls made by the builder

- Frame stays in the bar: its panel is anchored to its own trigger and returns
  focus there, which a menu item cannot provide.
- Undo / Redo / Delete stay where they are.

## Non-goals

No change to the export dialog, tools, shortcuts or settings page.
