export default function NumberedList({ items }) {
  return (
    <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 20px' }}>
      {items.map((item, i) => (
        <li
          key={item}
          style={{
            display: 'flex', alignItems: 'flex-start', gap: 12,
            padding: '9px 0',
            borderBottom: i < items.length - 1 ? '1px solid var(--border)' : 'none',
          }}
        >
          <span style={{
            width: 22, height: 22, borderRadius: '50%', background: 'var(--accent-dim)',
            color: 'var(--accent-soft)', fontSize: 11.5, fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            marginTop: 1,
          }}>
            {i + 1}
          </span>
          <span style={{ fontSize: 13.5, lineHeight: 1.5 }}>{item}</span>
        </li>
      ))}
    </ol>
  )
}
