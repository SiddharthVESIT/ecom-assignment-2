export default function PrivacyPolicy() {
  return (
    <main className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-text-primary)] mb-8">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-[var(--color-text-secondary)] text-sm leading-relaxed bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)]">
          <p>Last updated: April 6, 2026</p>
          
          <h2 className="text-xl text-[var(--color-text-primary)] font-semibold mt-8 mb-4">1. Data Collection</h2>
          <p>We collect personal data required to facilitate real estate transactions. This includes name, contact information, financial KYC documents, and interaction history with our CRM module.</p>

          <h2 className="text-xl text-[var(--color-text-primary)] font-semibold mt-8 mb-4">2. Zero Data-Selling Policy</h2>
          <p><strong>Under no circumstances do we sell customer data.</strong> Selling customer data is illegal and strictly against our business model. Our Revenue Model explicitly depends on property sales, subscriptions, and transaction fees, never on monetization of personal privacy.</p>
          
          <h2 className="text-xl text-[var(--color-text-primary)] font-semibold mt-8 mb-4">3. Security Practices</h2>
          <p>All sensitive information is encrypted using HTTPS / TLS Encryption. Passwords and KYC identifications are stored using industry-standard hashing (bcrypt). We enforce strict CORS policies to protect your session.</p>
          
          <h2 className="text-xl text-[var(--color-text-primary)] font-semibold mt-8 mb-4">4. CRM Feedback Loop</h2>
          <p>We analyze customer reports and feedback through an automated tracking system to continuously improve our platform. Data collected via complaint tickets is solely used for system diagnosis and feature enhancement.</p>
        </div>
      </div>
    </main>
  );
}
