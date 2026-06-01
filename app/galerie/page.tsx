import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Pour ajouter vos photos : remplacez les placeholders par des balises <Image> Next.js
// avec vos fichiers dans le dossier /public/galerie/
// Exemple : <Image src="/galerie/photo1.jpg" alt="..." fill style={{objectFit:'cover'}} />

const categories = ['Tous', 'Dîners privés', 'Événementiel', 'Plats', 'Coulisses']

export default function Galerie() {
  return (
    <>
      <Navbar />
      <main className="page-wrapper">

        {/* HERO */}
        <div className="page-hero">
          <span className="section-label" style={{ display: 'block' }}>Le travail</span>
          <h1 className="page-hero-title">Galerie</h1>
          <p className="page-hero-sub">Une sélection de réalisations — dîners privés, événements, créations de saison.</p>
        </div>

        {/* FILTRES */}
        <section className="section-sm" style={{ background: 'white' }}>
          <div className="container">
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              {categories.map((cat, i) => (
                <span key={cat} style={{
                  fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '8px 20px', cursor: 'pointer',
                  border: i === 0 ? '1px solid var(--bordeaux)' : '1px solid var(--border)',
                  color: i === 0 ? 'var(--bordeaux)' : 'var(--texte-sec)',
                  background: i === 0 ? 'var(--bordeaux-pale)' : 'transparent',
                  transition: 'all 0.2s'
                }}>{cat}</span>
              ))}
            </div>

            {/* GRILLE PHOTOS — mosaïque asymétrique */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '300px 300px', gap: '3px' }}>
              {/* Grande photo principale */}
              <div style={{
                gridRow: '1 / 3',
                background: 'var(--bordeaux-pale)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden'
              }}>
                <PlaceholderPhoto label="Photo principale" size="large" />
              </div>
              {[2, 3, 4, 5].map(n => (
                <div key={n} style={{
                  background: n % 2 === 0 ? '#ede8e2' : '#e8e2db',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', overflow: 'hidden'
                }}>
                  <PlaceholderPhoto label={`Photo ${n}`} />
                </div>
              ))}
            </div>

            {/* Deuxième rangée */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '3px', marginTop: '3px' }}>
              {[6, 7, 8, 9].map(n => (
                <div key={n} style={{
                  height: '220px',
                  background: n % 2 === 0 ? '#f0ebe5' : '#e5dfd8',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', overflow: 'hidden'
                }}>
                  <PlaceholderPhoto label={`Photo ${n}`} />
                </div>
              ))}
            </div>

            <p style={{
              textAlign: 'center', marginTop: '2rem',
              fontSize: '13px', color: 'var(--texte-sec)', fontWeight: 300
            }}>
              📷 Pour ajouter vos photos : placez-les dans <code>/public/galerie/</code> et remplacez les placeholders par des balises <code>&lt;Image&gt;</code>.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

function PlaceholderPhoto({ label, size = 'normal' }: { label: string; size?: 'large' | 'normal' }) {
  return (
    <div style={{ textAlign: 'center', color: 'var(--texte-sec)', opacity: 0.5 }}>
      <svg width={size === 'large' ? 40 : 28} height={size === 'large' ? 40 : 28} viewBox="0 0 24 24" fill="none" stroke="var(--bordeaux)" strokeWidth="1" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
      </svg>
      <span style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginTop: '8px' }}>{label}</span>
    </div>
  )
}
