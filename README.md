# Suma Solutions Website

4-page Next.js site (Home, Services & Pricing, How It Works, Consultation)
built in the Suma Solutions brand palette: slate blue-gray, cream, and deep plum.

## Run it locally (optional)

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Editing text without coding

You don't need to run anything locally to change wording:

1. Open the file for the page you want to edit on GitHub.com:
   - Home → `app/page.tsx`
   - Services & Pricing → `app/services/page.tsx`
   - How It Works → `app/how-it-works/page.tsx`
   - Consultation/Contact → `app/contact/page.tsx`
2. Click the pencil (edit) icon.
3. Change the text between quotation marks or between `>` and `<` tags —
   that's what shows on the live site.
4. Scroll down, click "Commit changes."
5. Vercel automatically rebuilds your live site within a minute or two.

## Before you launch

1. **Contact form:** Sign up free at https://formspree.io, create a form, and
   replace `YOUR_FORM_ID` in `app/contact/page.tsx` with your real form ID.
2. **Business info:** Update the email/phone placeholders in `app/layout.tsx`
   and `app/contact/page.tsx`.
3. **Colors:** Your brand palette lives in `tailwind.config.ts` under
   `theme.colors` (slate, cream, plum) — change hex values there if your
   brand colors shift.

## Deploy

1. Push this folder to a GitHub repo (or upload via GitHub's web uploader).
2. Go to https://vercel.com, sign in with GitHub, and import the repo.
3. Vercel auto-detects Next.js and deploys.
4. Add your custom domain (sumasolutionstx.com) under Settings > Domains,
   then update the DNS records at your domain registrar.
