# Personal Portfolio – Inline Editable

This is a single‑file personal portfolio website with a built‑in Edit Mode. You can update all placeholders (text, links, images, and projects) right in the browser and save your changes without any build tools or CMS.

Features:
- Toggle Edit Mode to make text directly editable
- Change link URLs with small "✏︎" buttons
- Replace images via file upload overlays
- Add and remove project cards
- Save to your browser (localStorage)
- Reset to defaults anytime

How it works:
- When you press Edit, elements marked as editable become contenteditable.
- Images show a Change Image control (only visible in Edit Mode).
- Project cards allow editing the title, description, link, image, plus removal.
- Press Save to persist all changes to localStorage under the key portfolioSite_v1.
- Press Reset to clear saved data and reload defaults.

Quick start:
1. Open index.html in a browser.
2. Click the “✏︎ Edit” button (bottom‑right).
3. Click any highlighted text to edit it.
4. Use "✏︎" buttons to set link URLs and "Change Image" to upload images.
5. Click “Save” to persist. Use “Reset” to remove all saved edits.

Notes and tips:
- Local storage size is limited by your browser. Very large images may fail to save. Prefer images under ~3MB each.
- To start in edit mode via URL, open index.html?edit=1
- You can edit:
  - Name, tagline, CTAs, About, Skills list, Footer name
  - Social links and contact email (text + href)
  - Hero/profile image
  - Project cards: title, description, link, image; add/remove
- Reset removes everything you saved and restores the original placeholders in the file.

Customization:
- Styling is all inside index.html. Adjust CSS variables near the top for quick theming:
  - --accent, --accent-2, --bg, etc.

Deploying:
- GitHub Pages:
  - Create a repo, commit index.html, enable Pages on main branch.
- Netlify/Vercel:
  - Drag‑and‑drop index.html.
- Any static host will work since this is a standalone file.

Backup/portability:
- Since data lives in your browser, use Save to persist locally.
- To migrate to another browser or machine, either:
  - Re‑apply edits there, or
  - After saving, open DevTools > Application > Local Storage and copy the value of portfolioSite_v1 into a note. On the new machine, paste the JSON back into localStorage under the same key.

Keyboard and accessibility:
- While in Edit Mode, clicking a link’s text won’t navigate (to prevent losing focus).
- Use the “✏︎” link buttons to edit URLs safely.
- All edits are reversible via Reset.

License:
- Free for personal and commercial use. No attribution required.