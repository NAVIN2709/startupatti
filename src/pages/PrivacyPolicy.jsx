const PrivacyPolicy = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-500 text-sm mb-10">
          Last updated: February 24, 2026
        </p>

        <div className="space-y-8 text-gray-300 text-sm md:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              1. Introduction
            </h2>
            <p>
              Startup Atti ("we", "our", or "us") is an initiative by the
              Department of Economic & Entrepreneurship Development, Unity of
              Youth Foundation (Darpan ID: TN/2024/0425767). This Privacy Policy
              explains how we collect, use, and protect your personal
              information when you use our website and attend our events.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>
                <span className="text-gray-300">Personal Information:</span>{" "}
                Name, email address, phone number, and professional details when
                you register for events or contact us.
              </li>
              <li>
                <span className="text-gray-300">Event Data:</span> Photos and
                videos taken at our events for promotional and documentation
                purposes.
              </li>
              <li>
                <span className="text-gray-300">Usage Data:</span> Browser type,
                pages visited, and interaction data collected automatically
                through cookies or analytics tools.
              </li>
              <li>
                <span className="text-gray-300">Communication Data:</span>{" "}
                Messages shared via WhatsApp, email, or social media when you
                reach out to us.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>To process event registrations and manage attendance.</li>
              <li>
                To communicate event updates, newsletters, and announcements.
              </li>
              <li>
                To improve our website, events, and overall user experience.
              </li>
              <li>
                To share event recaps, photos, and videos on our website and
                social media channels.
              </li>
              <li>To respond to your inquiries and provide support.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              4. Information Sharing
            </h2>
            <p>
              We do not sell, rent, or trade your personal information to third
              parties. We may share your information only in the following
              circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mt-3">
              <li>With your explicit consent.</li>
              <li>
                With service providers who assist us in operating our website
                and events (e.g., ticketing platforms like AllEvents).
              </li>
              <li>When required by law or to protect our legal rights.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              5. Event Photography & Media
            </h2>
            <p>
              By attending Startup Atti events, you consent to being
              photographed or recorded. These media may be used on our website,
              social media, and promotional materials. If you wish to have your
              image removed, please contact us at{" "}
              <a
                href="mailto:startupatti@startupatti.com"
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                startupatti@startupatti.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              6. Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect your personal
              information from unauthorized access, alteration, or destruction.
              However, no method of transmission over the internet is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">7. Cookies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to
              enhance your browsing experience. You can control cookie
              preferences through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              8. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites (e.g.,
              AllEvents, WhatsApp, LinkedIn, Instagram, YouTube). We are not
              responsible for the privacy practices of these external sites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              9. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mt-3">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction or deletion of your personal data.</li>
              <li>Opt out of marketing communications at any time.</li>
              <li>Request removal of your image from event media.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              10. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white font-medium">Startup Atti</p>
              <p className="text-gray-400">
                Department of Economic & Entrepreneurship Development
              </p>
              <p className="text-gray-400">Unity of Youth Foundation</p>
              <p className="text-gray-400 mt-2">Chennai, Tamil Nadu, India</p>
              <p className="text-gray-400">
                Email:{" "}
                <a
                  href="mailto:startupatti@startupatti.com"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  startupatti@startupatti.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
