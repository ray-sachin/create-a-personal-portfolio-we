# Personal Portfolio Website

A clean, accessible, and responsive personal portfolio website built with semantic HTML, modern CSS, and a sprinkle of JavaScript. No frameworks required.

## Features
- Responsive, mobile‑first layout
- Light/dark/system theme with persistent preference
- Accessible navigation with keyboard/focus styles and skip link
- Projects grid, about, skills, experience, and contact sections
- Contact form using a static form provider (replace with your own)
- SEO and social meta tags + JSON‑LD structured data
- No external dependencies; easy to deploy

## Live Preview
Open index.html directly in a browser, or serve it via a simple HTTP server.

- Python: `python3 -m http.server 8080`
- Node: `npx serve` or `npx http-server`

Then visit http://localhost:8080.

## Project Structure
- index.html — main HTML document
- style.css — styles for layout, theming, and responsiveness
- script.js — theme toggle, mobile menu, and small enhancements
- README.md — this file

## Customize
1. Identity
   - Update the title, meta description, and Open Graph tags in index.html
   - Replace "Your Name", email, phone, and location throughout the file
   - Update the favicon data URI or replace with your own icon

2. Socials
   - Update the GitHub and LinkedIn URLs in the hero section
   - Add or remove icons as needed

3. Projects
   - In the “Projects” section, modify each card’s title, description, tags, and links
   - The SVG thumbnails are placeholders you can keep or replace with images/screenshots

4. Skills and Experience
   - Edit lists in the Skills and Experience sections to reflect your background

5. Contact Form
   - Replace the `action` attribute on the form with your form endpoint (e.g., Formspree, Getform, Basin)
   - Or remove the form and use a direct `mailto:` link
   - If using Formspree, create a form and replace `https://formspree.io/f/your-form-id` with your form URL

6. Theming
   - The theme cycles through System → Dark → Light via the toggle
   - Colors are defined with CSS variables at the top of style.css
   - Force a theme by setting `data-theme="dark"` or `data-theme="light"` on `<html>`

7. Analytics (optional)
   - Add your analytics script (e.g., Plausible) near the end of `index.html`

## Accessibility Notes
- Keyboard users can use the “Skip to main content” link that appears on focus
- Focus outlines are preserved and visible
- Color contrast is tuned for both light and dark modes
- Semantic HTML tags and labels are used across the site

## Performance Tips
- Replace placeholder SVGs with optimized images (use `loading="lazy"` for non-critical images)
- Minify CSS/JS for production
- Use a CDN or HTTP/2 server push for critical assets if needed

## Deployment
- GitHub Pages: push to `main`, then enable Pages in repo settings
- Netlify: drag and drop the folder or connect the repository
- Vercel: import the repository and deploy with default settings

## License
MIT — feel free to use and modify for your own portfolio.