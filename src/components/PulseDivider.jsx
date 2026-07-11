export default function PulseDivider() {
  return (
    <svg width="100%" height="20" viewBox="0 0 300 20" preserveAspectRatio="none" style={{ display: 'block', margin: '20px 0' }}>
      <path
        d="M0 10 H110 L120 2 L130 18 L140 4 L150 16 L160 10 H300"
        fill="none" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.55"
      />
    </svg>
  )
}
