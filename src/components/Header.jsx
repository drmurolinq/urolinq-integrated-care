export default function Header() {
  return (
    <header style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '14px 20px', borderBottom: '1px solid var(--border)',
      position: 'sticky', top: 0, zIndex: 10, background: 'var(--bg)',
    }}>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="12" stroke="var(--accent)" strokeWidth="1.4" />
        <path d="M8 9c3 0 3 4 5 4s2-4 5-4" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <span style={{ fontFamily: 'var(--display-font)', fontWeight: 600, letterSpacing: '0.04em', fontSize: 15 }}>
        UROLINQ
      </span>
    </header>
  )
}
