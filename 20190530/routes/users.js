var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  
  if(!email || !password){
    req.flash('errors', 'Falta usuario o contraseña');
    res.redirect('/users/login')
  } else {
    let user = await usersController.checkLogin(email,password);
  
    if(user){
      req.session.email = user.email;
      req.session.name = user.name;
      req.session.userId = user.id;
      req.session.logginDate = new Date();
      res.redirect('/films');
    }else{
      req.flash('errors', 'Usuario o contraseña inválido');
      res.redirect('/users/login');
    }
  }

});

router.get('/login', (req, res) => {
  let error = req.flash('errors');
  if(req.session.name){
    res.redirect('/films');
  }else{
    res.render('user/login', {
      error
    });
  }
})

router.get('/register', (req, res) => {
  let error = req.flash('error');
  res.render('user/register',{
    error
  });
});

router.post('/register', async (req, res) => {
  let { email, name, password} = req.body;

  let isRegistered = await usersController.register(email, password, name);

  if(isRegistered){
    res.redirect('/users/login')
  }else{
    req.flash('error', 'No se pudo registrar');
    res.redirect('/users/register');
  }
})


module.exports = router;
