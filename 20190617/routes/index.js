var express = require('express');
var router = express.Router();
var mail = require('../config/mail');
const upload = require('../config/multer');
const winston = require('../config/winston');




/* GET home page. */
router.get('/', function(req, res, next) {
  let message= {
    to:'d.alfageme@geekshubs.com',
    subject : 'Email de prueba',
    template: 'email',

  }
  mail.sendMail(message);
  winston.info('Email enviado correctamente');
  winston.error('Hola error');
  winston.warn('Esto es un warning');
  res.send('ms')
});


router.get('/subirImagenes', (req, res) => {
  res.render('uploadForm');
});

function test(a, b, c){
  console.log('A',a)
  console.log('B',b)
  console.log('C',c)
}

router.post('/subirImagenes',  upload.array('profileImage', 3), (req, res) => {
  res.send(req.files);
})

module.exports = router;
