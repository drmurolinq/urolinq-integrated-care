import { useState } from 'react'

export default function ShareButton({ title, text, url, label = 'Share' }) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const shareData = { title, text, url }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        // user cancelled the share sheet — not an error worth surfacing
        if (err.name !== 'AbortError') console.error('Share failed:', err)
      }
      return
    }

    // Fallback for browsers without Web Share API (e.g. desktop Safari/Firefox):
    // copy the link instead
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Copy failed:', err)
    }
  }

  return (
    <button
      onClick={handleShare}
      aria-label={label}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: 'var(--bg-elevated)', border: '1px solid var(--border)',
        color: 'var(--text)', fontSize: 13, fontWeight: 600,
        padding: '9px 14px', borderRadius: 999,
      }}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <circle cx="18" cy="5" r="2.6" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="6" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="18" cy="19" r="2.6" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8.3 10.7 15.7 6.3M8.3 13.3 15.7 17.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
      {copied ? 'Link copied!' : label}
    </button>
  )
}
