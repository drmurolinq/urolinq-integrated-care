import HeroBlock from '../components/HeroBlock.jsx'
import NumberedList from '../components/NumberedList.jsx'
import SocialIcons from '../components/SocialIcons.jsx'

const STAGES = [
  'Symptoms', 'UROLINQ PRO Assessment', 'Book Consultation', 'Consultation',
  'Investigations / Imaging', 'Treatment Plan', 'Follow-up', 'Long-term Wellness',
]

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/urolinq1/' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61574915480030' },
  { label: 'X', href: 'https://x.com/urolinq' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/docmogaleb/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@urolinq' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@drurolinq' },
]

export default function WhoWeAre() {
  return (
    <div style={{ padding: '24px 20px 10px' }}>
      <HeroBlock
        image="/images/who-we-are-hero.jpg"
        alt="Patient care"
        heading="Who We Are"
      >
        <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
          At UROLINQ Integrated Care, we believe specialist urological care should be accessible,
          connected, and centred around you. Whether you choose an in-person consultation or a
          secure virtual appointment, we provide comprehensive care across every stage of your
          urological journey — from assessment and diagnosis to office-based procedures, treatment,
          and long-term follow-up.
        </p>
      </HeroBlock>

      <h2 style={{ fontFamily: 'var(--display-font)', fontSize: 16, margin: '0 0 12px', fontWeight: 600 }}>
        Your Integrated Journey
      </h2>
      <img
        src="/images/journey-infographic.jpg"
        alt="The UROLINQ Integrated Care Journey"
        loading="lazy"
        style={{ width: '100%', borderRadius: 12, border: '1px solid var(--border)', marginBottom: 16, display: 'block' }}
      />
      <NumberedList items={STAGES} />

      <h2 style={{ fontFamily: 'var(--display-font)', fontSize: 16, margin: '0 0 12px', fontWeight: 600 }}>
        Meet Our Specialist
      </h2>
      <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 14, padding: '16px', marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <div style={{
            width: 52, height: 52, borderRadius: '50%', background: 'var(--bg)',
            border: '1px dashed var(--border)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', flexShrink: 0,
          }}>
            <span style={{ fontSize: 9, color: 'var(--text-muted)', textAlign: 'center' }}>Photo</span>
          </div>
          <div>
            <h3 style={{ margin: 0, fontFamily: 'var(--display-font)', fontSize: 15.5, fontWeight: 600 }}>Dr Bogosi Mogale</h3>
            <p style={{ margin: 0, fontSize: 12, color: 'var(--accent-soft)' }}>
              Dipl. Bus. Mgmt. | BSc | MBBCh | FCS (SA) Urology
            </p>
          </div>
        </div>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
          Dr Mogale is a Specialist Urologist and HPCSA-registered Fellow of the College of
          Urologists, with over three decades of clinical, academic, and health policy experience.
          He trained across Chris Hani Baragwanath, Charlotte Maxeke-Johannesburg General, and
          Helen Joseph Hospitals before building a long-standing private urology practice in
          Johannesburg. He later served as South Africa's Senior Health Representative to the
          European Union and authored the national Aid Effectiveness Framework for Health. Dr
          Mogale founded UROLINQ to bring specialist urological care — in-person and virtual —
          into one connected, patient-centred experience.
        </p>
      </div>

      <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.55, margin: '0 0 14px' }}>
        Supported by UROLINQ PRO, our integrated digital platform, we combine evidence-based
        medicine with innovative technology to deliver personalised care, monitor outcomes, and
        keep you actively involved in your treatment. When additional expertise is needed, we
        work closely with a trusted network of specialists and healthcare professionals to ensure
        coordinated, seamless care.
      </p>
      <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.55, margin: '0 0 24px' }}>
        Our goal is simple: to provide exceptional specialist urological care through one
        connected, patient-centred experience.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
        <a
          href="tel:+27102039863"
          style={{
            background: 'var(--accent)', color: '#170A28', fontWeight: 600, fontSize: 15,
            padding: '14px', borderRadius: 12, textAlign: 'center', display: 'block',
          }}
        >
          Call Us
        </a>
        <a
          href="https://urolinq.online"
          target="_blank" rel="noopener noreferrer"
          style={{
            background: 'transparent', color: 'var(--text)', fontWeight: 600, fontSize: 15,
            padding: '14px', borderRadius: 12, border: '1px solid var(--border)', textAlign: 'center', display: 'block',
          }}
        >
          Visit Urolinq Pro
        </a>
      </div>

      <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 14, padding: '14px 16px', marginBottom: 20 }}>
        <p style={{ margin: '0 0 4px', fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Location</p>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5 }}>Illovo, Sandton, South Africa</p>
      </div>

      <SocialIcons items={SOCIALS} />
    </div>
  )
}
