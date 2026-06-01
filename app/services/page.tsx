import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const services = [
  {
    icon: '◇',
    name: 'Chef à domicile',
    desc: 'Un repas gastronomique chez vous, de la mise en place au service. Je gère les courses, la cuisine et la présentation — vous profitez pleinement de vos invités.',
    price: 'À partir de 150€',
    detail: 'Par personne · selon menu et déplacement',
    tag: null,
  },
  {
    icon: '◇',
    name: 'Événementiel & réceptions',
    desc: 'Dîners de gala, anniversaires, mariages, séminaires. Menus complets, coordination d'équipe, buffets et cocktails dînatoires.',
    price: 'Sur devis',
    detail: 'Selon nombre de convives et prestations',
    tag: 'Populaire',
  },
  {
    icon: '◇',
    name: 'Consulting restaurant',
    desc: 'Audit de carte, développement de concepts, formation d'équipe, optimisation des process. Pour les restaurateurs qui veulent évoluer.',
    price: 'À partir de 800€',
    detail: 'Par journée de consulting',
    tag: null,
  },
  {
    icon: '◇',
    name: 'Création de contenu',
    desc: 'Recettes photographiées, vidéos culinaires, présence Instagram & TikTok. Développement de votre univers de marque autour de la cuisine.',
    price: 'À partir de 400€',
    detail: 'Par journée de shooting',
    tag: null,
  },
  {
    icon: '◇',
    name: 'Cours de cuisine privés',
    desc: 'Cours à domicile pour particuliers ou petits groupes. Technique, saisonnalité, inspiration — j'adapte le contenu à votre niveau et vos envies.',
    price: 'À partir de 200€',
    detail: 'Par session de 3h · 2 à 6 personnes',
    tag: null,
  },
  {
    icon: '◇',
    name: 'Meal prep & batch cooking',
    desc: 'Préparation de repas pour la semaine dans votre cuisine. Sain, équilibré, fait maison — sans y passer vos soirées.',
    price: 'À partir de 120€',
    detail: 'Par session · selon nombre de personnes',
    tag: null,
  },
]

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="page-wrapper">

        {/* HERO */}
        <div className="page-hero">
          <span className="section-label" style={{ display: 'block' }}>Ce que je propose</span>
          <h1 className="page-hero-title">Services & tarifs</h1>
          <p className="page-hero-sub">Chaque prestation est pensée sur-mesure. Les tarifs indiqués sont des bases — un devis personnalisé est toujours disponible.</p>
        </div>

        {/* GRILLE SERVICES */}
        <section className="section" style={{ background: 'white' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2px', background: 'var(--border)' }}>
              {services.map((s) => (
                <div key={s.name} style={{ background: 'white', padding: '2.5rem', position: 'relative' }}>
                  {s.tag && (
                    <span style={{
                      position: 'absolute', top: '1.5rem', right: '1.5rem',
                      fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase',
                      background: 'var(--bordeaux-pale)', color: 'var(--bordeaux)',
                      padding: '4px 12px'
                    }}>{s.tag}</span>
                  )}
                  <div style={{
                    width: '44px', height: '44px',
                    border: '1px solid var(--bordeaux)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.5rem', color: 'var(--bordeaux)', fontSize: '18px'
                  }}>◇</div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', marginBottom: '0.75rem' }}>{s.name}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--texte-sec)', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem' }}>{s.desc}</p>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', color: 'var(--bordeaux)', fontWeight: 300 }}>{s.price}</div>
                  <div style={{ fontSize: '12px', color: 'var(--texte-sec)', marginTop: '4px', letterSpacing: '0.03em' }}>{s.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NOTE TARIFAIRE */}
        <section className="section-sm" style={{ background: 'var(--creme)', textAlign: 'center' }}>
          <div className="container-sm">
            <p style={{ fontSize: '14px', color: 'var(--texte-sec)', fontWeight: 300, lineHeight: 1.9, marginBottom: '2rem' }}>
              Les tarifs indiqués sont des bases indicatives. Chaque projet est unique — frais de déplacement, nombre de personnes, complexité du menu et options supplémentaires sont évalués lors du devis personnalisé.
            </p>
            <Link href="/devis" className="btn-primary">Demander un devis gratuit</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
