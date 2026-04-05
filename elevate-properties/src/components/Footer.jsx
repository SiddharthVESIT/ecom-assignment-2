import { Link } from 'react-router-dom';
import { Camera, AtSign, Play, Mail } from 'lucide-react';

const footerLinks = [
  {
    title: 'Shop',
    links: [
      { label: 'All Properties', path: '/products' },
      { label: 'Villas', path: '/products?category=Villas' },
      { label: 'Apartments', path: '/products?category=Apartments' },
      { label: 'Commercial', path: '/products?category=Commercial' },
      { label: 'Plots', path: '/products?category=Plots' },
    ]
  },
  {
    title: 'Assignment',
    links: [
      { label: 'Revenue Model', path: '/revenue' },
      { label: 'Marketing Strategy', path: '/marketing' },
      { label: 'CRM Strategy', path: '/crm' },
      { label: 'Security', path: '/security' },
    ]
  },
  {
    title: 'Account',
    links: [
      { label: 'Login', path: '/login' },
      { label: 'Dashboard', path: '/dashboard' },
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <span className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-[var(--color-text-primary)]">
              ELEVATE<span className="text-[var(--color-accent)]">ESTATES</span>
            </span>
            <p className="mt-4 text-[var(--color-text-secondary)] text-sm leading-relaxed">
              Premium properties and bespoke real estate services. Your dream home awaits.
            </p>
            <div className="flex gap-4 mt-6">
              {[Camera, AtSign, Play, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map(section => (
            <div key={section.title}>
              <h4 className="font-[family-name:var(--font-display)] text-lg tracking-wider text-[var(--color-text-primary)] mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--color-text-secondary)]">
            © 2026 Elevate Estates. Real Estate Platform Demo.
          </p>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Built with React + Vite + Tailwind + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
