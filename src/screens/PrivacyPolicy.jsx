import LegalPage, { Section, BulletList } from '../components/LegalPage.jsx'

export default function PrivacyPolicy({ onNavigate }) {
  return (
    <LegalPage title="Privacy Policy" effectiveDate="August 1, 2025" onBack={() => onNavigate('more')}>
      <p style={{ marginBottom: 20 }}>
        At UROLINQ Integrated Care, we take your privacy seriously. This policy explains what
        information we collect, why we collect it, how we protect it, and your rights regarding
        your personal and health information.
      </p>

      <Section number="1" title="What We Collect">
        <p style={{ marginBottom: 8 }}>When you use our telehealth services, we may collect:</p>
        <BulletList items={[
          'Personal details — like your name, contact information, and date of birth',
          'Health information — such as your medical history, symptoms, treatment plans, and test results',
          'Usage data — including your IP address, device type, and how you use our website or app',
        ]} />
      </Section>

      <Section number="2" title="Why We Collect This Information">
        <BulletList items={[
          'Deliver virtual urology care and follow-ups',
          'Understand your health needs and recommend treatment',
          'Communicate with you about your care',
          'Keep your records accurate and up to date',
          'Improve how our platform works',
          'Comply with medical and legal regulations',
        ]} />
      </Section>

      <Section number="3" title="Who We Share It With">
        <p style={{ marginBottom: 8 }}>We only share your data with people or services directly involved in your care, such as:</p>
        <BulletList items={[
          'Our licensed urologists and clinical partners',
          'Labs, pharmacies, or specialists (with your consent)',
          'Secure technology partners (e.g., Supabase, VSee, Firebase) that help us run the platform',
          'Regulators or legal authorities when required by law',
        ]} />
        <p style={{ fontWeight: 600, color: 'var(--text)' }}>We do not sell your personal information.</p>
      </Section>

      <Section number="4" title="How We Keep It Safe">
        <BulletList items={[
          'Your data is stored securely and encrypted',
          'Only authorised staff can access your health records',
          'We use strong privacy controls and security tools',
          'We back up your data regularly to prevent loss',
        ]} />
      </Section>

      <Section number="5" title="Your Rights">
        <p style={{ marginBottom: 8 }}>You have the right to:</p>
        <BulletList items={[
          'See the personal information we hold about you',
          'Ask us to update or correct it',
          'Request deletion (when possible and lawful)',
          'Withdraw your consent at any time',
          'Report any concerns to a data protection authority',
        ]} />
      </Section>

      <Section number="6" title="Cookies and Tracking">
        <p>We use cookies to make the site work better and understand how people use it. You can choose to turn off cookies in your browser settings.</p>
      </Section>

      <Section number="7" title="Minors">
        <p>We don't collect personal health information from anyone under 18 without a parent or guardian's permission.</p>
      </Section>

      <Section number="8" title="Where Your Data Is Stored">
        <p>Sometimes, your data may be stored outside of South Africa. When this happens, we make sure it is still protected by privacy laws and secure agreements.</p>
      </Section>

      <Section number="9" title="Changes to This Policy">
        <p>We may update this policy from time to time. We will notify you of any major changes on our website or app.</p>
      </Section>

      <Section number="10" title="Contact Us">
        <p style={{ marginBottom: 4 }}>If you have any questions about how your data is used, please contact us:</p>
        <p style={{ margin: 0 }}>UROLINQ Integrated Care</p>
        <p style={{ margin: 0 }}>Email: info@urolinq.com</p>
        <p style={{ margin: 0 }}>Phone: +27 10 203 98 63</p>
        <p style={{ margin: 0 }}>Address: Illovo, Sandton, South Africa</p>
      </Section>
    </LegalPage>
  )
}
