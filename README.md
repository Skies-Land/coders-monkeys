# 👨‍💻 CODERS MONKEYS
Application web qui permet aux développeurs front-end de partager leurs projets entre eux, de s'inspirer et de s'entraider.

Avec ce projet, je me suis d'avantage familiariser avec **React**, **Tailwind CSS** et fait une première expérience avec **TypeScript**, **Next.js**.

## ▶️ Description
**📄 Présentation**
- Cours suivie pour la réalisation de ce projet **[Remote Monkey](https://youtube.com/playlist?list=PLtKaauZVThjAe3U3AQqa-C1fLwHR48aMM&si=EH_EwWJUuE1k5gSE)**.
- Projet initialisé avec **[Next.js](https://nextjs.org/)**.
- Développé avec **[React](https://fr.react.dev/)**, **[TypeScript](https://www.typescriptlang.org/)** & **[Tailwind CSS](https://tailwindcss.com/)**.
- Projet déployer sur **[Firebase](https://firebase.google.com/)**.
###
**🎨 Design Système**
- Configuration de class Tailwind personnalisées dans le fichier **`tailwind.config`** en les déterminant via une maquette **[Figma](https://www.figma.com)**.
- Utilisation de la dépendance **[clsx](https://www.npmjs.com/package/clsx)** pour simplifie la gestion des classes CSS en fonction des propriétés du composant.
- Utilisation de la librairie **[react-icons](https://react-icons.github.io/react-icons/)** pour une intégration des icônes dans des composants React.
- Création de composants réutilisable avec configuration de plusieurs **`switch case`** pour une meilleur gestion des rendus de manière structurée et lisible, afin de centraliser la logique de décision dans un seul endroit.
- Création d'un composant de chargement (loading/spinner) animé, ajoutant un indicateur de chargement aux boutons pour offir une expérience utilisateur améliorée.
- Création des composants réutilisable **`logo`** en utilisant des SVG et **`avatar`** avec le composant **next/image** pour l'intégration des images de profil utilisateur.
- Typage des propriétés des composants avec **TypeScript** pour améliorer la maintenance et l'extensibilité.

###
**💻 Front-end**
- Création du composant **`container`** qui permet de structurer la mise en page de l'application web de manière efficace. 
- Intégration de la navigation avec **next/link** et **hooks router**, création et liaison des pages, et développement du composant **`activeLink`** pour styliser les liens actifs et améliorer l'expérience utilisateur.
- Implémentation du composant **`footer`** avec des éléments visuels, génération d'identifiants uniques via la dépendance **[uuidv4](https://www.npmjs.com/package/uuidv4)** pour la **[méthode map()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map)**.
- Isolation des liens de navigation du **`footer`** dans un composant, et développement d'une fonction permettant d'afficher, de styliser, de structurer et de conditionner les redirections des types de liens de navigation (*"interne"* ou *"externe"*) présent dans le **`footer`**
- Génération dynamique des liens du **`footer`** en combinant des tableaux de données, 
- Définition des interfaces **TypeScript** pour structurer et typer les données.
- Conditionnement du comportement des boutons en fonction des actions et liens associés.
- Création du **`layout`** pour une structure solide de l'application.
- Implémentation de l'architecture **"module-container-views"** qui est un modèle de conception couramment utilisé dans le développement web.
- Développement des composants **`hero-top`** **`featured`** qui compose la landing page.

#

## 🔎 Accès au projet - ...