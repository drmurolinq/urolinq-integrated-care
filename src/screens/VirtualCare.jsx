import HeroBlock from '../components/HeroBlock.jsx'
import NumberedList from '../components/NumberedList.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import ShareButton from '../components/ShareButton.jsx'

const BOOK_URL_VIRTUAL = 'https://care.urolinq.online/book-online'
const BOOK_URL_EREFERRAL = 'https://care.urolinq.online/e-referral'

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
  { title: 'Virtual Consultation', duration: '30 min', mode: 'Video/Online', price: 'R 850', bookHref: BOOK_URL_VIRTUAL },
  { title: 'Follow-up Virtual Consultation', duration: '20 min', mode: 'Video/Online', price: 'R 425', bookHref: BOOK_URL_VIRTUAL },
  { title: 'Virtual Chronic Disease Management', duration: '15 min', mode: 'Video/Online', price: 'R 350', bookHref: BOOK_URL_VIRTUAL },
  { title: 'e-Referral', duration: '~1 hr', mode: 'Online submission', price: 'Billing Variable', bookHref: BOOK_URL_EREFERRAL },
]

export default function VirtualCare() {
  return (
    <div style={{ padding: '24px 20px 10px' }}>
      <HeroBlock
        image="/images/virtual-care-hero.jpg"
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
        <ServiceCard key={s.title} {...s} />
      ))}

      <div style={{ textAlign: 'center', marginTop: 8 }}>
        <ShareButton
          title="UROLINQ Virtual Care"
          text="Secure virtual urology consultations, wherever you are."
          url="https://urolinq.mobi/#virtual"
          label="Share Virtual Care"
        />
      </div>
    </div>
  )
}
