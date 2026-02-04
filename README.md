# Portfolio - KOUAKOU AKOUA ANGE JOADDANE

Portfolio professionnel moderne avec design glassmorphisme et thème clair/sombre.

## 🎨 Fonctionnalités

- ✨ Design glassmorphisme inspiré d'iOS
- 🌓 Thème clair/sombre avec transition fluide
- 📱 Responsive design (mobile, tablette, desktop)
- 🎯 Navigation fluide avec scroll automatique
- 💎 Effets de verre et transparence
- 🎭 Animations et transitions élégantes
- 🎨 Icônes Lucide React modernes

## 🚀 Installation

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Extraire les fichiers**
   ```bash
   # Assurez-vous que tous les fichiers sont dans le même dossier
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   - Le portfolio s'ouvrira automatiquement à l'adresse : `http://localhost:3000`

## 📦 Build pour production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers seront générés dans le dossier `dist/`

Pour prévisualiser la version de production :

```bash
npm run preview
```

## 🛠️ Technologies utilisées

- **React** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Outil de build rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **Lucide React** - Bibliothèque d'icônes modernes
- **PostCSS** - Transformation CSS

## 📂 Structure du projet

```
portfolio/
├── src/
│   ├── portfolio.jsx      # Composant principal du portfolio
│   ├── main.jsx           # Point d'entrée React
│   └── index.css          # Styles globaux et Tailwind
├── index.html             # Template HTML
├── package.json           # Dépendances et scripts
├── vite.config.js         # Configuration Vite
├── tailwind.config.js     # Configuration Tailwind
├── postcss.config.js      # Configuration PostCSS
└── README.md              # Documentation
```

## 🎨 Personnalisation

### Changer les couleurs

Les couleurs peuvent être modifiées dans le fichier `src/portfolio.jsx` :
- Mode clair : classes `bg-blue-50`, `bg-purple-50`, etc.
- Mode sombre : classes `bg-purple-900`, `bg-slate-900`, etc.

### Modifier le contenu

Toutes les informations (expériences, compétences, formation) sont définies dans des tableaux JavaScript au début du composant `Portfolio`.

### Ajuster le glassmorphisme

L'effet de verre est contrôlé par :
- `backdrop-blur-xl` - Intensité du flou
- `bg-white/10` - Opacité du fond (ajuster le nombre)
- `border-white/20` - Opacité de la bordure

## 🌐 Déploiement

### Netlify

1. Connectez votre dépôt Git
2. Build command : `npm run build`
3. Publish directory : `dist`

### Vercel

1. Importez votre projet
2. Vercel détectera automatiquement Vite
3. Déployez

### GitHub Pages

1. Installez `gh-pages` :
   ```bash
   npm install --save-dev gh-pages
   ```

2. Ajoutez dans `package.json` :
   ```json
   "scripts": {
     "deploy": "vite build && gh-pages -d dist"
   }
   ```

3. Déployez :
   ```bash
   npm run deploy
   ```

## 📧 Contact

- Email : akouajoaddane@gmail.com
- Téléphone : +225 07-19-12-56-23
- Localisation : Abidjan, Côte d'Ivoire

## 📝 Licence

© 2026 KOUAKOU AKOUA ANGE JOADDANE. Tous droits réservés.
# Joaddane_portfolio
