# 👨‍💻 CODERS MONKEYS
Application web qui permet aux développeurs front-end de partager leurs projets entre eux, de s'inspirer et de s'entraider.

Avec ce projet, je me suis d'avantage familiariser avec **React**, **Tailwind CSS** et fait une première expérience avec **TypeScript**, **Next.js** et **Firebase**.

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
- Création des composants réutilisable **`Logo`** en utilisant des SVG et **`Avatar`** avec le composant **next/image** pour l'intégration des images de profil utilisateur.
- Typage des propriétés des composants avec **TypeScript** pour améliorer la maintenance et l'extensibilité.
- Développement d'un design système pour les champs de formulaire avec composants réutilisables.

###
**💻 Front-end**
- Création du composant **`Container`** qui permet de structurer la mise en page de l'application web de manière efficace. 
- Intégration de la navigation avec **next/link** et **hooks router**, création et liaison des pages, et développement du composant **`ActiveLink`** pour styliser les liens actifs et améliorer l'expérience utilisateur.
- Implémentation du composant **`Footer`** avec des éléments visuels, génération d'identifiants uniques via la dépendance **[uuidv4](https://www.npmjs.com/package/uuidv4)** pour la **[méthode map()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map)**.
- Isolation des liens de navigation du **`Footer`** dans un composant, et développement d'une fonction permettant d'afficher, de styliser, de structurer et de conditionner les redirections des types de liens de navigation (*"interne"* ou *"externe"*) présent dans le **`Footer`**
- Génération dynamique des liens du **`Footer`** en combinant des tableaux de données, 
- Définition des interfaces **TypeScript** pour structurer et typer les données.
- Conditionnement du comportement des boutons en fonction des actions et liens associés.
- Création du **`Layout`** pour une structure solide de l'application.
- Implémentation d'une side bar dynamique dans le commosant **`Layout`** pour la gestion de l'espace membre.
- Implémentation de l'architecture **"module-container-views"** qui est un modèle de conception couramment utilisé dans le développement web.
- Développement des composants **`HeroTopView`**, **`Featuredview`**, **`CodersMonkeysSlackView`**, **`CurrentCourseCtaView`**, **`HighlightListView`** et **`CallToActionView`** qui composent la landing page.
- Développement et implémentation des composants d'authentification (*connexion / inscription / récupération de mot de passe*).
- Ajout d'intéractivité avec nagivation facilité dans les pages d'authentification avec le composant **`breadcrumbs`** fil d'Ariane.
- Installation et configuration de **[react-hook-form](https://react-hook-form.com/)** pour la création de formulaire avancé.

###
**💻 Firebase**
- Mise en place de l'authentification avec **[Firebase](https://firebase.google.com/)**, gestion des erreurs optimisée via **[react-hook-form](https://react-hook-form.com/)**, isolation de la logique métier, création d'un système de notifications animées, et développement d'un custom hook pour gérer les valeurs booléennes.
- Création de la navigation entre les formulaires (*connexion / inscription / récupération de mot de passe*) avec mise en place de la connexion et déconnexion des utilisateurs via **[Firebase](https://firebase.google.com/)**.
- Implémentation de la fonctionnalité de récupération de mot de passe.
- Initiation à **[Firestore](https://firebase.google.com/docs/firestore?hl=fr)** et configuration de la base de données NoSQL.
- Création de collections et de documents Firestore pour stocker les données utilisateur.
- Implémentation des **[opérations CRUD](https://medium.com/@ahmadrazawebexpert/how-to-perform-firebase-crud-operations-355de96bad2c)** sur les données Firestore.
- Mise en place **[des règles de sécurité Firestore](https://firebase.google.com/docs/firestore/security/rules-structure?hl=fr)** pour protéger les données sensibles.
- Configuration de **[l'envoi d'emails de confirmation d'adresse avec Firebase](https://firebase.google.com/docs/auth/web/email-link-auth?hl=fr)**.

#

## 🔎 Accès au projet - ...