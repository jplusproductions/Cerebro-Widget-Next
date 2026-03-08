import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — Cerebro Sports",
}

export default function PrivacyPolicyPage() {
  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <h1>Privacy Policy</h1>
      <p className="text-sm text-zinc-500">Last updated: March 8, 2026</p>

      <p>
        Cerebro Sports (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your
        privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
        information when you use our widget platform and related services (the &quot;Service&quot;).
      </p>

      <h2>1. Information We Collect</h2>

      <h3>1.1 Information You Provide</h3>
      <ul>
        <li><strong>Account information:</strong> name, email address, and password when you register.</li>
        <li><strong>Billing information:</strong> payment details processed through our third-party payment processor. We do not store full payment card numbers.</li>
        <li><strong>Communications:</strong> any information you provide when contacting support or submitting feedback.</li>
      </ul>

      <h3>1.2 Information Collected Automatically</h3>
      <ul>
        <li><strong>Usage data:</strong> pages visited, features used, timestamps, referring URLs, and interaction patterns.</li>
        <li><strong>Device data:</strong> browser type, operating system, device identifiers, and screen resolution.</li>
        <li><strong>Log data:</strong> IP address, access times, and server logs.</li>
        <li><strong>Cookies and similar technologies:</strong> we use cookies, pixels, and local storage to operate and improve the Service.</li>
      </ul>

      <h3>1.3 Information from Third Parties</h3>
      <p>
        We may receive information from third-party services you connect to your account, analytics
        providers, and advertising partners.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, operate, and maintain the Service.</li>
        <li>Process transactions and send related notices.</li>
        <li>Send administrative communications, including updates and security alerts.</li>
        <li>Respond to support requests and inquiries.</li>
        <li>Analyze usage trends to improve the Service.</li>
        <li>Detect, prevent, and address fraud, abuse, or technical issues.</li>
        <li>Comply with legal obligations.</li>
      </ul>

      <h2>3. How We Share Your Information</h2>
      <p>We do not sell your personal information. We may share information with:</p>
      <ul>
        <li><strong>Service providers:</strong> third parties who perform services on our behalf (hosting, analytics, payment processing, email delivery).</li>
        <li><strong>Legal compliance:</strong> when required by law, regulation, legal process, or governmental request.</li>
        <li><strong>Business transfers:</strong> in connection with a merger, acquisition, or sale of assets.</li>
        <li><strong>With your consent:</strong> when you explicitly authorize sharing.</li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>
        We retain your personal information only as long as necessary to fulfill the purposes
        outlined in this policy, comply with legal obligations, resolve disputes, and enforce our
        agreements. When data is no longer needed, we securely delete or anonymize it.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We implement commercially reasonable technical and organizational measures to protect your
        information against unauthorized access, alteration, disclosure, or destruction. However, no
        method of transmission over the internet or electronic storage is 100% secure, and we cannot
        guarantee absolute security.
      </p>

      <h2>6. Your Rights and Choices</h2>
      <p>Depending on your jurisdiction, you may have the right to:</p>
      <ul>
        <li>Access, correct, or delete your personal information.</li>
        <li>Object to or restrict certain processing activities.</li>
        <li>Request data portability.</li>
        <li>Withdraw consent at any time (where processing is based on consent).</li>
        <li>Opt out of marketing communications by following the unsubscribe link in any email.</li>
      </ul>
      <p>
        To exercise these rights, contact us at{" "}
        <a href="mailto:privacy@cerebrosports.com">privacy@cerebrosports.com</a>. We will respond
        within 30 days or as required by applicable law.
      </p>

      <h2>7. Cookies</h2>
      <p>
        We use essential cookies required for the Service to function and optional analytics cookies
        to understand usage patterns. You can manage cookie preferences through your browser
        settings. Disabling essential cookies may impair Service functionality.
      </p>

      <h2>8. International Data Transfers</h2>
      <p>
        Your information may be transferred to and processed in countries other than your own.
        We ensure appropriate safeguards are in place in accordance with applicable data protection
        laws.
      </p>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        The Service is not directed to children under 13 (or the applicable age in your
        jurisdiction). We do not knowingly collect personal information from children. If we become
        aware that we have collected information from a child, we will take steps to delete it
        promptly.
      </p>

      <h2>10. California Privacy Rights (CCPA)</h2>
      <p>
        If you are a California resident, you have additional rights under the California Consumer
        Privacy Act, including the right to know what personal information we collect, the right to
        delete your information, and the right to opt out of the sale of personal information. We do
        not sell personal information.
      </p>

      <h2>11. European Privacy Rights (GDPR)</h2>
      <p>
        If you are in the European Economic Area, you have rights under the General Data Protection
        Regulation, including the rights described in Section 6 above. Our legal basis for
        processing is typically contract performance, legitimate interest, or your consent. You may
        lodge a complaint with your local data protection authority.
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of material changes
        by posting the updated policy on the Service with a revised &quot;Last updated&quot; date. Your
        continued use of the Service after changes constitutes acceptance of the revised policy.
      </p>

      <h2>13. Contact</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at{" "}
        <a href="mailto:privacy@cerebrosports.com">privacy@cerebrosports.com</a>.
      </p>
    </article>
  )
}
