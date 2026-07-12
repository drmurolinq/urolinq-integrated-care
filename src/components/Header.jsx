export default function Header() {
  return (
    <header style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '14px 20px', borderBottom: '1px solid var(--border)',
      position: 'sticky', top: 0, zIndex: 10, background: 'var(--bg)',
    }}>
      <img
        src="/images/logo-square.png"
        alt="UROLINQ"
        style={{ width: 26, height: 26, borderRadius: 7, display: 'block' }}
      />
      <span style={{ fontFamily: 'var(--display-font)', fontWeight: 600, letterSpacing: '0.04em', fontSize: 15 }}>
        UROLINQ
      </span>
    </header>
  )
}
