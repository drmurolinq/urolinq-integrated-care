import HeroBlock from '../components/HeroBlock.jsx'
import TagList from '../components/TagList.jsx'
import LocationCard from '../components/LocationCard.jsx'

const BOOK_URL = 'https://www.urolinq.com/in-clinic-care'

const SERVICE_TAGS = [
  'Investigations & Imaging',
  "Men's Health Services",
  'Chronic Urological Care Preventive',
  'Urology & Screening',
  'Integrated Follow-Up Care',
]

const LOCATIONS = [
  {
    title: 'Consultation - Medgate Day Hospital',
    location: 'Advanced Medgate Day Hospital, Helderkruin, Roodepoort',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.755193553043!2d27.8677953!3d-26.1384139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e959f7a3317dfb3%3A0xd7532d514d1e8780!2sAdvanced%20Medgate%20Day%20Hospital!5e1!3m2!1sen!2sza!4v1783849916755!5m2!1sen!2sza',
    duration: '45 min',
  },
  {
    title: 'Consultation - Apex SurgiCentre',
    location: 'Apex SurgiCentre - Soweto Healthcare Hub, Soweto',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.4513200238143!2d27.891670799999996!3d-26.262705299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a7b81b0625df%3A0x66f56445ddc8a968!2sSoweto%20Healthcare%20Hub%20contact%20number!5e1!3m2!1sen!2sza!4v1783850246974!5m2!1sen!2sza',
    duration: '45 min',
  },
]

export default function InClinicCare() {
  return (
    <div style={{ padding: '24px 20px 10px' }}>
      <HeroBlock
        image="/images/clinic-care-hero.jpg"
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

      <h2 style={{ fontFamily: 'var(--display-font)', fontSize: 16, margin: '0 0 10px', fontWeight: 600 }}>
        Consultation Locations
      </h2>
      {LOCATIONS.map((loc) => (
        <LocationCard key={loc.title} {...loc} bookHref={BOOK_URL} />
      ))}
    </div>
  )
}
