import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="page-wrapper">

        {/* HERO */}
        <section className="section" style={{ background: 'var(--creme)', textAlign: 'center', paddingTop: '8rem', paddingBottom: '6rem' }}>
          <div className="container-md">
            <div style={{
              display: 'inline-block',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--bordeaux)',
              border: '1px solid var(--bordeaux)',
              padding: '6px 18px',
              marginBottom: '2.5rem'
            }}>
              Chef privée · Événementiel · Paris & Régions
            </div>
            <h1 style={{
              fontSize: 'clamp(52px, 7vw, 88px)',
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 300,
              lineHeight: 1.05,
              marginBottom: '1.5rem',
              letterSpacing: '-0.01em'
            }}>
              La cuisine,<br />
              <em style={{ color: 'var(--bordeaux)' }}>chez vous.</em>
            </h1>
            <p style={{
              fontSize: '15px',
              color: 'var(--texte-sec)',
              fontWeight: 300,
              maxWidth: '560px',
              margin: '0 auto 3rem',
              lineHeight: 1.9,
              letterSpacing: '0.02em'
            }}>
              Je crée des expériences culinaires sur-mesure — des dîners privés aux événements d'exception — avec pour seule boussole le goût, l'émotion et le terroir.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/services" className="btn-primary">Découvrir les services</Link>
              <Link href="/devis" className="btn-secondary">Demander un devis</Link>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '4rem',
              marginTop: '4rem',
              paddingTop: '3rem',
              borderTop: '1px solid var(--border)',
              flexWrap: 'wrap'
            }}>
              {[
                { num: '+50', label: 'Événements' },
                { num: '4 ans', label: "D'expérience" },
                { num: 'Paris · Bourgogne', label: "Zones d'intervention" },
              ].map((s) => (
                <div key={s.label}>
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', fontWeight: 300, color: 'var(--bordeaux)', display: 'block' }}>{s.num}</span>
                  <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--texte-sec)' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* À PROPOS */}
        <section className="section" style={{ background: 'var(--bleu)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
              <div style={{
                aspectRatio: '3/4',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.35)' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                  <span style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginTop: '1rem' }}>Votre photo ici</span>
                </div>
                <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '60%', height: '60%', borderRight: '2px solid var(--or)', borderBottom: '2px solid var(--or)' }} />
              </div>
              <div>
                <span className="section-label">Mon parcours</span>
                <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', color: 'white', lineHeight: 1.15, marginBottom: '1.5rem' }}>
                  Sybille, chef privée<br /><em>&amp; entrepreneuse</em>
                </h2>
                <div className="divider" />
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, fontWeight: 300, marginBottom: '1.25rem' }}>
                  Née d'une passion pour les produits vrais et les tables qui rassemblent, j'ai fait de la cuisine mon territoire d'expression. Formée aux fondamentaux, affinée par l'expérience du terrain.
                </p>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, fontWeight: 300, marginBottom: '2rem' }}>
                  Avec SybChezVous, je mets mon savoir-faire au service de ceux qui veulent vivre la gastronomie autrement : chez eux, à leur rythme, avec leurs histoires.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {['Terroir', 'Transmission', 'Émotion', 'Sur-mesure', 'Excellence'].map(v => (
                    <span key={v} style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--or)', border: '1px solid rgba(201,169,110,0.4)', padding: '6px 16px' }}>{v}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES APERÇU */}
        <section className="section" style={{ background: 'white', textAlign: 'center' }}>
          <div className="container-sm" style={{ marginBottom: '3rem' }}>
            <span className="section-label" style={{ display: 'block' }}>Ce que je propose</span>
            <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', marginBottom: '1rem' }}>Mes services</h2>
            <div className="divider divider-center" />
            <p style={{ fontSize: '15px', color: 'var(--texte-sec)', fontWeight: 300, lineHeight: 1.8 }}>
              Du dîner privé au consulting, chaque prestation est pensée sur-mesure.
            </p>
          </div>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: 'var(--border)', marginBottom: '3rem' }}>
            {[
              { label: 'Chef à domicile', desc: 'Un repas gastronomique chez vous, de la mise en place au service.' },
              { label: 'Événementiel', desc: 'Dîners de gala, réceptions, mariages. Des menus qui marquent.' },
              { label: 'Cours de cuisine', desc: 'Technique, saison, inspiration — pour 2 à 6 personnes.' },
            ].map(s => (
              <div key={s.label} style={{ background: 'white', padding: '2.5rem', textAlign: 'left' }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', marginBottom: '0.75rem' }}>{s.label}</h3>
                <p style={{ fontSize: '14px', color: 'var(--texte-sec)', fontWeight: 300, lineHeight: 1.8 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/services" className="btn-secondary">Voir tous les services & tarifs</Link>
        </section>

        {/* CTA DEVIS */}
        <section className="section" style={{ background: 'var(--bordeaux)', textAlign: 'center' }}>
          <div className="container-sm">
            <span className="section-label" style={{ display: 'block' }}>Parlons de votre projet</span>
            <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', color: 'white', marginBottom: '1rem' }}>Demander un devis gratuit</h2>
            <div className="divider divider-center" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', fontWeight: 300, lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Réponse sous 48h · Devis personnalisé · Sans engagement
            </p>
            <Link href="/devis" className="btn-gold">Remplir le questionnaire</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
