const LINKS = [
  { label: 'FAQs', href: 'https://www.urolinq.com/faqs' },
  { label: 'Shop (Health Supplements)', href: 'https://www.urolinq.com/shop' },
  { label: 'Contact Us', href: 'https://www.urolinq.com/contact-us' },
  { label: 'Publications', href: 'https://www.urolinq.com/publications' },
  { label: 'Privacy Policy', nav: 'privacy' },
  { label: 'Terms of Use', nav: 'terms' },
]

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/urolinq1/' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61574915480030' },
  { label: 'X', href: 'https://x.com/urolinq' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/docmogaleb/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@urolinq' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@drurolinq' },
]

export default function More({ onNavigate }) {
  const year = new Date().getFullYear()
  return (
    <div style={{ padding: '24px 20px 10px' }}>
      <h1 style={{ fontFamily: 'var(--display-font)', fontSize: 22, margin: '0 0 18px' }}>More</h1>

      <div style={{ border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden', marginBottom: 28 }}>
        {LINKS.map((l, i) => {
          const rowStyle = {
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '14px 16px', fontSize: 14, background: 'var(--bg-elevated)',
            borderBottom: i < LINKS.length - 1 ? '1px solid var(--border)' : 'none',
            width: '100%', border: 'none', textAlign: 'left', color: 'var(--text)',
          }
          if (l.nav) {
            return (
              <button key={l.label} onClick={() => onNavigate(l.nav)} style={rowStyle}>
                {l.label}
                <span style={{ color: 'var(--text-muted)' }}>›</span>
              </button>
            )
          }
          return (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={rowStyle}>
              {l.label}
              <span style={{ color: 'var(--text-muted)' }}>›</span>
            </a>
          )
        })}
      </div>

      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 16 }}>
        {SOCIALS.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
             style={{
               width: 34, height: 34, borderRadius: '50%', border: '1px solid var(--border)',
               display: 'flex', alignItems: 'center', justifyContent: 'center',
               fontSize: 11, color: 'var(--text-muted)',
             }}>
            {s.label[0]}
          </a>
        ))}
      </div>

      <p style={{ textAlign: 'center', fontSize: 11.5, color: 'var(--text-muted)', margin: 0 }}>
        © {year} UROLINQ. All rights reserved.
      </p>
    </div>
  )
}
