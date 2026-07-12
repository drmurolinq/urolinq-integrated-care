export default function LocationCard({ title, location, mapEmbedUrl, duration, bookHref }) {
  return (
    <div style={{
      background: 'var(--bg-elevated)', border: '1px solid var(--border)',
      borderRadius: 14, overflow: 'hidden', marginBottom: 16,
    }}>
      <iframe
        src={mapEmbedUrl}
        width="100%"
        height="150"
        style={{ border: 0, display: 'block' }}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title={title}
      />
      <div style={{ padding: '14px 16px' }}>
        <h3 style={{ margin: '0 0 4px', fontFamily: 'var(--display-font)', fontSize: 16, fontWeight: 600 }}>
          {title}
        </h3>
        <p style={{ margin: '0 0 8px', fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.45 }}>
          {location}
        </p>
        <p style={{ margin: '0 0 12px', fontSize: 12.5, color: 'var(--accent-soft)', fontWeight: 500 }}>
          Duration: {duration}
        </p>
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
