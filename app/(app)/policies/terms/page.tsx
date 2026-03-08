import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service — Cerebro Sports",
}

export default function TermsOfServicePage() {
  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <h1>Terms of Service</h1>
      <p className="text-sm text-zinc-500">Last updated: March 8, 2026</p>

      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Cerebro Sports
        widget platform and related services (collectively, the &quot;Service&quot;) operated by Cerebro
        Sports (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using the Service, you agree
        to be bound by these Terms. If you do not agree, do not use the Service.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 18 years old and capable of forming a binding contract to use the
        Service. By using the Service, you represent and warrant that you meet these requirements.
      </p>

      <h2>2. Account Registration</h2>
      <p>
        You may be required to create an account to access certain features. You are responsible for
        maintaining the confidentiality of your account credentials and for all activities that occur
        under your account. You agree to notify us immediately of any unauthorized use.
      </p>

      <h2>3. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful purpose or in violation of any applicable laws.</li>
        <li>Reverse engineer, decompile, or disassemble any part of the Service.</li>
        <li>Interfere with or disrupt the integrity or performance of the Service.</li>
        <li>Attempt to gain unauthorized access to the Service or its related systems.</li>
        <li>Use the Service to transmit malware, spam, or other harmful content.</li>
        <li>Resell, sublicense, or redistribute the Service without prior written consent.</li>
      </ul>

      <h2>4. Intellectual Property</h2>
      <p>
        All content, features, and functionality of the Service — including but not limited to text,
        graphics, logos, software, and design — are the exclusive property of the Company and are
        protected by copyright, trademark, and other intellectual property laws. You are granted a
        limited, non-exclusive, non-transferable license to use the Service in accordance with these
        Terms.
      </p>

      <h2>5. User Content</h2>
      <p>
        You retain ownership of any content you submit through the Service. By submitting content,
        you grant the Company a worldwide, royalty-free, non-exclusive license to use, reproduce,
        and display such content solely as necessary to provide the Service.
      </p>

      <h2>6. Third-Party Services</h2>
      <p>
        The Service may integrate with or contain links to third-party services. We are not
        responsible for the content, privacy policies, or practices of any third-party services. Your
        use of third-party services is at your own risk.
      </p>

      <h2>7. Payment and Billing</h2>
      <p>
        If you subscribe to a paid plan, you agree to pay all applicable fees. All fees are
        non-refundable except as required by law. We reserve the right to change pricing with
        reasonable notice. Failure to pay may result in suspension or termination of your account.
      </p>

      <h2>8. Service Availability</h2>
      <p>
        We strive to maintain high availability but do not guarantee uninterrupted access to the
        Service. We may modify, suspend, or discontinue the Service (or any part thereof) at any
        time without prior notice. We shall not be liable to you or any third party for any
        modification, suspension, or discontinuation.
      </p>

      <h2>9. Disclaimer of Warranties</h2>
      <p>
        THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER
        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE
        WILL BE ERROR-FREE, SECURE, OR UNINTERRUPTED.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPANY AND ITS OFFICERS, DIRECTORS, EMPLOYEES,
        AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
        PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN
        CONNECTION WITH YOUR USE OF THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT
        (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, EVEN IF ADVISED OF THE POSSIBILITY OF
        SUCH DAMAGES.
      </p>
      <p>
        OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING FROM OR RELATED TO THE SERVICE SHALL
        NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE
        HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
      </p>

      <h2>11. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless the Company and its affiliates, officers,
        directors, employees, and agents from and against any claims, liabilities, damages, losses,
        and expenses (including reasonable attorneys&apos; fees) arising out of or relating to your use of
        the Service, your violation of these Terms, or your violation of any rights of a third party.
      </p>

      <h2>12. Termination</h2>
      <p>
        We may terminate or suspend your access to the Service at any time, with or without cause,
        and with or without notice. Upon termination, your right to use the Service will immediately
        cease. All provisions that by their nature should survive termination shall survive,
        including ownership, warranty disclaimers, indemnity, and limitations of liability.
      </p>

      <h2>13. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the State of
        Delaware, United States, without regard to its conflict of law provisions. Any disputes
        arising under these Terms shall be resolved exclusively in the state or federal courts
        located in Delaware.
      </p>

      <h2>14. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. We will notify you of material
        changes by posting the updated Terms on the Service with a revised &quot;Last updated&quot; date. Your
        continued use of the Service after such changes constitutes your acceptance of the revised
        Terms.
      </p>

      <h2>15. Contact</h2>
      <p>
        If you have any questions about these Terms, please contact us at{" "}
        <a href="mailto:legal@cerebrosports.com">legal@cerebrosports.com</a>.
      </p>
    </article>
  )
}
