export default function LocationCard({ title, location, mapEmbedUrl, duration, bookHref }) {
  return (
    <div style={{
      background: 'var(--bg-elevated)', border: '1px solid var(--border)',
      borderRadius: 14, overflow: 'hidden', marginBottom: 16,
    }}>
      <div style={{ padding: '16px 16px 12px' }}>
        <h3 style={{ margin: '0 0 4px', fontFamily: 'var(--display-font)', fontSize: 16, fontWeight: 600 }}>
          {title}
        </h3>
        <p style={{ margin: '0 0 8px', fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.45 }}>
          {location}
        </p>
        <p style={{ margin: 0, fontSize: 12.5, color: 'var(--accent-soft)', fontWeight: 500 }}>
          Duration: {duration}
        </p>
      </div>

      <div style={{ display: 'flex', gap: 1, height: 130 }}>
        <div style={{
          flex: 1, background: 'var(--bg)', border: '1px dashed var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: 11.5, color: 'var(--text-muted)', textAlign: 'center', padding: '0 10px' }}>
            Clinic photo coming soon
          </span>
        </div>
        <iframe
          src={mapEmbedUrl}
          style={{ flex: 1, border: 0, display: 'block', height: '100%' }}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title={title}
        />
      </div>

      <div style={{ padding: '14px 16px' }}>
        <a
          href={bookHref} target="_blank" rel="noopener noreferrer"
          style={{
            display: 'inline-block', background: 'var(--accent)', color: '#150826',
            fontWeight: 600, fontSize: 13.5, padding: '9px 18px', borderRadius: 999,
          }}
        >
          Book
        </a>
      </div>
    </div>
  )
}
