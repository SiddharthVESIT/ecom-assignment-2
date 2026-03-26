# guidelines.md — StepUp Shoes | Project Rules & Standards

## 1. Project Overview
This is a **college assignment frontend demo** for a premium shoe e-commerce platform called **StepUp**. It must demonstrate five concepts across dedicated web pages:
- (a) User Interface — polished, animated storefront
- (b) Revenue Model — how the business makes money
- (c) Marketing Strategy — channels, personas, campaigns
- (d) CRM Strategy — customer segmentation, loyalty tiers
- (e) Security — login UI, security practices explained

**There is NO backend.** All data is hardcoded. All auth is simulated via React state/localStorage.

---

## 2. Absolute Rules (Never Violate)

| Rule | Reason |
|------|--------|
| No backend calls except Unsplash CDN image URLs | Assignment scope — frontend only |
| No real payment processing | Demo only; show UI with "Demo Mode" badge |
| No real authentication | Simulate login with hardcoded credentials: `user@stepup.com / demo1234` |
| No gray placeholder boxes for images | Always use real Unsplash shoe photos (see SKILLS.md for IDs) |
| No Arial, Inter, Roboto, or system fonts | Use Bebas Neue + DM Sans as specified |
| No purple gradients on white — that's generic AI slop | Use dark theme with hot orange-red accent |
| No uninstalled npm packages | Only use packages listed in SKILLS.md |
| No inline styles for layout | Use Tailwind utility classes or CSS modules |

---

## 3. File Structure

```
stepup-shoes/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/            # Only SVG logos, no raster images
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── HeroSection.jsx
│   │   ├── CRMTable.jsx
│   │   ├── LoginForm.jsx
│   │   └── ui/            # Reusable atoms: Button, Badge, Modal
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── RevenuePage.jsx
│   │   ├── MarketingPage.jsx
│   │   ├── CRMPage.jsx
│   │   ├── SecurityPage.jsx
│   │   ├── LoginPage.jsx
│   │   └── Dashboard.jsx
│   ├── context/
│   │   ├── AuthContext.jsx   # isLoggedIn state + login/logout functions
│   │   └── CartContext.jsx   # cart items array + add/remove/total
│   ├── data/
│   │   ├── products.js       # 12+ hardcoded product objects
│   │   ├── customers.js      # 8 dummy CRM customer records
│   │   └── revenueStats.js   # Dummy revenue figures
│   ├── hooks/
│   │   └── useScrollAnimation.js  # IntersectionObserver hook for scroll reveals
│   ├── styles/
│   │   └── globals.css       # CSS variables, fonts, base reset
│   ├── App.jsx               # Router setup
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── SKILLS.md
└── guidelines.md
```

---

## 4. Data Shapes (Hardcoded)

### Product Object
```js
{
  id: "prod-001",
  name: "AirStep Pro X",
  brand: "StepUp",
  category: "Running",          // Running | Casual | Formal | Sports
  price: 4999,                  // INR, integer (paise avoided — demo only)
  originalPrice: 6499,          // For discount display
  rating: 4.7,
  reviewCount: 312,
  sizes: [6, 7, 8, 9, 10, 11],
  colors: ["#FFFFFF", "#000000", "#FF3D00"],
  image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=80",
  badge: "Bestseller",          // Optional: "New" | "Sale" | "Bestseller" | null
  inStock: true,
  description: "..."
}
```

### CRM Customer Object
```js
{
  id: "cust-001",
  name: "Arjun Mehta",
  email: "arjun.m@email.com",
  tier: "Gold",                 // Bronze | Silver | Gold
  ltv: 14800,                   // Lifetime value in INR
  orders: 7,
  lastPurchase: "2025-02-14",
  joinDate: "2023-08-01",
  favoriteCategory: "Running"
}
```

### Auth State (Context)
```js
{
  isLoggedIn: false,
  user: null | {
    name: "Demo User",
    email: "user@stepup.com",
    tier: "Silver",
    avatar: null
  },
  login: (email, password) => boolean,   // Returns true only for demo creds
  logout: () => void
}
```

---

## 5. Routing Map

| Path | Page | Auth Required |
|------|------|---------------|
| `/` | Home | No |
| `/products` | All Products | No |
| `/products/:id` | Product Detail | No |
| `/revenue` | Revenue Model | No |
| `/marketing` | Marketing Strategy | No |
| `/crm` | CRM Strategy | No |
| `/security` | Security Page | No |
| `/login` | Login/Signup | No (redirects to `/dashboard` if already logged in) |
| `/dashboard` | User Dashboard | Yes (redirects to `/login` if not logged in) |

---

## 6. Animation Standards

### Do Use
```css
/* Scroll reveal — base state */
.reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }

/* Card hover */
.product-card:hover { transform: translateY(-8px); box-shadow: 0 24px 48px rgba(0,0,0,0.4); }

/* CTA button pulse */
@keyframes pulse-accent {
  0%, 100% { box-shadow: 0 0 0 0 rgba(255, 61, 0, 0.4); }
  50% { box-shadow: 0 0 0 12px rgba(255, 61, 0, 0); }
}
```

### Don't Use
- `transition: all` — too broad, causes jank
- `animation-duration` under `200ms` for decorative effects — too fast
- Parallax scroll on mobile — causes lag on phones
- `position: fixed` elements that cover content on small screens

---

## 7. Assignment Page Content Guidelines

### Revenue Page (`/revenue`)
Must explain:
1. **Direct Sales** — primary revenue stream (product margins)
2. **Premium Membership** — StepUp Elite subscription (₹499/month, free shipping + early access)
3. **Brand Collaborations** — limited edition collabs
4. **Data Insights** (future) — anonymized trend data to brands
Include a visual breakdown (pie/bar chart or illustrated cards)

### Marketing Page (`/marketing`)
Must cover:
1. **Target Personas** — 3 personas: College Student, Working Professional, Fitness Enthusiast
2. **Channel Mix** — Instagram/Reels, Google Search Ads, Influencer Tie-ups, WhatsApp Remarketing
3. **Brand Voice** — "Premium without pretension" — aspirational but approachable
4. **Campaign Example** — one mock campaign visual or tagline showcase

### CRM Page (`/crm`)
Must show:
1. **Tier Table** — Bronze (LTV < ₹5K), Silver (₹5K–₹15K), Gold (> ₹15K)
2. **Customer Table** — 6–8 dummy rows with tier badges
3. **Benefits per Tier** — points, discounts, early access
4. **Retention Strategy** — win-back emails, birthday discounts (explained, not implemented)

### Security Page (`/security`)
Must show:
1. **Login Interface** — functional dummy form with:
   - Email/password validation
   - Password strength indicator
   - "Show password" toggle
   - Shake animation on wrong credentials
   - Demo credentials displayed clearly: `user@stepup.com / demo1234`
2. **Security Practices** — explained in visual cards:
   - HTTPS / TLS encryption
   - JWT token-based sessions (explained)
   - Rate limiting (100 req/15 min)
   - Password hashing (bcrypt)
   - CORS policy
   - Input sanitization / XSS prevention
3. **Privacy Policy** summary (short, bullet-point)

---

## 8. Mobile Responsiveness Rules
- Navbar collapses to hamburger at `< 768px`
- Product grid: 2 cols at tablet, 1 col at mobile
- Hero text scales down: `clamp(2rem, 8vw, 6rem)` for h1
- CRM table scrolls horizontally on mobile (`overflow-x: auto`)
- Touch targets minimum `44px` height

---

## 9. Accessibility (Minimum Standard)
- All images have descriptive `alt` text
- Color contrast ratio minimum 4.5:1 for body text
- All interactive elements are keyboard-focusable
- Form inputs have associated `<label>` elements
- Use semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`

---

## 10. Demo Credentials (Hardcoded Auth)
```
Email:    user@stepup.com
Password: demo1234
Result:   Login succeeds, sets isLoggedIn=true, redirects to /dashboard
```
Any other combination: shows error — "Invalid credentials. Use the demo account."
Show these credentials visibly on the Login page with a "Quick Fill" button for ease of demonstration.

---

## 11. What NOT to Build
- No actual payment flow (no Stripe, Razorpay integration)
- No order processing backend
- No email sending
- No image upload
- No search with server-side filtering
- No real database or API (localStorage for cart/auth state is fine)
- No SSR (use plain Vite SPA)
- No TypeScript (plain JSX for simplicity unless requested)

---

## 12. Browser Support Target
- Chrome 110+, Firefox 110+, Safari 16+
- No IE support needed
- Mobile: iOS Safari 16+, Chrome Android

---

*Last updated: Assignment v1.0 — StepUp Premium Footwear*
