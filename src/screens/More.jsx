const LINKS = [
  { label: 'FAQs', href: 'https://www.urolinq.com/faqs' },
  { label: 'Shop (Health Supplements)', href: 'https://www.urolinq.com/shop' },
  { label: 'Contact Us', href: 'https://www.urolinq.com/contact-us' },
  { label: 'Publications', href: 'https://www.urolinq.com/publications' },
  { label: 'Privacy Policy', href: 'https://www.urolinq.com/privacy-policy' },
  { label: 'Terms of Use', href: 'https://www.urolinq.com/terms-of-use' },
]

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'X', href: 'https://x.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
  { label: 'TikTok', href: 'https://tiktok.com' },
]

export default function More() {
  const year = new Date().getFullYear()
  return (
    <div style={{ padding: '24px 20px 10px' }}>
      <h1 style={{ fontFamily: 'var(--display-font)', fontSize: 22, margin: '0 0 18px' }}>More</h1>

      <div style={{ border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden', marginBottom: 28 }}>
        {LINKS.map((l, i) => (
          <a
            key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '14px 16px', fontSize: 14, background: 'var(--bg-elevated)',
              borderBottom: i < LINKS.length - 1 ? '1px solid var(--border)' : 'none',
            }}
          >
            {l.label}
            <span style={{ color: 'var(--text-muted)' }}>›</span>
          </a>
        ))}
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
