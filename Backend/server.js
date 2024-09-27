const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Créer l'application Express
const app = express();

// Middleware CORS pour autoriser uniquement une origine spécifique
const corsOptions = {
  origin: ['https://fitiavanarazakarivony.vercel.app'], // URL de votre application déployée
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
};
app.use(cors(corsOptions));

// Middleware pour parser le JSON envoyé dans les requêtes
app.use(bodyParser.json());

// Middleware pour servir des fichiers statiques (exemple Angular)
app.use(express.static(path.join(__dirname, '../Frontend/dist/projet/browser')));

// Importer les routes
const emailRoutes = require('./app/routes/emailRoutes.routes');

// Utiliser les routes pour l'API email
app.use('/api/email', emailRoutes);

// Exemple de route API
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js!' });
});

// Route pour servir l'application Angular
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/dist/projet/browser/index.html')); // Remplacez par le chemin correct
});

// Démarrer le serveur
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Backend Node.js fonctionne sur le port ${PORT}`);
});