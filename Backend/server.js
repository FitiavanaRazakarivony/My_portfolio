const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path'); // N'oubliez pas d'importer 'path'

// Créer l'application Express
const app = express();

// Middleware
app.use(cors()); // Pour autoriser les requêtes depuis d'autres domaines (comme Angular)
app.use(bodyParser.json()); // Pour parser le JSON envoyé dans les requêtes

// Middleware pour servir des fichiers statiques
app.use(express.static(path.join(__dirname, 'dist/projet'))); // Remplacez par le chemin correct

// Importer les routes
const emailRoutes = require('./app/routes/emailRoutes.routes');

// Utiliser les routes
app.use('/api/email', emailRoutes);

// Exemple de route API
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js!' });
});
// Route pour servir l'application Angular
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/projet/browser/index.html')); // Remplacez par le chemin correct
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend Node.js fonctionne sur le port ${PORT}`);
});
