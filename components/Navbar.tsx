'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/boutique', label: 'Boutique' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo">Syb Chez Vous</Link>
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={pathname === link.href ? 'active' : ''}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/devis" className={`navbar-cta ${pathname === '/devis' ? 'active' : ''}`}>
            Demander un devis
          </Link>
        </li>
      </ul>
    </nav>
  )
}
