export default function PrivacyPolicyPage() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#050816] via-[#0b1020] to-[#0f172a] text-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Privacy Policy
            </h1>
            <p className="mt-4 text-gray-400">
              Last updated: December 19, 2025
            </p>
          </div>
  
          {/* Content Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 space-y-8">
            <section>
              <p className="text-gray-300 leading-relaxed">
                Welcome to our website (“we”, “our”, or “us”). Your privacy is
                important to us. This Privacy Policy explains how we collect, use,
                and protect your information when you use our website and
                services.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                1. Information We Collect
              </h2>
              <p className="text-gray-300 mb-3">
                We may collect the following types of information:
              </p>
  
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>
                  <span className="text-white font-medium">
                    Personal Information:
                  </span>{" "}
                  Name, email address, and payment-related details (processed
                  securely by third-party payment providers).
                </li>
                <li>
                  <span className="text-white font-medium">
                    Non-Personal Information:
                  </span>{" "}
                  Browser type, device data, IP address, pages visited, and usage
                  behavior.
                </li>
              </ul>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Provide and maintain our services</li>
                <li>Process payments and transactions</li>
                <li>Communicate updates, support, or offers</li>
                <li>Improve performance and user experience</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                3. Cookies & Tracking
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may use cookies and similar technologies to analyze traffic,
                remember preferences, and improve the experience. You can disable
                cookies in your browser settings, but some features may not work
                correctly.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                4. Third-Party Services
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may use trusted third-party tools such as analytics providers
                and payment processors. These services follow their own privacy
                policies, and we are not responsible for their practices.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                5. Data Security
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We take reasonable steps to protect your information. However, no
                internet transmission or storage system is completely secure, and
                we cannot guarantee absolute security.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                6. Your Rights
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Depending on your location, you may request access, correction, or
                deletion of your personal data. You may also withdraw consent at
                any time.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                7. Children’s Privacy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our website is not intended for children under the age of 13. We
                do not knowingly collect personal data from children.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                8. Policy Updates
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will
                be posted on this page with a revised date.
              </p>
            </section>
  
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-semibold text-white mb-3">
                9. Contact Us
              </h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, contact us at:
              </p>
              <p className="mt-2 text-blue-400 font-medium">
                epictools.io@gmail.com
              </p>
            </section>
          </div>
        </div>
      </main>
    );
  }