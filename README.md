
# Portfolio — Éloïse McGlasson

Portfolio personnel développé avec **React et Vite**, présentant mon parcours professionnel, mes compétences techniques et mes projets de développement web.

Ce projet me permet également de mettre en pratique les bonnes pratiques de développement : organisation du code, accessibilité, tests automatisés, conteneurisation et intégration continue.

## Technologies utilisées

### Front-end

- **React 18** — Construction de l'interface utilisateur.
- **Vite 8** — Environnement de développement et compilation.
- **JavaScript / JSX** — Développement des composants.
- **React Router 7** — Navigation entre les pages.
- **Ant Design** — Composants d'interface et icônes.
- **CSS** — Mise en page et adaptation responsive.

### Environnement et outils

- **Node.js 24**
- **npm** — Gestion des dépendances.
- **Docker et Docker Compose** — Environnement de développement conteneurisé.
- **Git et GitHub** — Gestion des versions.
- **GitHub Actions** — Intégration continue.
- **Vercel** — Hébergement et déploiement.

### Qualité du code

- **ESLint** — Analyse statique du code.
- **Vitest** — Exécution des tests automatisés.
- **React Testing Library** — Tests des composants React.
- **jsdom** — Simulation de l'environnement navigateur pour les tests.

## Fonctionnalités

Le portfolio propose :

- Une présentation de mon parcours et de mes compétences.
- Une sélection de projets de développement.
- Des pages de détail accessibles depuis la liste des projets.
- Des liens vers mes profils GitHub et LinkedIn.
- Un formulaire de contact remplacé par un lien direct vers mon adresse e-mail.
- Une interface responsive adaptée aux différentes tailles d'écran.
- Une page 404 pour les URL inconnues ou les projets inexistants.

Les informations des projets sont actuellement stockées dans un fichier de données local.

## Installation et lancement

### Prérequis

Pour utiliser l'environnement Docker :

- Docker Desktop ou Docker Engine.
- Docker Compose.

Pour une installation sans Docker :

- Node.js 24.
- npm.

### Avec Docker (recommandé)

Cloner le dépôt :

```bash
git clone https://github.com/EloiseMcGlasson/portfolio.git
cd portfolio
```

Démarrer l'environnement :

```bash
docker compose up -d
```

L'application est accessible à l'adresse :

**http://localhost:5173**

L'environnement de développement utilise Vite avec le rechargement automatique des modifications.

Pour arrêter les conteneurs :

```bash
docker compose down
```

### Sans Docker

Installer les dépendances :

```bash
npm ci
```

Démarrer le serveur de développement :

```bash
npm run dev
```

Vite affiche l'adresse locale à utiliser dans le terminal.

## Tests et vérifications

Le projet dispose de plusieurs commandes pour vérifier la qualité du code.

### Analyse statique

```bash
npm run lint
```

### Tests automatisés

```bash
npm run test
```

### Compilation de production

```bash
npm run build
```

### Audit des dépendances

```bash
npm audit
```

Ces commandes peuvent également être exécutées dans le conteneur Docker :

```bash
docker compose exec portfolio npm run lint
docker compose exec portfolio npm run test
docker compose exec portfolio npm run build
```

## Intégration et déploiement continus

Le projet utilise **GitHub Actions** pour automatiser les vérifications du code.

Le workflow, défini dans `.github/workflows/ci.yml`, s'exécute lors des pushs et des pull requests.

Il réalise les opérations suivantes :

1. Installation de Node.js 24.
2. Installation des dépendances avec `npm ci`.
3. Vérification du code avec ESLint.
4. Exécution des tests avec Vitest.
5. Compilation du projet avec Vite.

Le dépôt GitHub est également connecté à **Vercel** pour le déploiement de l'application.

## Organisation du projet

```text
portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── App.jsx
│   ├── Projet.jsx
│   ├── App.css
│   └── main.jsx
├── CHANGELOG.md
├── Dockerfile.dev
├── compose.yaml
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

Les composants React sont regroupés dans `src/components/`.

Les données utilisées pour présenter les projets et les expériences sont conservées dans `src/data/`.

Le routage est configuré dans `src/main.jsx`.

## Évolutions prévues

Le portfolio continue d'évoluer.

Parmi les améliorations envisagées :

- Actualisation de ma présentation professionnelle.
- Refonte de l'affichage des compétences techniques.
- Enrichissement des fiches projets.
- Remplacement des images provisoires.
- Création d'une identité visuelle plus personnelle.
- Poursuite des améliorations d'accessibilité et du responsive.

## Historique des modifications

Les principales évolutions du projet sont documentées dans le fichier [CHANGELOG.md](CHANGELOG.md).

## Contact

**Éloïse McGlasson**

- [GitHub](https://github.com/EloiseMcGlasson)
- [LinkedIn](https://www.linkedin.com/in/elo%C3%AFse-mcglasson-866321172/)
