import ServiceCard from '../components/ServiceCard.jsx'

// NOTE: replace with exact Wix Bookings URL once confirmed.
const BOOK_URL = 'https://www.urolinq.com/in-clinic-care'

const SERVICES = [
  { title: 'In-Person Consultation', duration: '30 min', mode: 'Face-to-face', price: 'From Learn more' },
]

export default function InClinicCare() {
  return (
    <div style={{ padding: '24px 20px 10px' }}>
      <h1 style={{ fontFamily: 'var(--display-font)', fontSize: 22, margin: '0 0 6px' }}>In-Clinic Care</h1>
      <p style={{ fontSize: 13.5, color: 'var(--text-muted)', margin: '0 0 20px', lineHeight: 1.5 }}>
        Comprehensive, hands-on assessment and treatment with an HPCSA-registered specialist urologist.
      </p>
      {SERVICES.map((s) => (
        <ServiceCard key={s.title} {...s} bookHref={BOOK_URL} />
      ))}

      <div style={{ marginTop: 8, background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 14, padding: '16px 18px' }}>
        <p style={{ margin: '0 0 4px', fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Location</p>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5 }}>Illovo Sandton, Gauteng, RSA</p>
      </div>
    </div>
  )
}
