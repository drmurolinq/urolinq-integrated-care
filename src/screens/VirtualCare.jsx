import HeroBlock from '../components/HeroBlock.jsx'
import NumberedList from '../components/NumberedList.jsx'
import ServiceCard from '../components/ServiceCard.jsx'

const BOOK_URL = 'https://www.urolinq.com/virtual-care'

const FLOW_STEPS = [
  "You'll need a smartphone, tablet, or computer",
  'Book your consultation',
  'Complete pre-visit form (optional)',
  'Join the virtual consultation',
  'Receive your care plan',
]

const BENEFITS = [
  'Save Time',
  'Location Freedom',
  'Cost Effective',
  'Secure & Private',
  'Comfortable Environment',
  'Flexible Scheduling',
]

const SERVICES = [
  { title: 'Virtual Consultation', duration: '30 min', mode: 'Video/Online', price: 'R 850' },
  { title: 'Follow-up Virtual Consultation', duration: '20 min', mode: 'Video/Online', price: 'R 425' },
  { title: 'Virtual Chronic Disease Management', duration: '15 min', mode: 'Video/Online', price: 'R 350' },
  { title: 'e-Referral', duration: '~1 hr', mode: 'Online submission', price: 'Billing Variable' },
]

export default function VirtualCare() {
  return (
    <div style={{ padding: '24px 20px 10px' }}>
      <HeroBlock
        image="/images/source-1.png"
        alt="Virtual consultation"
        heading="How UROLINQ Virtual Care Flows"
      >
        <NumberedList items={FLOW_STEPS} />
      </HeroBlock>

      <h2 style={{ fontFamily: 'var(--display-font)', fontSize: 17, margin: '0 0 10px', fontWeight: 600 }}>
        Why Virtual Consultation
      </h2>
      <NumberedList items={BENEFITS} />

      <h2 style={{ fontFamily: 'var(--display-font)', fontSize: 17, margin: '0 0 10px', fontWeight: 600 }}>
        Book a Session
      </h2>
      {SERVICES.map((s) => (
        <ServiceCard key={s.title} {...s} bookHref={BOOK_URL} />
      ))}
    </div>
  )
}
