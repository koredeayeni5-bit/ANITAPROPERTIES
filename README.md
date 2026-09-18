# ANITA PROPERTIES | Abuja Luxury Real Estate & Investment Advisory

A modern, highly interactive, premium, and responsive real estate web application built for **Anita Properties**, showcasing verified land, duplexes, serviced terraces, commercial corporate plazas, and investment developments across Abuja's prime districts (Maitama, Asokoro, Guzape, Jabi, Katampe Extension, Wuse 2, Gwarinpa, Airport Road, and Karsana).

---

## Brand Aesthetic & Design System

- **Primary Canvas**: Clean off-white luxury background (`#FBFBFA`)
- **Typography & Accents**: Deep charcoal (`#111315`) headers with subtle muted warm champagne-gold highlights (`#C5A880`, `#9E773A`).
- **Typography**: Editorial luxury serif headings (`Playfair Display`) paired with high-legibility geometric sans (`Plus Jakarta Sans`).
- **User Experience**: Fast, uncluttered, touch-optimized (44px+ touch targets), responsive navigation drawer for mobile, zero horizontal overflow.

---

## Key Features

1. **Exact Requested Hero Experience**:
   - Headline: *"Find Your Next Property in Abuja"*
   - Supporting text: *"Discover quality land, homes, and investment opportunities with Anita Properties."*
   - Primary CTA: *"Explore Properties"*
   - Secondary CTA: *"Chat on WhatsApp"*
   - Integrated floating quick search bar (District, Property Type, Purpose, Budget).

2. **Interactive Property Search & Filters**:
   - Filter by Abuja District, Property Type, For Sale / For Rent, Price Range, Minimum Bedrooms, and Title Document (C of O, Governor's Consent, R of O).
   - Real-time result counter, active filter badges, and one-tap reset.
   - Sorting by Featured, Price (Ascending/Descending), Size, and Newest.

3. **Curated Abuja Property Catalog**:
   - 9 realistically detailed Abuja properties with authentic pricing in Nigerian Naira (`₦`), FCDA/AGIS title tags, specifications, architectural descriptions, and local landmark proximity guides.

4. **Interactive Multi-Angle Image Gallery**:
   - Thumbnails, next/prev slide controls, mobile touch swipe gestures, and fullscreen lightbox view with keyboard navigation (`Esc`, `←`, `→`).

5. **Direct WhatsApp Integration Everywhere**:
   - Pre-filled WhatsApp message generators for general inquiries, individual property inquiries (with property title, ID, and location), and inspection bookings.
   - Floating accessible WhatsApp badge with status pulse.

6. **Private Inspection Scheduler**:
   - Book Physical In-Person Inspection in Abuja or Live Guided Virtual Video Walkthrough (ideal for diaspora and interstate buyers).
   - Direct WhatsApp booking or instant on-screen booking confirmation with reference code.

7. **Saved Properties (Favorites Drawer)**:
   - Bookmark properties while browsing.
   - Slide-over drawer with one-tap *"Inquire About All on WhatsApp"* to send a shortlisted compilation directly to Anita.

8. **Abuja District & Investment Guide**:
   - Curated insights on Maitama, Asokoro, Guzape, Jabi, Katampe Extension, Wuse 2, and Gwarinpa.
   - Clicking any district card immediately filters properties for that area.

9. **Mortgage & Financial Payment Estimator**:
   - Interactive calculator tailored to Nigerian real estate (down payment %, loan tenure, annual interest rate) calculating monthly repayment, interest, and total outlay in Naira (`₦`).

10. **About Anita & Due Diligence Standards**:
    - Grounded, authentic advisory bio emphasizing FCDA & AGIS title due diligence, direct developer negotiations, and diaspora support (without fake awards or exaggerated claims).
    - Professional photo placeholder frame ready for Anita's official headshot.

11. **Mobile-First Accessibility & Usability**:
    - Smooth hamburger drawer, one-hand friendly fixed action bar on mobile property details, strong color contrast, accessible keyboard focus rings.

---

## How Anita Can Insert Her Real Information

All contact information is centralized in a single configuration file:
📁 `src/config/agentInfo.ts`

```typescript
export const AGENT_CONFIG = {
  name: 'Anita',
  agencyName: 'ANITA PROPERTIES',
  phoneDisplay: '+234 (0) 800 000 0000', // <-- Insert Anita's phone number here
  phoneRaw: '+2348000000000',             // <-- Insert digits for tel: links
  whatsappNumber: '2348000000000',        // <-- Insert WhatsApp number (with country code 234)
  email: 'inquiries@anitaproperties.ng',  // <-- Insert Anita's business email
  officeAddress: 'Maitama / CBD, Abuja',  // <-- Insert Anita's physical office address
  // ...
};
```

---

## Local Development & Build

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
This produces an optimized, production-ready bundle in the `dist/` directory.

---

## Netlify Deployment

The project is pre-configured for instant deployment on [Netlify](https://www.netlify.com):

1. **Option A (Git Integration)**:
   - Push this repository to GitHub/GitLab.
   - Import the repository in Netlify.
   - Build Command: `npm run build`
   - Publish Directory: `dist`
   - Netlify will automatically detect `netlify.toml` and apply security headers and SPA redirects.

2. **Option B (Netlify Drop / Manual Upload)**:
   - Run `npm run build`.
   - Drag and drop the generated `dist/` folder into [Netlify Drop](https://app.netlify.com/drop).

3. **SPA Redirects**:
   - `public/_redirects` and `netlify.toml` ensure client-side routing and shareable hashes (e.g. `/#property/AP-ASO-001`) work seamlessly without 404 errors on page refresh.

---

## Security & Privacy Standards

- Zero hardcoded sensitive API keys or credentials in client code.
- Input validation and honeypot protection on contact and inspection forms.
- Sanitized external links (`rel="noopener noreferrer"`).
- Production HTTP security headers configured in `netlify.toml` (`X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`).
