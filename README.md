# Driveway Mechanics NL

Static, mobile-first website for a mobile mechanic business.

This version is optimized for:
- easy freelancer handoff
- low maintenance
- static hosting on Cloudflare Pages, Netlify, Vercel, or similar

## Project Structure

- `client` - React + Vite + Tailwind frontend
- `client/src/site-data.js` - editable business content, services, FAQ, testimonials, and contact details
- `client/public` - static images, favicon, and other public assets
- `server` - optional Express backend that is currently not required for the static website flow

## Local Development

```bash
cd client
npm install
npm run dev
```

The site runs on `http://localhost:5173`.

## Production Build

```bash
cd client
npm run build
```

Upload the contents of `client/dist` to any static host, or connect the `client` folder directly in Cloudflare Pages.

## Editing Content

Update the business details, services, pricing, phone number, testimonials, FAQ, and about copy in:

```bash
client/src/site-data.js
```

Then rebuild and redeploy.

## Contact Form

The contact form supports two modes:

1. No extra setup  
   The form opens the visitor's default email app using the configured business email.

2. Hosted form service  
   Set `VITE_FORM_ENDPOINT` to a hosted form endpoint such as Formspree or Basin, and the form will submit directly there with no custom backend.

Example `.env` inside `client`:

```bash
VITE_FORM_ENDPOINT=https://formspree.io/f/your-form-id
```

## Optional Backend

The `server` folder contains a small Express API for storing inquiries and site data in JSON. The frontend does not currently depend on it, so the easiest deployment path remains static hosting for `client`.

## Hosting Recommendation

For the easiest long-term setup:
- Host on Cloudflare Pages
- Keep content in `client/src/site-data.js`
- Keep marketing images in `client/public`
- Use a hosted form service only if the client wants true form submissions without email-app fallback
