export default function HeroBlock({ image, alt, heading, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ position: 'relative', marginBottom: image ? 34 : 14 }}>
        {image && (
          <img
            src={image}
            alt={alt}
            loading="eager"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
            style={{
              width: '100%', height: 150, objectFit: 'cover', borderRadius: 14,
              border: '1px solid var(--border)', display: 'block',
            }}
          />
        )}
        <div style={{
          position: image ? 'absolute' : 'static',
          left: 16, bottom: -22,
          width: 44, height: 44, borderRadius: 12,
          background: 'var(--bg-elevated)', border: image ? '2px solid var(--bg)' : '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: image ? '0 4px 14px rgba(0,0,0,0.35)' : 'none',
        }}>
          <img src="/images/logo-square.png" alt="" style={{ width: 28, height: 28, borderRadius: 6 }} />
        </div>
      </div>
      <h1 style={{ fontFamily: 'var(--display-font)', fontSize: 22, margin: '0 0 8px', fontWeight: 600 }}>{heading}</h1>
      {children}
    </div>
  )
}
