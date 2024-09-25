const nodemailer = require('nodemailer');

exports.sendEmail = (req, res) => {
  const { to, subject, text } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'razakarivonyfinoanafeno@gmail.com', // Ton email
      pass: 'soht uzkj ldkh omns'  // Ton mot de passe d'application
    }
  });

  let mailOptions = {
    from: '',
    to: to,
    subject: subject,
    text: text
  };

  console.log('mail', mailOptions)

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' });
    }
    res.status(200).json({ message: 'E-mail envoyé avec succès', info });
  });
};

