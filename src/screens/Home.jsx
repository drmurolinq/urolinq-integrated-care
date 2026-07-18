import PulseDivider from '../components/PulseDivider.jsx'
import ShareButton from '../components/ShareButton.jsx'

export default function Home({ onNavigate }) {
  return (
    <div style={{ padding: '24px 20px 10px' }}>
      <div style={{ position: 'relative', marginBottom: 34 }}>
        <img
          src="/images/home-hero.jpg"
          alt="Patient using the UROLINQ app"
          loading="eager"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
          style={{
            width: '100%', height: 170, objectFit: 'cover', borderRadius: 14,
            border: '1px solid var(--border)', display: 'block',
          }}
        />
        <div style={{
          position: 'absolute', left: 0, bottom: -22,
          width: 44, height: 44, borderRadius: 12,
          background: 'var(--bg-elevated)', border: '2px solid var(--bg)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(0,0,0,0.35)',
        }}>
          <img src="/images/logo-square.png" alt="" style={{ width: 28, height: 28, borderRadius: 6 }} />
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <p style={{
          display: 'inline-block', margin: '0 0 14px', fontSize: 12, fontWeight: 600,
          letterSpacing: '0.06em', color: 'var(--accent-soft)', background: 'var(--accent-dim)',
          padding: '5px 12px', borderRadius: 999,
        }}>
          INTEGRATED SPECIALIST UROLOGY CARE
        </p>
      </div>

      <h1 style={{
        fontFamily: 'var(--display-font)', fontSize: 30, lineHeight: 1.2,
        margin: '0 0 14px', fontWeight: 700, textAlign: 'center',
      }}>
        Specialist Urology
      </h1>
      <p style={{
        fontFamily: 'var(--display-font)', fontSize: 18, fontWeight: 700,
        whiteSpace: 'nowrap', letterSpacing: '-0.01em', textAlign: 'center',
        color: 'var(--accent-soft)', margin: '-8px 0 16px',
      }}>
        In Person. Online. Connected.
      </p>

      <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-muted)', margin: '0 0 24px', textAlign: 'center' }}>
        Access specialist urological care your way. Whether you prefer to visit our clinic in
        person or consult securely by video or telephone, UROLINQ Integrated Care connects you.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <a
          href="https://urolinq.online"
          target="_blank" rel="noopener noreferrer"
          style={{
            background: 'var(--accent)', color: '#150826', fontWeight: 600, fontSize: 15,
            padding: '14px', borderRadius: 12, textAlign: 'center', display: 'block',
          }}
        >
          Take Assessment
        </a>
        <button
          onClick={() => onNavigate('about')}
          style={{
            background: 'transparent', color: 'var(--text)', fontWeight: 600, fontSize: 15,
            padding: '14px', borderRadius: 12, border: '1px solid var(--border)',
          }}
        >
          Learn More
        </button>
      </div>

      <PulseDivider />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <button
          onClick={() => onNavigate('clinic')}
          style={{
            background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 12,
            padding: '14px 12px', color: 'var(--text)', fontWeight: 600, fontSize: 13.5, textAlign: 'center',
          }}
        >
          Clinic Service Booking
        </button>
        <button
          onClick={() => onNavigate('virtual')}
          style={{
            background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 12,
            padding: '14px 12px', color: 'var(--text)', fontWeight: 600, fontSize: 13.5, textAlign: 'center',
          }}
        >
          Virtual Service Booking
        </button>
      </div>

      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <ShareButton
          title="UROLINQ Integrated Care"
          text="Specialist urology care — in person, online, connected."
          url="https://urolinq.mobi"
          label="Share UROLINQ"
        />
      </div>
    </div>
  )
}
