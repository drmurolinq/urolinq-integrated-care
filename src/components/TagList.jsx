export default function TagList({ items }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '0 0 20px' }}>
      {items.map((item) => (
        <span
          key={item}
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            background: 'var(--accent-dim)', color: 'var(--accent-soft)',
            fontSize: 12.5, fontWeight: 500, padding: '7px 13px', borderRadius: 999,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6.2 5 8.7 9.5 3.3" stroke="var(--accent-soft)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {item}
        </span>
      ))}
    </div>
  )
}
