export default function HeroBlock({ image, alt, heading, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ position: 'relative', marginBottom: 34 }}>
        <img
          src={image}
          alt={alt}
          loading="eager"
          style={{
            width: '100%', height: 150, objectFit: 'cover', borderRadius: 14,
            border: '1px solid var(--border)', display: 'block',
          }}
        />
        <div style={{
          position: 'absolute', left: 16, bottom: -22,
          width: 44, height: 44, borderRadius: '50%',
          background: 'var(--bg-elevated)', border: '2px solid var(--bg)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
            <circle cx="13" cy="13" r="12" stroke="var(--accent)" strokeWidth="1.4" />
            <path d="M8 9c3 0 3 4 5 4s2-4 5-4" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <h1 style={{ fontFamily: 'var(--display-font)', fontSize: 22, margin: '0 0 8px', fontWeight: 600 }}>{heading}</h1>
      {children}
    </div>
  )
}
