# Déploiement sur Netlify — Portfolio Arif Muhammad Ali

Ce projet est 100% configuré et prêt pour un déploiement direct et gratuit sur **Netlify**.

---

### Méthode 1 : Glisser-Déposer (Le plus rapide, en 30 secondes)
1. Télécharge ou récupère le dossier **`dist/`** généré par le build.
2. Rends-toi sur [app.netlify.com/drop](https://app.netlify.com/drop).
3. Connecte-toi ou crée un compte gratuit.
4. Glisse et dépose le dossier **`dist/`** directement dans la zone de dépôt.
5. Ton site est instantanément en ligne avec une URL `.netlify.app` sécurisée en HTTPS !

---

### Méthode 2 : Déploiement automatique via GitHub (Recommandé)
1. Pousse ce projet sur ton compte GitHub (`git push`).
2. Va sur [app.netlify.com](https://app.netlify.com) et clique sur **"Add new site" > "Import an existing project"**.
3. Sélectionne **GitHub** et choisis ton dépôt.
4. Netlify détecte automatiquement le fichier `netlify.toml` déjà inclus :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
5. Clique sur **"Deploy site"**. Chaque mise à jour sur GitHub déploiera le site automatiquement.

---

### Méthode 3 : Via Netlify CLI dans le terminal
Si tu utilises le terminal :
```bash
# 1. Installer la CLI Netlify si besoin
npm install -g netlify-cli

# 2. Déployer en production
netlify deploy --prod --dir=dist
```

---

### Fichiers de configuration inclus :
- **`netlify.toml`** : Configure la commande de build, le dossier `dist`, les en-têtes HTTP de sécurité et la mise en cache.
- **`public/_redirects`** : Règle SPA pour éviter toute erreur 404 lors du rafraîchissement d'une page.
