# MASTER PROMPT — StepUp Shoes Frontend Assignment
# Copy this entire prompt into your AI IDE (Cursor / Windsurf / Copilot Chat / etc.)

---

## CONTEXT
You are building a college assignment frontend web application called **StepUp** — a premium shoe e-commerce platform. This is a React + Vite + Tailwind CSS project. There is NO backend and NO database. All data is hardcoded. The app must demonstrate UI, Revenue Model, Marketing Strategy, CRM Strategy, and Security through dedicated web pages.

Read and strictly follow:
- `SKILLS.md` — for image URLs, animations, color palette, component specs
- `guidelines.md` — for file structure, data shapes, routing, page content requirements, and anti-hallucination rules

---

## TECH STACK
- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS (utility classes) + custom CSS variables in `src/styles/globals.css`
- **Routing:** `react-router-dom` v6
- **Animation:** Framer Motion (`framer-motion`)
- **Icons:** `lucide-react`
- **Fonts:** Google Fonts — Bebas Neue (display) + DM Sans (body) — imported in `index.html`
- **No backend. No database. No API keys.**

---

## AESTHETIC DIRECTION
**Theme: Dark Luxury Streetwear**
- Dark near-black background (`#0A0A0A`)
- Hot orange-red accent (`#FF3D00`) for CTAs and highlights
- Gold (`#FFD700`) for VIP tier accents only
- Typography: Big, bold Bebas Neue headlines. Clean DM Sans body.
- Motion: Staggered hero reveals, card hover lifts, smooth page transitions
- Feel: Premium sneaker brand — think StockX meets Nike SNKRS — dark, bold, confident

---

## STEP-BY-STEP BUILD ORDER

### Phase 1 — Project Setup
1. Scaffold Vite React project: `npm create vite@latest stepup-shoes -- --template react`
2. Install dependencies:
   ```
   npm install react-router-dom framer-motion lucide-react
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
3. Configure `tailwind.config.js` — add `./src/**/*.{js,jsx}` to content array
4. Add Google Fonts to `index.html`:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
   ```
5. Create `src/styles/globals.css` with all CSS variables from SKILLS.md color palette
6. Set up file structure exactly as defined in `guidelines.md` Section 3

### Phase 2 — Data Layer
7. Create `src/data/products.js` with 12 products across 4 categories using Unsplash image URLs from SKILLS.md
8. Create `src/data/customers.js` with 8 CRM dummy customers (Bronze/Silver/Gold tiers, INR LTV values)
9. Create `src/data/revenueStats.js` with dummy monthly revenue, conversion rate, AOV stats

### Phase 3 — Context & State
10. Create `src/context/AuthContext.jsx`:
    - State: `isLoggedIn`, `user`
    - `login(email, password)` — only accepts `user@stepup.com / demo1234`
    - `logout()` — clears state
    - Wrap `App.jsx` with `<AuthProvider>`
11. Create `src/context/CartContext.jsx`:
    - State: `items[]`, `addItem()`, `removeItem()`, `total`
    - Persist to localStorage

### Phase 4 — Core Components
12. **Navbar.jsx** — sticky, blurs on scroll, shows cart badge, login/profile button, mobile hamburger
13. **Footer.jsx** — links to all assignment pages, brand tagline, social icons
14. **ProductCard.jsx** — Unsplash image, name, price, badge, hover animation, Add to Cart
15. **HeroSection.jsx** — full viewport, staggered text animation, CTA button, shoe image

### Phase 5 — Pages (Build in this order)
16. **Home.jsx** — Hero + Featured 6 products + Brand strip
17. **Products.jsx** — Filter sidebar (category/price) + 12-product grid
18. **ProductDetail.jsx** — Large image, size picker, color swatches, Add to Cart
19. **LoginPage.jsx** — Demo credentials displayed, shake on wrong input, Quick Fill button, simulated loading
20. **Dashboard.jsx** — Protected route, user tier badge, order history (3 dummy orders), logout button
21. **RevenuePage.jsx** — 4 revenue stream cards, illustrated breakdown, INR stats
22. **MarketingPage.jsx** — 3 persona cards, channel mix visual, brand voice section, mock campaign
23. **CRMPage.jsx** — Tier explanation cards, customer data table with colored tier badges, retention strategy section
24. **SecurityPage.jsx** — Functional login form demo + 6 security practice cards with icons

### Phase 6 — Polish & Animation
25. Add `useScrollAnimation` hook using IntersectionObserver — apply `.reveal` class to all sections
26. Add page transition wrapper in `App.jsx` using Framer Motion `AnimatePresence`
27. Add scroll-to-top on route change
28. Test all routes in mobile viewport (375px)
29. Verify all Unsplash images load correctly

---

## CRITICAL IMAGE RULE
**NEVER use placeholder images. NEVER use gray boxes.**
Use these exact Unsplash URLs in products.js:

```js
// Running shoes
"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=80"
"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop&q=80"

// White sneakers
"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop&q=80"
"https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop&q=80"

// Casual/lifestyle
"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop&q=80"
"https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=600&h=600&fit=crop&q=80"

// Boots
"https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=600&fit=crop&q=80"

// Luxury/formal
"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop&q=80"
"https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&h=600&fit=crop&q=80"

// Sports
"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=600&fit=crop&q=80"

// Hero banner (landscape)
"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1400&h=700&fit=crop&q=85"
```

---

## DEMO AUTH CREDENTIALS
Hardcode these in `AuthContext.jsx`. Display them on the Login page.
```
Email:    user@stepup.com
Password: demo1234
```
Show a "Quick Fill" button on the login form that auto-fills these values.

---

## ASSIGNMENT PAGE CONTENT SUMMARY

### /revenue — Revenue Model
- Stream 1: Direct Product Sales (60% of revenue) — margins on shoes
- Stream 2: StepUp Elite Membership (₹499/month) — free shipping, early drops, 10% discount
- Stream 3: Brand Collaborations — limited edition drops with local designers
- Stream 4: Affiliate/Referral Program — ₹200 credit per referral conversion
- Show dummy stats: ₹42L monthly GMV, 3.8% conversion rate, ₹4,200 AOV

### /marketing — Marketing Strategy
- Persona 1: "Campus Siddharth" — 19–22, college student, budget ₹2K–5K, Instagram-driven
- Persona 2: "Corporate Priya" — 26–32, working professional, ₹6K–12K budget, Google Search buyer
- Persona 3: "Fitness Rahul" — 24–35, gym-goer/runner, ₹5K–10K, YouTube/Reels influenced
- Channels: Instagram Reels (40%), Google Ads (25%), WhatsApp Remarketing (20%), Influencers (15%)
- Campaign concept: "Your Next Step" — tagline tying personal milestones to buying a new pair of shoes

### /crm — CRM Strategy
- **Bronze** (LTV < ₹5,000): Welcome email, 5% birthday discount, newsletter
- **Silver** (₹5,000–₹15,000): Early sale access, 10% loyalty discount, free shipping
- **Gold** (LTV > ₹15,000): Exclusive drops, personal stylist chat, 15% discount, priority support
- Show 8 customers in a table with colored tier badges
- Show a "Tier Upgrade Progress" section

### /security — Security Demo
Login form must:
- Validate email format in real-time
- Show password strength bar (weak/medium/strong based on length + symbols)
- Animate a shake on wrong credentials (`wrong-shake` CSS animation)
- Show spinner on submit for 1.5 seconds before resolving
- Redirect to /dashboard on success

Security cards must cover (with icons):
1. HTTPS/TLS — all data encrypted in transit
2. JWT Sessions — stateless auth tokens, 24hr expiry
3. Rate Limiting — 100 requests per 15 minutes per IP
4. Bcrypt Password Hashing — salted, 10 rounds
5. CORS Policy — only whitelisted origins accepted
6. XSS/Input Sanitization — all inputs stripped of scripts

---

## NAVBAR LINKS ORDER
```
Logo | Home | Shop | Revenue | Marketing | CRM | Security | [Cart Icon] [Login Button]
```
On mobile hamburger: same links stacked vertically with slide-in animation

---

## DO NOT
- Do NOT use `create-react-app` (use Vite)
- Do NOT install `axios` (use native `fetch` if needed — but no API calls anyway)
- Do NOT use `styled-components` (use Tailwind + CSS variables)
- Do NOT write any Express/Node backend code
- Do NOT use `any` TypeScript — this is plain `.jsx`
- Do NOT add Stripe, Razorpay, or any payment SDK
- Do NOT generate fake product images with AI descriptions — use the Unsplash URLs provided above
- Do NOT use generic purple/gradient on white color scheme
- Do NOT use Inter or Roboto fonts

---

## EXPECTED DELIVERABLE
A fully navigable React SPA with:
- ✅ Beautiful animated home page with real shoe photos
- ✅ Working product listing and detail pages
- ✅ Login/logout flow (dummy, state-only)
- ✅ Protected dashboard page
- ✅ 4 assignment explainer pages (Revenue, Marketing, CRM, Security)
- ✅ Consistent dark luxury aesthetic across all pages
- ✅ Mobile responsive
- ✅ All animations smooth and purposeful

---

*StepUp Shoes | College Assignment Frontend | Built with React + Vite + Tailwind + Framer Motion*
