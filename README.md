# React Portfolio (Vite)

Simple, responsive portfolio scaffold built with React + Vite and Framer Motion animations.

Quick start (PowerShell):

```powershell
npm install
npm run dev
```

Open the address printed by Vite (usually http://localhost:5173).

Customization:
- Replace the name, bio, and projects in `src/components` with your own content.
 - Replace the name, bio, and projects in `src/components` with your own content.
 - To add your photograph to the About page, place your image file at `public/profile.jpg` (JPG or PNG). The site will automatically use that image when present; otherwise it falls back to a generated SVG avatar.
 - To add your photograph to the About page, place your image file at one of these locations (in order of priority):
	 1. `public/photos/profile.jpg` (recommended)
	 2. `public/profile.jpg`
	The site will automatically use the first file it finds; otherwise it falls back to a generated SVG avatar.

	Example (PowerShell) to copy a file into the recommended folder:

	```powershell
	mkdir -Force public\photos
	copy "C:\path\to\your\image.jpg" .\public\photos\profile.jpg
	npm run dev
	```
- Configure the contact form: replace the placeholder `FORM_ENDPOINT` in `src/components/Contact.jsx` with your Formspree endpoint (or another form service) to receive messages.

Accessibility & performance:
- Includes a skip link, focus outlines, and responsive layout.
- Uses Framer Motion for lightweight entrance/hover animations.

Deployment (Netlify):
1. Commit this repo to Git and connect to Netlify.
2. Set build command: `npm run build` and publish directory: `dist`.
3. (Optional) Add your Formspree form endpoint as an environment variable or edit `Contact.jsx`.

Notes:
- Contact form uses a placeholder endpoint; replace it to enable real submissions.
- If you want, I can also add a GitHub Action to build and deploy automatically.
