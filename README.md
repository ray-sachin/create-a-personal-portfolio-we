# Personal Portfolio Website (with in-browser Editor)

A modern, single-file personal portfolio website with built‑in editing tools. All content can be updated directly in the browser and is saved to localStorage. You can export/import your data as JSON or reset to defaults at any time.

No build step required. Just open index.html.

Features
- Clean, responsive layout with sections for Hero, About, Skills, Projects, Experience, Education, and Contact
- Proper editing options via a slide-in editor panel
  - Update profile, socials, avatar (upload file or use image URL)
  - Edit About text
  - Manage lists: add, remove, reorder Skills, Projects, Experience, Education
  - Upload cover images for projects (file or URL)
  - Customize theme (light/dark/auto, colors, font scale)
  - Configure primary contact link and résumé URL
- Auto-save to localStorage
- Export/import JSON data
- Print-friendly styling for easy PDF export

Quick start
1. Download this repository or copy index.html and open it in your browser.
2. Click Edit site or press E to open the editor.
3. Update your details. Changes save automatically.
4. Export your data as JSON to back it up or move to another device.
5. If you have a hosted PDF resume, add its URL in Edit site → Links & Actions to enable the Download résumé buttons.

Editing options overview
- Profile
  - Name, title, location
  - Email, phone, website
  - Socials: GitHub, LinkedIn, Twitter
  - Avatar: upload an image or use a direct image URL
- About
  - Write your bio; paragraphs and line-breaks are preserved
- Skills
  - Add skill, set level via slider, reorder (↑/↓), and delete
- Projects
  - Title, description, tags (comma separated)
  - Live link and repository link
  - Cover image via file upload or URL
  - Reorder and delete
- Experience
  - Role, company, period, summary, achievements (one per line)
  - Reorder and delete
- Education
  - Degree, school, period
  - Reorder and delete
- Theme
  - Mode: Light, Dark, or Auto (sync with OS)
  - Primary and accent colors
  - Global font size scaling
- Links & Actions
  - Primary contact link (leave blank to use your email)
  - Résumé URL (PDF)

Data persistence
- Your edits are saved to your browser’s localStorage under the key portfolioData.v1.
- Use the Export JSON button in the editor footer to download a backup.
- To restore or migrate, click Import JSON and select your backup file.
- Reset returns the site to its default template content.

Keyboard shortcuts
- E: Toggle editor
- Esc: Close editor

Print/saving to PDF
- If you don’t have a résumé URL configured, the “Print / Save PDF” button will open the browser’s print dialog for this page.
- Use your browser’s “Save as PDF” to generate a quick resume from the on-page content (print styles included).

Notes
- All functionality is implemented in a single HTML file for portability. You can split CSS/JS into separate files if you prefer.
- File uploads (avatar and project images) are stored as base64 data URLs inside localStorage; large images can increase storage usage. Prefer optimized images or hosted URLs where possible.

License
- MIT — Feel free to use, modify, and share.