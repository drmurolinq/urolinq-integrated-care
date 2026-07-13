const ICONS = {
  Instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  ),
  Facebook: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M14.5 8.5H16.5V5.3C16.16 5.25 15 5.15 13.65 5.15C10.8 5.15 8.85 6.9 8.85 10.1V12.7H5.7V16.3H8.85V22.85H12.55V16.3H15.6L16.1 12.7H12.55V10.5C12.55 9.45 12.85 8.5 14.5 8.5Z"
        fill="currentColor"
      />
    </svg>
  ),
  X: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 4L20 20M20 4L4 20"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      />
    </svg>
  ),
  LinkedIn: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="7.5" cy="8" r="1.3" fill="currentColor" />
      <path d="M7.5 11v6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M11.5 17.5V13c0-1.4 1-2.2 2.2-2.2 1.2 0 1.8.9 1.8 2.2v4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M11.5 11v6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  YouTube: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10.5 9.8V14.2L14.5 12L10.5 9.8Z" fill="currentColor" />
    </svg>
  ),
  TikTok: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path
        d="M14 3v10.7a3.3 3.3 0 1 1-2.6-3.2M14 3c.3 2 1.7 3.5 3.6 3.7"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  ),
}

export default function SocialIcons({ items }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'nowrap', gap: 10, justifyContent: 'center' }}>
      {items.map((s) => (
        <a
          key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
          style={{
            width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--text-muted)', flexShrink: 0,
          }}
        >
          {ICONS[s.label]}
        </a>
      ))}
    </div>
  )
}
