# SybChezVous — Site officiel

Site vitrine de SybChezVous, construit avec **Next.js 14** + TypeScript.

---

## Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm run dev
# → http://localhost:3000

# 3. Builder pour la production
npm run build
npm run start
```

---

## Structure des pages

```
app/
├── page.tsx          → / (Accueil)
├── services/         → /services
├── galerie/          → /galerie
├── boutique/         → /boutique
├── devis/            → /devis
└── contact/          → /contact

components/
├── Navbar.tsx        → Navigation commune
└── Footer.tsx        → Pied de page commun
```

---

## Modifier le contenu

### Textes
Tous les textes sont directement dans les fichiers `.tsx` de chaque page. Cherchez le texte que vous voulez changer et modifiez-le directement.

### Tarifs (page Services)
Dans `app/services/page.tsx`, trouvez le tableau `const services = [...]` et modifiez les champs `price` et `detail`.

### Ajouter des photos (Galerie)
1. Placez vos photos dans `/public/galerie/`
2. Dans `app/galerie/page.tsx`, remplacez les composants `<PlaceholderPhoto>` par :
```tsx
import Image from 'next/image'
// Puis :
<Image src="/galerie/votre-photo.jpg" alt="Description" fill style={{ objectFit: 'cover' }} />
```

### Logo
Placez votre logo dans `/public/logo.png` et dans `components/Navbar.tsx`, remplacez :
```tsx
<Link href="/" className="navbar-logo">Syb Chez Vous</Link>
```
par :
```tsx
import Image from 'next/image'
<Link href="/"><Image src="/logo.png" alt="SybChezVous" width={140} height={40} /></Link>
```

### Email de contact
Recherchez `contact@sybchezvous.com` dans les fichiers et remplacez par votre email réel.

---

## Déploiement sur Vercel (recommandé — gratuit)

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Importez ce projet depuis GitHub
3. Vercel détecte Next.js automatiquement → **Deploy**
4. Connectez votre domaine `sybchezvous.com` dans les settings Vercel

---

## Couleurs & typographie

Les variables CSS sont dans `app/globals.css` :
```css
--bordeaux: #6B1F2A;
--bleu: #1C3557;
--or: #C9A96E;
--creme: #FAF8F5;
```

Polices : **Cormorant Garamond** (titres) + **Jost** (corps de texte).
