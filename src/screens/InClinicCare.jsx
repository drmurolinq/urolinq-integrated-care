import HeroBlock from '../components/HeroBlock.jsx'
import TagList from '../components/TagList.jsx'
import ServiceCard from '../components/ServiceCard.jsx'

const BOOK_URL = 'https://www.urolinq.com/in-clinic-care'

const SERVICE_TAGS = [
  'Investigations & Imaging',
  "Men's Health Services",
  'Chronic Urological Care Preventive',
  'Urology & Screening',
  'Integrated Follow-Up Care',
]

export default function InClinicCare() {
  return (
    <div style={{ padding: '24px 20px 10px' }}>
      <HeroBlock
        image="/images/source-2.png"
        alt="In-clinic consultation"
        heading="UROLINQ In-Clinic Care"
      >
        <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.55, margin: '0 0 16px' }}>
          At UROLINQ Integrated Care, our in-clinic services provide comprehensive specialist
          urological care in a modern, patient-centred environment. From diagnosis and advanced
          investigations to operation room and office-based procedures and long-term follow-up,
          we deliver personalised care using the latest evidence-based techniques and technology.
        </p>
      </HeroBlock>

      <h2 style={{ fontFamily: 'var(--display-font)', fontSize: 16, margin: '0 0 10px', fontWeight: 600 }}>
        In-Clinic Services
      </h2>
      <TagList items={SERVICE_TAGS} />

      <ServiceCard title="In-Person Consultation" duration="30 min" mode="Face-to-face" price="Learn more" bookHref={BOOK_URL} />

      <div style={{ marginTop: 8, background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 14, padding: '16px 18px' }}>
        <p style={{ margin: '0 0 4px', fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Location</p>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5 }}>Illovo Sandton, Gauteng, RSA</p>
      </div>
    </div>
  )
}
