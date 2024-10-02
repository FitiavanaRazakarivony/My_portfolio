const nodemailer = require('nodemailer');
require('dotenv').config(); // Assurez-vous d'avoir installé dotenv et créé un fichier .env

exports.sendEmail = (req, res) => {
  const { to, subject, text } = req.body;

  // Configurer le transporteur avec vos informations d'authentification
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Email depuis le fichier .env
      pass: process.env.EMAIL_PASS  // Mot de passe d'application depuis le fichier .env
    }
  });

  // Configurer les options de l'email
  let mailOptions = {
    from: process.env.EMAIL_USER,  // Votre adresse e-mail
    to: to,                        // Adresse du destinataire
    subject: subject,              // Sujet de l'e-mail
    text: text                     // Corps du texte de l'e-mail
  };

  // Envoi de l'e-mail
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error('Erreur lors de l\'envoi de l\'email:', err);
      return res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' });
    }
    res.status(200).json({ message: 'E-mail envoyé avec succès', info });
  });
};
