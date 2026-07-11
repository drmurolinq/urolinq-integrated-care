import PulseDivider from '../components/PulseDivider.jsx'

export default function Home({ onNavigate }) {
  return (
    <div style={{ padding: '28px 20px 10px' }}>
      <p style={{
        display: 'inline-block', margin: '0 0 14px', fontSize: 12, fontWeight: 600,
        letterSpacing: '0.06em', color: 'var(--accent-soft)', background: 'var(--accent-dim)',
        padding: '5px 12px', borderRadius: 999,
      }}>
        INTEGRATED SPECIALIST CARE
      </p>

      <h1 style={{
        fontFamily: 'var(--display-font)', fontSize: 30, lineHeight: 1.15,
        margin: '0 0 14px', fontWeight: 700,
      }}>
        Urological care,<br /><span style={{ color: 'var(--accent-soft)' }}>on your terms.</span>
      </h1>

      <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-muted)', margin: '0 0 24px' }}>
        Whether you prefer to visit our clinic or consult securely by video, UROLINQ connects you
        with HPCSA-registered urologists for diagnosis, treatment, and ongoing care.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button
          onClick={() => onNavigate('virtual')}
          style={{
            background: 'var(--accent)', color: '#170A28', fontWeight: 600, fontSize: 15,
            padding: '14px', borderRadius: 12, border: 'none',
          }}
        >
          Book Virtual Consultation
        </button>
        <button
          onClick={() => onNavigate('clinic')}
          style={{
            background: 'transparent', color: 'var(--text)', fontWeight: 600, fontSize: 15,
            padding: '14px', borderRadius: 12, border: '1px solid var(--border)',
          }}
        >
          Book In-Clinic Visit
        </button>
      </div>

      <PulseDivider />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <Highlight label="Patient Satisfaction" value="Assured" />
        <Highlight label="Support" value="Always Available" />
      </div>
    </div>
  )
}

function Highlight({ label, value }) {
  return (
    <div style={{ background: 'var(--bg-elevated)', borderRadius: 12, padding: '14px 16px', border: '1px solid var(--border)' }}>
      <p style={{ margin: '0 0 4px', fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</p>
      <p style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>{value}</p>
    </div>
  )
}
