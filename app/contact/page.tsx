import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="page-wrapper">

        {/* HERO */}
        <div className="page-hero">
          <span className="section-label" style={{ display: 'block' }}>Me contacter</span>
          <h1 className="page-hero-title">Restons en contact</h1>
          <p className="page-hero-sub">Une question, une idée, un projet qui germe ? Je réponds à tous les messages sous 24h.</p>
        </div>

        <section className="section" style={{ background: 'var(--creme)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>

              {/* Infos */}
              <div>
                <span className="section-label">Coordonnées</span>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 46px)', marginBottom: '1rem' }}>
                  Échangeons
                </h2>
                <div className="divider" />
                <p style={{ fontSize: '15px', color: 'var(--texte-sec)', fontWeight: 300, lineHeight: 1.9, marginBottom: '2.5rem' }}>
                  Pour un projet, un partenariat ou simplement pour en savoir plus sur mes services — je suis disponible et à l'écoute.
                </p>

                {[
                  {
                    label: 'Email',
                    value: 'contact@sybchezvous.com',
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
                    )
                  },
                  {
                    label: 'Instagram & TikTok',
                    value: '@sybchezvous',
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
                    )
                  },
                  {
                    label: "Zone d'intervention",
                    value: 'Paris · Île-de-France · Bourgogne',
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                    )
                  },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div style={{
                      width: '44px', height: '44px', flexShrink: 0,
                      border: '1px solid var(--bordeaux)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--bordeaux)'
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--texte-sec)', marginBottom: '2px' }}>{item.label}</div>
                      <div style={{ fontSize: '14px', color: 'var(--texte)' }}>{item.value}</div>
                    </div>
                  </div>
                ))}

                <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'var(--bordeaux-pale)', borderLeft: '3px solid var(--bordeaux)' }}>
                  <p style={{ fontSize: '13px', color: 'var(--bordeaux)', fontWeight: 400, lineHeight: 1.7 }}>
                    Vous avez un projet précis ? Passez directement par le <Link href="/devis" style={{ fontWeight: 500, textDecoration: 'underline', color: 'var(--bordeaux)' }}>formulaire de devis</Link> pour une réponse plus rapide et personnalisée.
                  </p>
                </div>
              </div>

              {/* Formulaire */}
              <div>
                <form action="mailto:contact@sybchezvous.com" method="post" encType="text/plain" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label>Votre nom</label>
                    <input type="text" name="nom" placeholder="Marie Dupont" />
                  </div>
                  <div className="form-group">
                    <label>Votre email</label>
                    <input type="email" name="email" placeholder="marie@exemple.com" />
                  </div>
                  <div className="form-group">
                    <label>Sujet</label>
                    <input type="text" name="sujet" placeholder="Demande d'information, partenariat..." />
                  </div>
                  <div className="form-group">
                    <label>Votre message</label>
                    <textarea name="message" placeholder="Décrivez votre demande..." style={{ minHeight: '160px' }} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>Envoyer</button>
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
