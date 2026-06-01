import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Devis() {
  return (
    <>
      <Navbar />
      <main className="page-wrapper">

        {/* HERO */}
        <div className="page-hero">
          <span className="section-label" style={{ display: 'block' }}>Parlons de votre projet</span>
          <h1 className="page-hero-title">Demander un devis</h1>
          <p className="page-hero-sub">Remplissez ce questionnaire et je reviens vers vous sous 48h avec une proposition personnalisée.</p>
        </div>

        {/* FORMULAIRE */}
        <section className="section" style={{ background: 'var(--bordeaux)' }}>
          <div className="container-sm">
            <form
              action="mailto:contact@sybchezvous.com"
              method="post"
              encType="text/plain"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}
            >
              {/* Identité */}
              <div className="form-group form-dark">
                <label style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Prénom & nom *</label>
                <input type="text" name="nom" placeholder="Marie Dupont" required style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontFamily: 'Jost, sans-serif', fontSize: '14px', fontWeight: 300, padding: '12px 16px', outline: 'none', width: '100%' }} />
              </div>
              <div className="form-group form-dark">
                <label style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Email *</label>
                <input type="email" name="email" placeholder="marie@exemple.com" required style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontFamily: 'Jost, sans-serif', fontSize: '14px', fontWeight: 300, padding: '12px 16px', outline: 'none', width: '100%' }} />
              </div>
              <div className="form-group form-dark">
                <label style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Téléphone</label>
                <input type="tel" name="telephone" placeholder="+33 6 00 00 00 00" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontFamily: 'Jost, sans-serif', fontSize: '14px', fontWeight: 300, padding: '12px 16px', outline: 'none', width: '100%' }} />
              </div>
              <div className="form-group form-dark">
                <label style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Date envisagée</label>
                <input type="date" name="date" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontFamily: 'Jost, sans-serif', fontSize: '14px', fontWeight: 300, padding: '12px 16px', outline: 'none', width: '100%', colorScheme: 'dark' }} />
              </div>

              {/* Prestation */}
              <div className="form-group form-dark">
                <label style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Type de prestation *</label>
                <select name="type" required style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontFamily: 'Jost, sans-serif', fontSize: '14px', fontWeight: 300, padding: '12px 16px', outline: 'none', width: '100%', WebkitAppearance: 'none' }}>
                  <option value="" disabled>Choisissez...</option>
                  <option>Dîner privé à domicile</option>
                  <option>Réception & événementiel</option>
                  <option>Cours de cuisine</option>
                  <option>Meal prep / batch cooking</option>
                  <option>Consulting restaurant</option>
                  <option>Création de contenu</option>
                  <option>Autre</option>
                </select>
              </div>
              <div className="form-group form-dark">
                <label style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Nombre de personnes</label>
                <select name="personnes" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontFamily: 'Jost, sans-serif', fontSize: '14px', fontWeight: 300, padding: '12px 16px', outline: 'none', width: '100%', WebkitAppearance: 'none' }}>
                  <option value="" disabled>Choisissez...</option>
                  <option>1–4 personnes</option>
                  <option>5–10 personnes</option>
                  <option>11–20 personnes</option>
                  <option>21–50 personnes</option>
                  <option>Plus de 50 personnes</option>
                </select>
              </div>
              <div className="form-group form-dark">
                <label style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Lieu</label>
                <input type="text" name="lieu" placeholder="Ville, département..." style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontFamily: 'Jost, sans-serif', fontSize: '14px', fontWeight: 300, padding: '12px 16px', outline: 'none', width: '100%' }} />
              </div>
              <div className="form-group form-dark">
                <label style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Budget indicatif</label>
                <select name="budget" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontFamily: 'Jost, sans-serif', fontSize: '14px', fontWeight: 300, padding: '12px 16px', outline: 'none', width: '100%', WebkitAppearance: 'none' }}>
                  <option value="" disabled>Choisissez...</option>
                  <option>Moins de 500€</option>
                  <option>500€ – 1 500€</option>
                  <option>1 500€ – 3 000€</option>
                  <option>3 000€ – 5 000€</option>
                  <option>Plus de 5 000€</option>
                  <option>Je ne sais pas encore</option>
                </select>
              </div>

              {/* Options */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '1rem' }}>Services souhaités</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {['Courses incluses', 'Service en salle', 'Menu dégustation', 'Accords mets & vins', 'Régimes spécifiques', 'Animation culinaire'].map(opt => (
                    <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <input type="checkbox" name="options" value={opt} style={{ accentColor: 'var(--or)', width: '16px', height: '16px' }} />
                      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', fontWeight: 300 }}>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '8px' }}>Décrivez votre projet</label>
                <textarea
                  name="message"
                  placeholder="Contexte, envies particulières, contraintes alimentaires, ambiance recherchée..."
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontFamily: 'Jost, sans-serif', fontSize: '14px', fontWeight: 300, padding: '14px 16px', outline: 'none', width: '100%', minHeight: '120px', resize: 'vertical', lineHeight: 1.7 }}
                />
              </div>

              {/* Submit */}
              <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <button type="submit" className="btn-gold">Envoyer ma demande</button>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>
                  Réponse sous 48h · Devis gratuit et sans engagement
                </span>
              </div>
            </form>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
