# Ankit Caterers & Event Management — Website

Static marketing website for **Ankit Caterers & Event Management**. Built with [Astro](https://astro.build) and hosted on [Firebase Hosting](https://firebase.google.com/docs/hosting).

This guide is written for newcomers. You do not need to be a developer — most content changes are simple text edits in a few files.

---

## What you need installed

1. **Node.js** (version 22 or newer)  
   Download: https://nodejs.org  
   Check it works:
   ```bash
   node -v
   npm -v
   ```

2. **A code editor** (recommended: [VS Code](https://code.visualstudio.com) or [Cursor](https://cursor.com))

3. **Firebase account** (free tier is enough)  
   Sign up: https://console.firebase.google.com

---

## First-time project setup

Open a terminal in this project folder and run:

```bash
npm install
```

Start the local preview site:

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:4321`).  
The page reloads automatically when you save a file.

To stop the server: press `Ctrl + C` in the terminal.

---

## Changing website content

Most text and business info lives in **`src/data/`**. Open these files in your editor and change the text inside quotes `'...'`.

### Business details (phone, email, address, WhatsApp)

**File:** `src/data/site.ts`

| Field | What it controls |
|-------|------------------|
| `name` | Full business name (title bar, footer) |
| `phone` | Phone number shown on site (with spaces) |
| `phoneRaw` | Phone for call/WhatsApp links — **digits only**, e.g. `+918369555816` |
| `email` | Contact email |
| `whatsappMessage` | Default WhatsApp pre-filled message |
| `businessHours` | Opening hours |
| `address` / `addressLines` | Full address (footer & map section) |
| `serviceArea` | “Serving Thane, Mumbai…” line |
| `googleMapsUrl` | “Open in Google Maps” link |
| `mapLocations` | Map pin (lat, lng, label) on Contact page |

> **Important:** If you change the phone number, update **both** `phone` and `phoneRaw`.

---

### Home page (hero, stats, intro)

**File:** `src/data/home.ts`

- Hero headline, subheadline, eyebrow text
- Stats (e.g. “2,500+ Events”)
- “Who We Are” intro paragraphs
- Explore cards at the bottom of the home page

---

### Services page

**File:** `src/data/services.ts`

- Cuisines, packages, event types, category overview

---

### Menu page

**File:** `src/data/menu.ts`

- Menu sections and dish names/descriptions

---

### Gallery page

**File:** `src/data/gallery.ts`

- Gallery sections (Weddings, Birthdays, etc.) and image captions

---

### Navigation menu

**File:** `src/data/nav.ts`

- Top menu link names and URLs (usually leave URLs as they are)

---

### Images

**Your photos:** put files in `src/assets/`  
**Image references:** `src/data/images.ts`

Common files:

| File | Used for |
|------|----------|
| `logo.png` | Header & footer logo |
| `icon.png` | Browser tab icon (favicon) |
| `buffet-stall.jpg`, `food-stall.jpg`, etc. | Gallery & page photos |

To use a new photo:

1. Copy the image into `src/assets/` (use lowercase names, no spaces — e.g. `wedding-hall.jpg`)
2. Open `src/data/images.ts`
3. Add an import at the top and reference it in the `images` object (copy an existing line as a template)
4. Use that name in `home.ts`, `gallery.ts`, or `services.ts`

---

### After editing content

1. Save the file
2. Check locally: `npm run dev`
3. When happy, deploy (see below)

---

## Project structure (quick reference)

```
ankit-caterers/
├── src/
│   ├── data/          ← Edit text & content here (main place)
│   ├── assets/        ← Your images (logo, photos, icon)
│   ├── pages/         ← One file per page (rarely need editing)
│   ├── components/    ← Layout pieces (navbar, footer, etc.)
│   └── layouts/       ← Page wrapper (includes favicon setup)
├── public/            ← Static files (robots.txt)
├── dist/              ← Built site (auto-generated — do not edit)
├── firebase.json      ← Firebase Hosting settings
├── .firebaserc        ← Your Firebase project ID
└── package.json       ← Scripts & dependencies
```

---

## Firebase Hosting — first-time setup

### 1. Create a Firebase project

1. Go to https://console.firebase.google.com  
2. Click **Add project**  
3. Follow the steps (Google Analytics optional)

### 2. Enable Hosting

1. In your Firebase project, open **Build → Hosting**  
2. Click **Get started** and finish the wizard (you can skip deploy for now — we deploy from the terminal)

### 3. Link this folder to your Firebase project

Log in to Firebase (opens browser):

```bash
npm run firebase:login
```

Connect to your project:

```bash
npm run firebase:use
```

Select your project from the list. This updates `.firebaserc`.

Alternatively, edit `.firebaserc` manually:

```json
{
  "projects": {
    "default": "your-firebase-project-id"
  }
}
```

The project ID is shown in Firebase Console → Project settings.

### 4. Set your live website URL

Copy the example env file:

```bash
cp .env.example .env
```

Edit `.env` and set `SITE_URL` to your real URL, for example:

```
SITE_URL=https://ankitcaterers.in
```

Also update the sitemap line in `public/robots.txt` to the same URL.

---

## Deploy to Firebase (publish the site)

From the project folder:

```bash
npm run deploy
```

This will:

1. Build the site (`npm run build` → output in `dist/`)
2. Upload to Firebase Hosting

When finished, the terminal shows your live URL (e.g. `https://your-project.web.app`).

### Preview before going live (optional)

Deploy to a temporary preview URL (expires in 7 days):

```bash
npm run deploy:preview
```

---

## Useful commands

| Command | What it does |
|---------|----------------|
| `npm run dev` | Run site locally for testing |
| `npm run build` | Build production files into `dist/` |
| `npm run preview` | Preview the built site locally |
| `npm run deploy` | Build + publish to Firebase |
| `npm run deploy:preview` | Build + temporary preview URL |
| `npm run firebase:login` | Log in to Firebase |
| `npm run firebase:use` | Switch Firebase project |

---

## Common issues

### “Firebase project not found” or permission error

- Run `npm run firebase:login` again  
- Run `npm run firebase:use` and pick the correct project  
- Check `.firebaserc` matches your Firebase Console project ID

### Phone / WhatsApp link not working

- In `src/data/site.ts`, `phoneRaw` must be digits only: `+918369555816` (no spaces)

### Changes not visible on live site

- Run `npm run deploy` again after saving edits  
- Hard refresh the browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### `npm install` fails

- Install Node.js 22+: https://nodejs.org  
- Delete `node_modules` and run `npm install` again

### Map location wrong

- Edit `mapLocations` in `src/data/site.ts` (latitude, longitude, label)  
- Update `googleMapsUrl` with the correct Google Maps share link

---

## Custom domain (ankitcaterers.in)

Live domain: **https://ankitcaterers.in**

1. Firebase Console → **Hosting** → **Add custom domain**  
2. Add **both** domains if you use www:
   - `ankitcaterers.in` (apex)
   - `www.ankitcaterers.in` (www)
3. Set DNS exactly as Firebase shows (see SSL section below)  
4. Copy `.env.example` to `.env` with `SITE_URL=https://ankitcaterers.in`  
5. Run `npm run deploy`

---

## “Not secure” / SSL certificate warning

This is almost always a **Firebase SSL or DNS setup issue**, not a bug in the website code. All assets on the site load over HTTPS.

### Check which URL you are opening

| URL | Expected |
|-----|----------|
| `https://ankitcaterers.in` | Should be secure once SSL shows **Connected** in Firebase |
| `https://www.ankitcaterers.in` | Needs **separate** custom domain + DNS in Firebase |
| `http://ankitcaterers.in` | Should redirect to HTTPS automatically |

### Fix in Firebase Console

1. Open [Firebase Console](https://console.firebase.google.com) → project **ankitcaterers-c1a82** → **Hosting**  
2. Under **Custom domains**, check status for each domain:
   - **Connected** = SSL is ready  
   - **Pending** = wait up to 24 hours after DNS is correct  
   - **Needs setup** = DNS records are wrong or missing  
3. If `www.ankitcaterers.in` is missing, click **Add custom domain** and add it.

### Fix DNS at your domain registrar

**Apex domain (`ankitcaterers.in`):**

| Type | Host | Value |
|------|------|-------|
| A | `@` | `199.36.158.100` |
| TXT | `@` | `hosting-site=ankitcaterers` |

**WWW subdomain (`www.ankitcaterers.in`):**

Do **not** CNAME `www` to `ankitcaterers.in`. Use the CNAME Firebase gives you, usually:

| Type | Host | Value |
|------|------|-------|
| CNAME | `www` | `ankitcaterers.web.app` |

(Use the exact value shown in your Firebase Hosting custom domain wizard.)

Remove any old A/CNAME records that point elsewhere (GoDaddy parking page, old host, etc.).

### If using Cloudflare

- Set SSL/TLS mode to **Full** (not Flexible)  
- During first SSL setup, use **DNS only** (grey cloud) until Firebase shows **Connected**  
- Then you can turn the proxy back on

### After DNS is fixed

1. Wait up to **24 hours** for Firebase to issue the SSL certificate  
2. Redeploy: `npm run deploy`  
3. Test in an incognito/private window  
4. Always share **`https://ankitcaterers.in`** (without www) until www SSL is connected

### Still not secure after 24 hours?

- Verify DNS: https://toolbox.googleapps.com/apps/dig/  
- Contact Firebase Support from the Hosting page  
- Confirm `.env` has `SITE_URL=https://ankitcaterers.in` and rebuild/deploy

---

## Need help?

- Astro docs: https://docs.astro.build  
- Firebase Hosting docs: https://firebase.google.com/docs/hosting  

For content changes, start with **`src/data/site.ts`** and the other files in **`src/data/`** — that covers most day-to-day updates.
