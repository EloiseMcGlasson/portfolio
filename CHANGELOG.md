# Changelog

Ce fichier retrace les principales évolutions du portfolio.

## [Non versionné] — 30 octobre 2026

Reprise d'un projet d'école Ada Tech School démarré en 2024.

### Infrastructure et environnement de développement

- Adaptation de l'environnement Docker au développement avec Node.js 24.
- Correction de l'installation des dépendances lors du premier démarrage du conteneur.
- Configuration de la surveillance des fichiers Vite pour le développement sous Docker Desktop et Windows.
- Mise à jour de la configuration Node.js sur Vercel pour rétablir le déploiement.

### Qualité et automatisation

- Mise en place de Vitest et React Testing Library.
- Ajout de tests pour la page 404.
- Mise en place d'un workflow GitHub Actions exécutant ESLint, les tests et le build.
- Suppression des dépendances inutilisées `localforage`, `match-sorter` et `sort-by`.
- Vérification des dépendances avec `npm audit` : aucune vulnérabilité détectée.

### Navigation et structure React

- Ajout d'une page 404 pour les routes inconnues et les projets inexistants.
- Conservation du header et du footer sur les pages d'erreur.
- Remplacement de la balise `<body>` du composant principal par une balise `<main>`.
- Vérification de la configuration des routes et de la structure des pages.

### Accessibilité et composants

- Correction des liens externes dans le header, le footer, la barre latérale et les pages de projets.
- Ajout de libellés accessibles aux liens représentés uniquement par des icônes.
- Amélioration de la hiérarchie des titres sur les pages de projets.
- Nettoyage du JSX et suppression de blocs commentés devenus inutiles.
- Remplacement de la barre de niveau d'anglais par le résultat TOEIC Listening & Reading : 915/990, niveau B2.
- Remplacement du bouton inactif de soutien par un lien vers LinkedIn.

### Styles et responsive

- Réorganisation complète de `App.css` en sections commentées.
- Regroupement des media queries.
- Correction des sélecteurs CSS devenus obsolètes.
- Suppression des styles associés aux anciennes barres de langues.
- Amélioration de l'affichage des projets sur les petits écrans.
- Correction de l'espacement et de la hauteur du header mobile pour éviter le débordement du bouton de contact.

### Référencement

- Définition de la langue française dans `index.html`.
- Amélioration du titre du document.
- Ajout d'une description destinée aux moteurs de recherche.

### Validation

- Vérifications ESLint, Vitest et build Vite réussies.
- Synchronisation des commits avec GitHub.
- Workflow GitHub Actions validé.
- Déploiement Vercel confirmé opérationnel.

### À poursuivre

- Actualisation de la présentation professionnelle.
- Révision des compétences techniques et suppression des barres de pourcentage arbitraires.
- Mise à jour des descriptions des projets et des expériences.
- Remplacement des images provisoires et du favicon Vite.
- Poursuite des améliorations d'accessibilité et du responsive.