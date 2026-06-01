import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <Link href="/" className="footer-logo">Syb Chez Vous</Link>
      <ul className="footer-links">
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/galerie">Galerie</Link></li>
        <li><Link href="/boutique">Boutique</Link></li>
        <li><Link href="/devis">Devis</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <div className="footer-social">
        <a href="https://instagram.com/sybchezvous" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
          </svg>
        </a>
        <a href="https://tiktok.com/@sybchezvous" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
          </svg>
        </a>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} SybChezVous · sybchezvous.com</p>
    </footer>
  )
}
