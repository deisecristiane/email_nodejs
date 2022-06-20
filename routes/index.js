var express = require('express');
const SendmailTransport = require('nodemailer/lib/sendmail-transport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/enviar', function(req, res, next) {
  var nodemailer = require('nodemailer');
  console.log(req.body);

  var transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "ffdd0b588b4be5",
        pass: "783912f2c47434"
      }
    });

  var mailOptions = {
    from: "dcs12@discente.ifpe.edu",
    to: req.body.email,
    subject: 'Sending Email using Node.js',
    text: 'Email enviado para: '+ req.body.nome +'!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });


  res.send("enviado!");
  //res.render('index', { title: 'Express' });
});

module.exports = router;
