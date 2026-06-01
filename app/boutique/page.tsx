import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Boutique() {
  return (
    <>
      <Navbar />
      <main className="page-wrapper">

        {/* HERO */}
        <div className="page-hero">
          <span className="section-label" style={{ display: 'block' }}>La boutique</span>
          <h1 className="page-hero-title">Prochainement</h1>
          <p className="page-hero-sub">Formations en ligne, carnets de recettes, guides saisonniers — l'espace boutique arrive bientôt.</p>
        </div>

        {/* TEASER */}
        <section className="section" style={{ background: 'var(--creme)' }}>
          <div className="container-sm">

            {/* Produits à venir */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2px', background: 'var(--border)', marginBottom: '4rem' }}>
              {[
                { title: 'Formation en ligne', desc: 'Maîtrisez les techniques fondamentales depuis chez vous.', emoji: '🎓' },
                { title: 'Carnet de recettes', desc: 'Mes recettes signature, saison par saison.', emoji: '📖' },
                { title: 'Guide du batch cooking', desc: 'Manger bien toute la semaine en 2h le dimanche.', emoji: '🥗' },
              ].map(p => (
                <div key={p.title} style={{
                  background: 'white',
                  padding: '2.5rem',
                  textAlign: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--or)', color: 'white',
                    fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase',
                    padding: '4px 14px', whiteSpace: 'nowrap'
                  }}>Bientôt disponible</div>
                  <div style={{ fontSize: '32px', marginBottom: '1rem', marginTop: '0.5rem' }}>{p.emoji}</div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', marginBottom: '0.75rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--texte-sec)', fontWeight: 300, lineHeight: 1.8 }}>{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Capture email */}
            <div style={{
              border: '1px solid var(--border)',
              padding: '3.5rem',
              background: 'white',
              textAlign: 'center'
            }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '32px', fontWeight: 300, marginBottom: '0.75rem' }}>
                Être prévenu·e en avant-première
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--texte-sec)', fontWeight: 300, lineHeight: 1.8, marginBottom: '2rem' }}>
                Laissez votre email — vous serez les premiers informés du lancement, avec une offre exclusive.
              </p>
              <div style={{ display: 'flex', maxWidth: '420px', margin: '0 auto', gap: 0 }}>
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  style={{
                    flex: 1,
                    border: '1px solid var(--border)',
                    borderRight: 'none',
                    padding: '12px 16px',
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '13px',
                    background: 'var(--creme)',
                    outline: 'none',
                    color: 'var(--texte)'
                  }}
                />
                <button style={{
                  background: 'var(--bordeaux)',
                  color: 'white',
                  border: '1px solid var(--bordeaux)',
                  padding: '12px 20px',
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}>M'alerter</button>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
