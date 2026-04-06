export default function TermsOfService() {
  return (
    <main className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-text-primary)] mb-8">
          Terms of Service
        </h1>
        <div className="space-y-6 text-[var(--color-text-secondary)] text-sm leading-relaxed bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)]">
          <p>Last updated: April 6, 2026</p>
          
          <h2 className="text-xl text-[var(--color-text-primary)] font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using Elevate Estates ("Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.</p>

          <h2 className="text-xl text-[var(--color-text-primary)] font-semibold mt-8 mb-4">2. Property Listings</h2>
          <p>All property listings are subject to verification. We hold the right to refuse or remove any listing that breaches our quality standards or violates any real estate regulations. Prices are subject to market conditions and may change without prior notice.</p>
          
          <h2 className="text-xl text-[var(--color-text-primary)] font-semibold mt-8 mb-4">3. Security & Account Responsibilities</h2>
          <p>Brokers and customers are responsible for safeguarding their login credentials. Any activity occurring under your account is your responsibility. We employ strict Data Validation and JWT Token Sessions for security purposes as detailed in our Security module.</p>
          
          <h2 className="text-xl text-[var(--color-text-primary)] font-semibold mt-8 mb-4">4. Compliance with SCM Policies</h2>
          <p>Agents and Brokers must strictly adhere to the network distribution guidelines set forth in the Supply Chain Management framework. Violations may result in suspension from the Enterprise Module.</p>

          <h2 className="text-xl text-[var(--color-text-primary)] font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
          <p>Elevate Estates shall not be held liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our platform or property investments made through our brokers.</p>
        </div>
      </div>
    </main>
  );
}
