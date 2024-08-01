# Checkpoint Express.js

**Ce que vous visez**

Dans ce point de contrôle, nous allons créer une application Web contenant trois pages :

- Page d'accueil.
- Nos services.
- Contactez-nous.

Ces pages doivent respecter les exigences suivantes :

- Chaque page doit contenir un lien vers une barre de navigation (Accueil, Nos services, Contactez-nous).
- N'hésitez pas à mettre le contenu que vous souhaitez.
- L'application web est disponible uniquement pendant les heures ouvrables (du lundi au vendredi, de 9h à 17h).

**Instructions**

- Utilisez Express pour créer le serveur et gérer les itinéraires.
- Créez un middleware personnalisé pour vérifier l’heure de la requête.
- Les pages doivent être stylisées avec CSS.
- En option, vous pouvez utiliser le moteur de modèle de votre choix.

## Installation

1. Clonez le dépôt :
   ```bash
   git clone [https://github.com/MirinkaU1/Cheickpoint-Express.js.git]
   ```

2. Accédez au répertoire du projet :
   ```bash
   cd Checkpoint_Express.js
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```

## Utilisation

1. Démarrez le serveur :
   ```bash
   npm start
   ```

2. Ouvrez votre navigateur et accédez à `http://localhost:3000`.

## Fonctionnalités

### Middleware de vérification des heures ouvrables

Le middleware vérifie si la requête est effectuée pendant les heures ouvrables (du lundi au vendredi, de 9h à 17h). Si la requête est effectuée en dehors de ces heures, un message d'erreur stylisé est affiché.

## Middleware

```javascript
const jourOuvrable = (req, res, next) => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  // Vérifiez si c'est du lundi au vendredi (1 à 5) et entre 9h et 17h
  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next();
  } else {
    res.status(403).sendFile(path.join(__dirname, '/views/error.ejs'));
  }
  };
module.exports = jourOuvrable;
```
### Pages disponibles

1. **Page d'accueil** (`index.ejs`)
   - Contient une brève introduction et un lien vers les autres pages.

2. **Nos services** (`services.ejs`)
   - Détaille les services offerts par le restaurant.

3. **Contactez-nous** (`contact.ejs`)
   - Formulaire de contact pour les utilisateurs.
  
4. **Page d'erreur** (`error.ejs`)
   - Empêche d'accéder au site à une certaine condition.

### Styles CSS

Les pages sont stylisées avec le fichier CSS `styles.css` situé dans le dossier `public/css`.

