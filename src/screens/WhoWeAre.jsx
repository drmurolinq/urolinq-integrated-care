import HeroBlock from '../components/HeroBlock.jsx'
import NumberedList from '../components/NumberedList.jsx'

const STAGES = [
  'Symptoms', 'UROLINQ PRO Assessment', 'Book Consultation', 'Consultation',
  'Investigations / Imaging', 'Treatment Plan', 'Follow-up', 'Long-term Wellness',
]

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'X', href: 'https://x.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
  { label: 'TikTok', href: 'https://tiktok.com' },
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
          href="https://care.urolinq.online/"
          target="_blank" rel="noopener noreferrer"
          style={{
            background: 'transparent', color: 'var(--text)', fontWeight: 600, fontSize: 15,
            padding: '14px', borderRadius: 12, border: '1px solid var(--border)', textAlign: 'center', display: 'block',
          }}
        >
          Visit Website
        </a>
      </div>

      <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 14, padding: '14px 16px', marginBottom: 20 }}>
        <p style={{ margin: '0 0 4px', fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Location</p>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5 }}>Illovo, Sandton, South Africa</p>
      </div>

      <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
        {SOCIALS.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
             style={{
               width: 34, height: 34, borderRadius: '50%', border: '1px solid var(--border)',
               display: 'flex', alignItems: 'center', justifyContent: 'center',
               fontSize: 11, color: 'var(--text-muted)',
             }}>
            {s.label[0]}
          </a>
        ))}
      </div>
    </div>
  )
}
