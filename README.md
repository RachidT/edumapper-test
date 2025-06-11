## Démarrer le projet en local

```bash
# npm
npm install

# npm
npm run dev
```

## url Projet

https://edumapper-test.netlify.app/

## structure du projet

```bash
.
├── assets/
│   └── css/
│       └── tailwind.css          # Fichier CSS principal de Tailwind
├── components/
│   ├── AddFormationForm.vue      # Formulaire d'ajout de formations
│   ├── CalculationLoader.vue     # Barre de progression (%)
│   ├── ClassSection.vue          # Sélection classe/type de bac
│   ├── FormInfoCard.vue          # Carte d'informations éditable
│   ├── FormationCard.vue         # Affichage des formations + chances d'admission
│   └── Modal.vue                 # Modale réutilisable
├── layouts/
│   └── default.vue               # Layout global (styles communs)
├── pages/
│   ├── index.vue                 # Page de saisie du profil
│   └── results.vue               # Résultats d'admission
├── nuxt.config.ts                # Configuration Nuxt
├── tailwind.config.ts            # Config Tailwind (couleurs, breakpoints)
└── README.md                     # Documentation
```

## Fonctionnalités

- page d'accueil affichant l'etablissement de l'élève et permettant de saisir les informations suivante :
  - Classe
  - spécialité
  - Note
  - résultats au bac
- ajout d'un bouton `valider mon profil` permettant d'accéder à la page des souhaits de formations de l'élèves.
- affichage d'informations statiques conformément au figma. Ces informations ne peuvent pas être supprimées.
- ajout de formation via le bouton `ajouter une formation` (les formations ajoutées peuvent être supprimées)
- navigation retour vers la page d'accueil au clique sur `modifier mon profil`
- simulation du calcul des chances et ajout d'un loader lorsqu'on ajoute une formation

## Prochaines Étapes Possibles

- **Formulaire de Recherche de Formations** : Implémenter une fonctionnalité de recherche dans la modale d'ajout de formation, permettant aux utilisateurs de trouver et de sélectionner des établissements et parcours réels.
- **Logique de Calcul Réelle** : Développer une logique de calcul des chances d'admission plus complexe et basée sur des données réelles (potentiellement via une API backend ou un algorithme).
- **Gestion des Données du Profil** : Persister les données du profil utilisateur (par exemple, dans le stockage local ou une base de données) afin qu'elles ne soient pas perdues après un rafraîchissement.
- **Authentification Utilisateur** : Mettre en place un système d'authentification pour gérer les profils utilisateurs.
- **Édition de la `SchoolCard`** : Activer le bouton "Modifier" sur la `SchoolCard` pour ouvrir une modale d'édition des informations de l'établissement.
- **Optimisation et Accessibilité** : Continuer l'optimisation des performances de l'application et améliorer son accessibilité pour tous les utilisateurs.
