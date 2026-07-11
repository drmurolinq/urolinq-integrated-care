const TABS = [
  { key: 'home', label: 'Home', icon: HomeIcon },
  { key: 'virtual', label: 'Virtual', icon: VirtualIcon },
  { key: 'clinic', label: 'In-Clinic', icon: ClinicIcon },
  { key: 'about', label: 'Who We Are', icon: PeopleIcon },
  { key: 'more', label: 'More', icon: MoreIcon },
]

export default function TabBar({ active, onChange }) {
  return (
    <nav style={{
      position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
      width: '100%', maxWidth: 480, display: 'flex',
      background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)',
      paddingBottom: 'env(safe-area-inset-bottom)', zIndex: 20,
    }}>
      {TABS.map(({ key, label, icon: Icon }) => {
        const isActive = active === key
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            aria-label={label}
            aria-current={isActive ? 'page' : undefined}
            style={{
              flex: 1, background: 'none', border: 'none',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              padding: '10px 4px 8px', color: isActive ? 'var(--accent-soft)' : 'var(--text-muted)',
            }}
          >
            <Icon active={isActive} />
            <span style={{ fontSize: 10.5, fontWeight: isActive ? 600 : 500 }}>{label}</span>
          </button>
        )
      })}
    </nav>
  )
}

function HomeIcon({ active }) {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
      <path d="M4 11.5 12 4l8 7.5" stroke={active ? 'var(--accent-soft)' : 'currentColor'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10v9h12v-9" stroke={active ? 'var(--accent-soft)' : 'currentColor'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function VirtualIcon({ active }) {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="6" width="13" height="12" rx="2" stroke={active ? 'var(--accent-soft)' : 'currentColor'} strokeWidth="1.8" />
      <path d="M16 10.5 21 7.5v9L16 13.5" stroke={active ? 'var(--accent-soft)' : 'currentColor'} strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}
function ClinicIcon({ active }) {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="9" width="16" height="11" stroke={active ? 'var(--accent-soft)' : 'currentColor'} strokeWidth="1.8" />
      <path d="M9 4h6v5H9z" stroke={active ? 'var(--accent-soft)' : 'currentColor'} strokeWidth="1.8" />
      <path d="M12 12.5v4M10 14.5h4" stroke={active ? 'var(--accent-soft)' : 'currentColor'} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
function PeopleIcon({ active }) {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8" r="2.6" stroke={active ? 'var(--accent-soft)' : 'currentColor'} strokeWidth="1.8" />
      <circle cx="16" cy="9" r="2.1" stroke={active ? 'var(--accent-soft)' : 'currentColor'} strokeWidth="1.8" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke={active ? 'var(--accent-soft)' : 'currentColor'} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14.5 14.3c2.4.3 4 2.1 4 4.7" stroke={active ? 'var(--accent-soft)' : 'currentColor'} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
function MoreIcon({ active }) {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16M4 12h16M4 18h10" stroke={active ? 'var(--accent-soft)' : 'currentColor'} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
