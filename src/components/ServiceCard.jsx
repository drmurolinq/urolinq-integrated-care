export default function ServiceCard({ title, duration, mode, price, bookHref }) {
  return (
    <div style={{
      background: 'var(--bg-elevated)', border: '1px solid var(--border)',
      borderRadius: 14, padding: '16px 18px', marginBottom: 12,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
        <div>
          <h3 style={{ margin: '0 0 4px', fontFamily: 'var(--display-font)', fontSize: 16, fontWeight: 600 }}>{title}</h3>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--text-muted)' }}>{duration} · {mode}</p>
        </div>
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent-soft)', whiteSpace: 'nowrap' }}>{price}</span>
      </div>
      <a
        href={bookHref} target="_blank" rel="noopener noreferrer"
        style={{
          display: 'inline-block', marginTop: 12, background: 'var(--accent)', color: '#170A28',
          fontWeight: 600, fontSize: 13.5, padding: '9px 18px', borderRadius: 999,
        }}
      >
        Book
      </a>
    </div>
  )
}
