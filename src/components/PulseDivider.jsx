export default function PulseDivider() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      margin: '22px 0',
    }}>
      <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      <img
        src="/images/logo-square.png"
        alt=""
        style={{ width: 20, height: 20, borderRadius: 5, opacity: 0.55 }}
      />
      <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
    </div>
  )
}
