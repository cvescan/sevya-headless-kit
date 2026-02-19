# 💧 Sevya Headless Kit (Blueprint)

> **L'infrastructure pour bâtir vos propres portails de pilotage marketing.**

Le **Sevya Headless Kit** est un starter kit Next.js conçu pour les agences et consultants marketing. Il permet de construire des interfaces de qualification de leads ultra-personnalisées (Portails métiers, Dashboards clients) tout en s'appuyant sur le backend robuste de Sevya (Attribution GCLID, Sync Ads, Données sécurisées).

## 🚀 Pourquoi utiliser ce Kit ?

- **Headless CRM :** Ne soyez plus prisonnier d'une interface. Utilisez notre API pour afficher vos données où vous voulez.
- **AI-Ready :** Structure de code optimisée pour être pilotée par des agents IA (Gemini, Cursor, Claude).
- **Zéro Friction :** Composants UI pensés pour le terrain (Artisans, TPE).
- **Attribution Native :** Liaison automatique entre les ventes réelles et les algorithmes Google/Meta Ads.

## 🤖 Guide pour les Agents IA (Vibe Coding)

Ce projet est conçu pour le développement par prompt. Si vous utilisez un agent IA :
1. Donnez-lui accès à ce dossier.
2. Demandez-lui : *"Regarde les types dans `@/types` et les instructions dans `INSTRUCTIONS_FOR_IA.md` pour me générer une page de suivi pour [Métier]"*.
3. L'IA assemblera les composants du kit pour créer votre portail en quelques secondes.

## 🛠 Stack Technique

- **Framework :** [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling :** [Tailwind CSS](https://tailwindcss.com/)
- **Data Fetching :** [TanStack Query v5](https://tanstack.com/query/latest)
- **Icons :** [Lucide React](https://lucide.dev/)
- **Validation :** [Zod](https://zod.dev/)

## 📁 Structure du Projet

- `/components` : Briques UI réutilisables et thémables (LeadCard, Kanban...).
- `/hooks` : Logique métier et synchronisation des données avec l'API Sevya.
- `/types` : Définitions TypeScript officielles pour garantir la cohérence des données.
- `/lib` : Configuration du client API et utilitaires.

## ⚙️ Installation Rapide

```bash
# Cloner le projet
git clone https://github.com/votre-compte/sevya-headless-kit.git

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

## 📄 Licence

Ce projet est sous licence **MIT**. Vous êtes libre de l'utiliser, de le modifier et de le distribuer pour vos propres clients agence.

---
Développé avec passion pour les [Architectes de Croissance](https://www.sevya.fr).
