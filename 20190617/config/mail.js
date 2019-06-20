
const nodeMailer= require('nodemailer');
const Hbs = require('nodemailer-express-handlebars');
let config = require('./config');

let mail = nodeMailer.createTransport({
    host: config.mailhost,
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: config.user,
      password: config.mailPassword
    },
    tls:{ rejectUnauthorized: false}
  },
  {
    from:'test@alfageme.dev',
    headers: {
    }
})

mail.use('compile', Hbs({
  viewEngine: {
    extname: '.hbs', //Cuidado no es camelCase
    partialsDir: 'views/email-templates/partials',  //Rutas relativas al lugar donde lanzas el npm start
    layoutsDir: 'views/email-templates/layouts',
    defaultLayout: 'email.body.hbs',
  },
  extName: '.hbs',
  viewPath: 'views/email-templates'
}));  

module.exports = mail;