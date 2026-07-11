import ServiceCard from '../components/ServiceCard.jsx'

// NOTE: bookHref currently points to the site's virtual-care booking page.
// Replace with the exact Wix Bookings URL per service once confirmed.
const BOOK_URL = 'https://www.urolinq.com/virtual-care'

const SERVICES = [
  { title: 'Virtual Consultation', duration: '30 min', mode: 'Video/Online', price: 'R 850' },
  { title: 'Follow-up Virtual Consultation', duration: '20 min', mode: 'Video/Online', price: 'R 425' },
  { title: 'Virtual Chronic Disease Management', duration: '15 min', mode: 'Video/Online', price: 'R 350' },
  { title: 'e-Referral', duration: '~1 hr', mode: 'Online submission', price: 'Billing Variable' },
]

export default function VirtualCare() {
  return (
    <div style={{ padding: '24px 20px 10px' }}>
      <h1 style={{ fontFamily: 'var(--display-font)', fontSize: 22, margin: '0 0 6px' }}>Virtual Care</h1>
      <p style={{ fontSize: 13.5, color: 'var(--text-muted)', margin: '0 0 20px', lineHeight: 1.5 }}>
        Secure consultations from wherever you are. Ideal for initial assessments, follow-ups, and ongoing management.
      </p>
      {SERVICES.map((s) => (
        <ServiceCard key={s.title} {...s} bookHref={BOOK_URL} />
      ))}
    </div>
  )
}
