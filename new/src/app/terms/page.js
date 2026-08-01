const TermsOfService = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-500 text-sm mb-10">
          Last updated: February 24, 2026
        </p>

        <div className="space-y-8 text-gray-300 text-sm md:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              1. About Startup Atti
            </h2>
            <p>
              Startup Atti is an invite-only networking session initiative operated by
              Madras Marketers, based in Chennai, Tamil Nadu. By using our website or
              attending our events, you agree to these Terms of Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              2. Use of Website
            </h2>
            <p className="mb-3">By accessing our website, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Use the website for lawful purposes only.</li>
              <li>
                Not attempt to disrupt, damage, or gain unauthorized access to
                the website or its servers.
              </li>
              <li>
                Not reproduce, duplicate, or redistribute any content from this
                website without prior written consent.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              3. Event Registration & Tickets
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>
                Event registrations are processed through third-party platforms
                (e.g., AllEvents). Your use of these platforms is subject to
                their own terms and conditions.
              </li>
              <li>
                Ticket availability, pricing, and event details are subject to
                change without prior notice.
              </li>
              <li>
                Refund policies, if applicable, will be communicated at the time
                of ticketing and are governed by the ticketing platform's
                policies.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              4. Event Conduct
            </h2>
            <p className="mb-3">
              By attending Startup Atti events, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>
                Behave respectfully towards all attendees, speakers, organizers,
                and venue staff.
              </li>
              <li>
                Not engage in any form of harassment, discrimination, or
                disruptive behavior.
              </li>
              <li>Follow all venue rules and safety guidelines.</li>
              <li>
                Not promote products, services, or solicit business at events
                without prior approval from the organizers.
              </li>
            </ul>
            <p className="mt-3 text-gray-400">
              We reserve the right to remove any attendee who violates these
              conduct guidelines without refund.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              5. Photography & Media Consent
            </h2>
            <p>
              All Startup Atti events may be photographed and recorded for
              promotional purposes. By attending, you grant Startup Atti and
              Madras Marketers a non-exclusive, royalty-free license to
              use your likeness in photos and videos across our website, social
              media, and marketing materials.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              6. Intellectual Property
            </h2>
            <p>
              All content on the Startup Atti website — including text,
              graphics, logos, images, and design — is the property of Startup Atti or
              Madras Marketers or its content partners and is protected by
              applicable intellectual property laws. You may not use, reproduce,
              or distribute this content without express written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">7. Donations</h2>
            <p>
              Donations or sponsorships made to support Startup Atti through our website or
              WhatsApp are voluntary contributions to Madras Marketers.
              All contributions are non-refundable unless otherwise communicated.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              8. Third-Party Links & Services
            </h2>
            <p>
              Our website contains links to third-party websites and services
              (including AllEvents, WhatsApp, LinkedIn, Instagram, and YouTube).
              These links are provided for convenience only. We do not endorse
              or assume responsibility for the content, privacy policies, or
              practices of any third-party sites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              9. Limitation of Liability
            </h2>
            <p>
              Startup Atti and Madras Marketers shall not be liable for
              any direct, indirect, incidental, or consequential damages arising
              from your use of our website or attendance at our events. We
              provide the website and events on an "as is" basis without any
              warranties, express or implied.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              10. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms of Service at any time.
              Changes will be posted on this page with an updated "Last updated"
              date. Continued use of the website or attendance at events after
              changes constitutes acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              11. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of India. Any disputes arising under these terms shall be
              subject to the exclusive jurisdiction of the courts in Chennai,
              Tamil Nadu.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              12. Contact Us
            </h2>
            <p>
              For any questions regarding these Terms of Service, please contact
              us:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white font-medium">Startup Atti</p>
              <p className="text-gray-400">An initiative by Madras Marketers</p>
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

export default TermsOfService;
