import LegalPage, { Section, BulletList } from '../components/LegalPage.jsx'

export default function TermsOfUse({ onNavigate }) {
  return (
    <LegalPage title="Terms of Use" effectiveDate="1 August 2025" onBack={() => onNavigate('more')}>
      <p style={{ marginBottom: 20 }}>
        Welcome to UROLINQ Integrated Care. These Terms of Use govern your access to and use of
        our website, patient portal, mobile applications, digital assessment tools, virtual
        consultation services, and in-person clinical services. By accessing or using any UROLINQ
        service, you acknowledge that you have read, understood, and agree to be bound by these
        Terms of Use.
      </p>

      <Section number="1" title="Who We Are">
        <p style={{ marginBottom: 8 }}>
          UROLINQ Integrated Care is a specialist urology practice that provides comprehensive,
          patient-centred urological care through a seamless combination of:
        </p>
        <BulletList items={[
          'In-person specialist consultations',
          'Secure virtual consultations',
          'Office-based diagnostic investigations',
          'Office-based procedures',
          'Digital health tools and patient assessments',
          'Ongoing monitoring and follow-up care',
        ]} />
        <p>Our clinical services are delivered by appropriately qualified and HPCSA-registered healthcare professionals.</p>
      </Section>

      <Section number="2" title="Eligibility">
        <p style={{ marginBottom: 8 }}>You may use UROLINQ Integrated Care if:</p>
        <BulletList items={[
          'You are 18 years of age or older; or',
          'You are under 18 years of age with the consent of a parent or legal guardian.',
          'You provide accurate, complete and up-to-date personal and medical information.',
          'You access our services from a jurisdiction where we are legally permitted to provide care.',
        ]} />
      </Section>

      <Section number="3" title="Your Responsibilities">
        <p style={{ marginBottom: 8 }}>When using UROLINQ Integrated Care, you agree to:</p>
        <BulletList items={[
          'Use our services only for lawful healthcare purposes.',
          'Provide complete and accurate medical information.',
          'Keep your account credentials secure and confidential.',
          'Attend scheduled appointments or cancel within the required notice period.',
          'Follow clinical advice while recognising your right to seek a second medical opinion.',
          'Comply with these Terms of Use and our Privacy Policy.',
        ]} />
      </Section>

      <Section number="4" title="Scope of Services">
        <p style={{ marginBottom: 8 }}>UROLINQ Integrated Care offers both in-person and virtual healthcare services. Depending on your clinical condition, your care may include:</p>
        <BulletList items={[
          'Specialist consultation',
          'Diagnostic investigations and medical imaging',
          'Office-based procedures',
          'Digital symptom assessments through UROLINQ PRO',
          'Follow-up consultations',
          'Referral to other healthcare professionals or healthcare facilities where appropriate.',
        ]} />
        <p>Not every medical condition can be safely managed remotely. Where clinically necessary, we may recommend an in-person consultation, physical examination, diagnostic testing, or referral to another healthcare provider.</p>
      </Section>

      <Section number="5" title="Emergencies">
        <p style={{ marginBottom: 8 }}>UROLINQ Integrated Care does not provide emergency medical services. If you experience a medical emergency, you should immediately:</p>
        <BulletList items={[
          'Contact your local emergency medical services; or',
          'Proceed to the nearest emergency department or hospital.',
        ]} />
      </Section>

      <Section number="6" title="Personal Information">
        <p style={{ marginBottom: 8 }}>
          Your personal and health information is collected, processed, stored and protected in
          accordance with our Privacy Policy and applicable South African legislation, including
          the Protection of Personal Information Act (POPIA).
        </p>
        <p>You are responsible for ensuring that your personal information remains accurate and up to date.</p>
      </Section>

      <Section number="7" title="Fees and Payments">
        <BulletList items={[
          'Consultation fees and service charges apply to selected services.',
          'Payment must be made using our approved payment methods unless alternative arrangements have been agreed.',
          'Medical aid reimbursement is subject to the rules of your medical scheme and cannot be guaranteed by UROLINQ Integrated Care.',
          'Patients remain responsible for any fees not covered by their medical aid or insurer.',
        ]} />
      </Section>

      <Section number="8" title="Intellectual Property">
        <p style={{ marginBottom: 8 }}>
          All content available through UROLINQ Integrated Care, including text, graphics, logos,
          software, educational materials and digital assessment tools, remains the intellectual
          property of UROLINQ unless otherwise stated.
        </p>
        <p>No content may be copied, reproduced or distributed without prior written permission.</p>
      </Section>

      <Section number="9" title="Suspension or Termination">
        <p style={{ marginBottom: 8 }}>We reserve the right to suspend or terminate access to our services where:</p>
        <BulletList items={[
          'These Terms of Use are breached.',
          'False or misleading information is provided.',
          'Our systems are intentionally misused or compromised.',
          'Patient or staff safety may be affected.',
        ]} />
      </Section>

      <Section number="10" title="Limitation of Liability">
        <p style={{ marginBottom: 8 }}>While we strive to provide safe, timely and evidence-based healthcare:</p>
        <BulletList items={[
          'Clinical decisions depend on the accuracy and completeness of the information you provide.',
          'Some conditions require physical examination or additional investigations before a diagnosis can be confirmed.',
          'We cannot guarantee uninterrupted availability of our digital platforms or internet connectivity beyond our control.',
          'To the fullest extent permitted by law, UROLINQ Integrated Care shall not be liable for losses arising from incomplete information, technical failures outside our control, or failure to follow clinical advice.',
        ]} />
        <p>Nothing in these Terms limits your rights under applicable healthcare or consumer protection legislation.</p>
      </Section>

      <Section number="11" title="Changes to These Terms">
        <p>We may update these Terms of Use from time to time to reflect changes in legislation, clinical practice, technology, or our services. The latest version will always be available on our website.</p>
      </Section>

      <Section number="12" title="Contact Us">
        <p style={{ margin: 0 }}>UROLINQ Integrated Care</p>
        <p style={{ margin: 0 }}>Email: info@urolinq.com</p>
        <p style={{ margin: 0 }}>Website: www.urolinq.mobi</p>
        <p style={{ margin: 0 }}>Head Office: Illovo, Sandton, Johannesburg, South Africa</p>
      </Section>
    </LegalPage>
  )
}
