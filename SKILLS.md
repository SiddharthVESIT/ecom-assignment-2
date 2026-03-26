# SKILLS.md — StepUp Shoes | Frontend College Assignment

## Project Identity
- **Project Name:** StepUp — Premium Footwear E-Commerce
- **Type:** College Assignment Frontend Demo (No backend required)
- **Purpose:** Demonstrate UI, Revenue Model, Marketing Strategy, CRM Strategy, and Security on a shoes e-commerce website
- **Tech Stack:** React (Vite) + Tailwind CSS + Framer Motion (or CSS animations if Framer unavailable)
- **Images:** All shoe/product images must be fetched directly from `https://source.unsplash.com` or `https://images.unsplash.com` using keyword URLs — NO local images, NO placeholder boxes

---

## Skill Modules

### 1. IMAGE FETCHING (Critical Rule)
- **Always** use Unsplash Source API for shoe images:
  ```
  https://images.unsplash.com/photo-<PHOTO_ID>?w=600&q=80
  ```
  Preferred known photo IDs for shoes:
  - Nike/Running: `photo-1542291026-7eec264c27ff`
  - Sneakers white: `photo-1549298916-b41d501d3772`
  - Casual shoe: `photo-1525966222134-fcfa99b8ae77`
  - Boots: `photo-1608256246200-53e635b5b65f`
  - Heels: `photo-1543163521-1bf539c55dd2`
  - Sports blue: `photo-1606107557195-0e29a4b5b4aa`
  - Loafers: `photo-1614252235316-8c857d38b5f4`
  - Red sneakers: `photo-1600269452121-4f2416e55c28`
  - Luxury: `photo-1595950653106-6c9ebd614d3a`
  - Street style: `photo-1512374382149-233c42b6a83b`

- For hero/banner: use landscape shoe images
- For product cards: use square-cropped (`w=400&h=400&fit=crop`)
- Never use `via.placeholder.com` or gray boxes

### 2. ANIMATION & MOTION (High Priority)
- Use **Framer Motion** if in React environment (`motion.div`, `AnimatePresence`)
- Fallback: CSS `@keyframes` with `animation` property
- Required animations:
  - Hero section: staggered fade-in-up for headline, subtext, CTA button
  - Product cards: hover lift (`translateY(-8px)`) + shadow expansion
  - Navbar: scroll-aware background blur transition
  - Page transitions: fade between routes
  - CRM tier badges: pulse glow on Gold VIP
  - Login form: shake animation on error state
  - Stats/numbers: count-up animation on scroll into view

### 3. TYPOGRAPHY
- **Display font:** `Bebas Neue` or `Anton` (Google Fonts) — for hero titles, section headers
- **Body font:** `DM Sans` or `Outfit` — for paragraphs, labels
- **Accent font:** `Playfair Display` — for luxury product names or VIP labels
- Import via Google Fonts CDN in `index.html` or CSS `@import`
- Font scale: Use fluid type (`clamp()`) for responsive headings

### 4. COLOR PALETTE
```css
:root {
  --color-bg: #0A0A0A;           /* Near black background */
  --color-surface: #141414;      /* Card/panel surface */
  --color-border: #2A2A2A;       /* Subtle borders */
  --color-accent: #FF3D00;       /* Hot orange-red — primary CTA */
  --color-accent-soft: #FF6B35;  /* Softer accent for hovers */
  --color-gold: #FFD700;         /* VIP Gold tier */
  --color-silver: #C0C0C0;       /* Silver tier */
  --color-bronze: #CD7F32;       /* Bronze tier */
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #A0A0A0;
  --color-success: #00E676;
  --color-warning: #FFC107;
}
```

### 5. LAYOUT RULES
- Use CSS Grid for product listings (auto-fill, minmax 280px)
- Use Flexbox for nav, cards, CTAs
- Max content width: `1280px`, centered with `margin: 0 auto`
- Section padding: `padding: 80px 24px` desktop, `padding: 48px 16px` mobile
- Rounded corners: `border-radius: 12px` for cards, `8px` for buttons
- Glassmorphism for modals/overlays: `backdrop-filter: blur(16px)`

---

## Page Architecture

```
/ (Home/Landing)
├── Navbar (sticky, blur on scroll)
├── Hero Section (full viewport, animated)
├── Featured Products (6 cards)
├── Brand Story / About Strip
└── Footer

/products (Shop All)
├── Filter Sidebar (category, price, size)
└── Product Grid

/product/:id (Product Detail)
├── Image Gallery
├── Size Selector
├── Add to Cart CTA
└── Related Products

/revenue (Revenue Model Page)
├── Business Model Explainer
├── Revenue Streams Visual
└── Pricing Tiers

/marketing (Marketing Strategy Page)
├── Target Audience Personas
├── Channel Strategy
└── Campaign Mockups

/crm (CRM Strategy Page)
├── Customer Tier Dashboard (Bronze/Silver/Gold)
├── LTV Calculator (dummy interactive)
└── Segmentation Visual

/security (Security Page)
├── Login Form (animated, with validation)
├── Security Features List
└── Data Protection Explainer

/login
└── Login/Signup Form (dummy — no backend)

/dashboard (User Dashboard — post login)
├── Order History
├── Loyalty Tier Badge
└── Profile
```

---

## Component Checklist

### Navbar
- [ ] Logo (text-based, stylized)
- [ ] Nav links: Home, Shop, About, [Revenue | Marketing | CRM | Security] (assignment pages)
- [ ] Cart icon with badge counter (state only)
- [ ] Login/Profile button
- [ ] Mobile hamburger menu

### Hero
- [ ] Full viewport height
- [ ] Background: dark with shoe image overlay or split layout
- [ ] Animated headline using stagger
- [ ] CTA: "Shop Now" button with hover animation
- [ ] Scroll indicator

### Product Card
- [ ] Unsplash image (square crop)
- [ ] Product name, price, category badge
- [ ] Hover: quick-view button appears
- [ ] Add to cart button
- [ ] Wishlist heart toggle

### CRM Dashboard (Assignment Page)
- [ ] Tier cards: Bronze / Silver / Gold with icons
- [ ] Customer table (dummy data, 5-8 rows)
- [ ] LTV bar chart (CSS or Chart.js)
- [ ] Tier upgrade progress bar

### Login Form (Security Demo)
- [ ] Email + Password fields
- [ ] Show/hide password toggle
- [ ] Client-side validation with error messages
- [ ] "Login" button with loading spinner state
- [ ] OAuth buttons (Google, Apple) — dummy/visual only
- [ ] "Forgot password" link

---

## Dummy Data Guidelines
- Products: Minimum 12 products across 4 categories (Running, Casual, Formal, Sports)
- Prices: Range from ₹1,499 to ₹12,999 (INR since user is in India)
- CRM customers: 6–8 rows with Name, Email, Tier, LTV, Last Purchase
- Revenue stats: Use plausible-looking numbers (₹42L monthly revenue, etc.)

---

## Anti-Hallucination Rules
1. **Never import libraries not listed** in this SKILLS.md without checking
2. **Never use placeholder images** — always use Unsplash URLs listed above
3. **Never add a backend/database** — all data is hardcoded JS arrays/objects
4. **Never use real payment gateways** — show UI only with "Demo Mode" badge
5. **Never fabricate API keys** — no API calls except to Unsplash image CDN
6. **Always use React Router** (`react-router-dom`) for navigation between pages
7. **Never break mobile layout** — test all components at 375px width mentally
8. **Keep login functional at the JS state level** — set a `isLoggedIn` boolean in context, no actual auth

---

## Approved External Resources
- Google Fonts: `https://fonts.googleapis.com`
- Unsplash Images: `https://images.unsplash.com`
- Lucide Icons: `lucide-react` (already in Vite React template typically)
- Chart.js (optional, for CRM charts): `https://cdn.jsdelivr.net/npm/chart.js`
- Framer Motion: `framer-motion` npm package
- Tailwind CSS: via CDN or PostCSS plugin

---

## Performance Notes
- Lazy load product images: `loading="lazy"` on all `<img>` tags
- Use `will-change: transform` only on actively animating elements
- Keep JS bundle lean — prefer CSS animations over JS where possible
- Compress no images (they are remote URLs)
