import PulseDivider from '../components/PulseDivider.jsx'

const STAGES = [
  'Symptoms', 'UROLINQ PRO Assessment', 'Book Consultation', 'Consultation',
  'Investigations / Imaging', 'Treatment Plan', 'Follow-up', 'Long-term Wellness',
]

export default function WhoWeAre() {
  return (
    <div style={{ padding: '24px 20px 10px' }}>
      <img
        src="/images/patient-care.png"
        alt="Patient receiving urological care"
        loading="lazy"
        decoding="async"
        style={{ width: '100%', borderRadius: 12, marginBottom: 18, objectFit: 'cover', border: '1px solid var(--border)', display: 'block' }}
      />

      <h1 style={{ fontFamily: 'var(--display-font)', fontSize: 22, margin: '0 0 12px' }}>Who We Are</h1>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)', margin: '0 0 8px' }}>
        UROLINQ Integrated Care believes specialist urological care should be accessible, connected,
        and centred around you — whether you choose an in-person consultation or a secure virtual
        appointment.
      </p>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)' }}>
        Supported by UROLINQ PRO, our integrated digital platform, we combine specialist expertise
        with in-person and virtual care, advanced technology, and a patient-centred approach.
      </p>

      <PulseDivider />

      <h2 style={{ fontFamily: 'var(--display-font)', fontSize: 16, margin: '0 0 12px' }}>Your Integrated Journey</h2>
      <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {STAGES.map((stage, i) => (
          <li key={stage} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 0', borderBottom: i < STAGES.length - 1 ? '1px solid var(--border)' : 'none' }}>
            <span style={{
              width: 24, height: 24, borderRadius: '50%', background: 'var(--accent-dim)',
              color: 'var(--accent-soft)', fontSize: 11, fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>{i + 1}</span>
            <span style={{ fontSize: 13.5 }}>{stage}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
