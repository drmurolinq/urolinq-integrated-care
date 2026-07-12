export default function LegalPage({ title, effectiveDate, children, onBack }) {
  return (
    <div style={{ padding: '24px 20px 10px' }}>
      <button
        onClick={onBack}
        style={{
          background: 'none', border: 'none', color: 'var(--accent-soft)',
          fontSize: 13.5, fontWeight: 600, padding: 0, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 4,
        }}
      >
        ‹ Back
      </button>
      <h1 style={{ fontFamily: 'var(--display-font)', fontSize: 20, margin: '0 0 4px', fontWeight: 600 }}>{title}</h1>
      <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: '0 0 20px' }}>Effective Date: {effectiveDate}</p>
      <div style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-muted)' }}>
        {children}
      </div>
    </div>
  )
}

export function Section({ number, title, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <h2 style={{ fontFamily: 'var(--display-font)', fontSize: 15, color: 'var(--text)', fontWeight: 600, margin: '0 0 8px' }}>
        {number}. {title}
      </h2>
      {children}
    </div>
  )
}

export function BulletList({ items }) {
  return (
    <ul style={{ margin: '0 0 8px', paddingLeft: 18 }}>
      {items.map((item, i) => (
        <li key={i} style={{ marginBottom: 5 }}>{item}</li>
      ))}
    </ul>
  )
}
