var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('connect-flash');
var session = require('express-session');
var hbs = require('hbs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var filmsRouter = require('./routes/films'); // Router de peliculas importado
var filmsApiRouter = require('./routes/api/filmsApi'); // Router de la API peliculas importado

var app = express();

app.use(session({
  secret: 'miClaveSecreta',
  name: 'sesionUsuario',
  resave: true,
  saveUninitialized: true,
}));
app.use(flash());



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  res.locals.user = req.session;
  next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/films', filmsRouter); // Ruta para web peliculas
app.use('/api/films', filmsApiRouter); // Ruta para api peliculas



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
