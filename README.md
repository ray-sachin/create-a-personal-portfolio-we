# Personal Portfolio — Editable Template

This is a single-file personal portfolio site you can edit right in the browser. It keeps the original layout and placeholders, but adds proper editing options to change text, links, images, skills, and theme color. Your edits are saved to your browser (localStorage), and you can export or import your content as JSON.

## Quick start
- Open index.html in any modern browser.
- Click the purple Edit button (bottom-right) to enter edit mode.
- Click any highlighted content to edit it:
  - Text: type directly.
  - Links (e.g., Resume, GitHub): click to change URL.
  - Email: click to change your email; all email links update automatically.
  - Images (avatar or project covers): click to upload an image or paste an image URL.
  - Skills: use + Add skill to add chips; click the × on a chip to remove; type to rename.
- Use the top Edit bar to Save, Export JSON, Import JSON, Reset, or Exit edit mode.
- Changes persist automatically when you Save.

## Files
- index.html — Full site, including styles and scripts.
- README.md — This guide.

## Editing guide

Elements you can edit inline are outlined in edit mode:
- Name, role, tagline, bio
- Resume link URL
- Email address
- About text and location
- Social links (GitHub, LinkedIn, Twitter)
- Skills list (add/remove/rename)
- Project cards:
  - Cover image
  - Title, description, tags
  - Live and Code links

Theme:
- The theme color picker in the Edit bar updates the site’s primary color.
- Saved with your data and applied on load.

Images:
- Click an image in edit mode to choose between:
  - Upload a file (saved as a data URL so it persists in your browser/export), or
  - Enter an image URL.

Links:
- Click a link in edit mode to set its href. For email links, click and enter your email; mailto links update accordingly.

Skills:
- Click + Add skill to add a new chip.
- In edit mode, each chip has an × to remove it.
- You can type directly on a chip to rename it.

Save and portability:
- Save: Stores your content in localStorage on this device/browser.
- Export JSON: Downloads a portfolio-data.json you can keep in version control or send to another device.
- Import JSON: Loads content from a previously exported JSON file.
- Reset: Restores the original template defaults and clears saved data.

## Deployment
Because it’s a single HTML file:
- GitHub Pages: commit and push; set the repository to publish from the main branch. Visit https://<user>.github.io/<repo>/index.html
- Netlify/Vercel: drag-and-drop deploy the index.html.
- Static hosting: upload index.html to any static host.

## Notes
- No external dependencies; works offline.
- Tested on modern Chromium, Firefox, and Safari browsers.
- All content is stored locally until you export JSON. If you clear site data, your local edits are removed.
- Optional: after exporting JSON, you can bake your content into the HTML by replacing the defaultData object or by loading the JSON dynamically.

## License
You’re free to use and modify this template for personal and commercial portfolios. Attribution appreciated but not required.