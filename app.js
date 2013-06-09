'use strict';

/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , blog = require('./routes/blog')
  , http = require('http')
  , path = require('path')
  , passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

var app = express();
var oneYear = 86400000 * 365;

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

var authenticate = function (username, password, done) {
    if (username === "Chris" && password === "qwerty") {
        return done(null, {'_id': 'mongoid'});
    }

    return done(null, false, { message: "Invalid Credentials"});
};

var authSuccess = function (req, res) {
    res.send(200, {'_id': 'myid', firstName: req.body.username, loggedIn: true});
};

var isAuthenticated = function (req, res, next) {
    return (req.isAuthenticated()) ? next() : res.redirect(401, '/');
};

var logout = function (req, res) {
    req.logout();
    res.send(200, "Logged out!");
};

var loggedIn = function (req, res) {
    return (req.isAuthenticated()) ? authSuccess(req, res) : res.send(401, {loggedIn: false});
};

passport.use(new LocalStrategy(authenticate));

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile);

app.use(express.favicon());
app.use(express.compress());
app.use(express.static(path.join(__dirname, 'app'), { maxAge: oneYear }));

app.use(express.logger('dev'));

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', isAuthenticated, user.list);
app.get('/blog', blog.list);
app.get('/blog/:title', isAuthenticated, blog.show);
app.post('/blog', isAuthenticated, blog.save);
app.delete('/blog/:title', isAuthenticated, blog.delete);

app.get('/loggedIn', loggedIn);
app.post('/login', passport.authenticate('local'), authSuccess);
app.get('/logout', logout);

http.createServer(app).listen(app.get('port'), function ( ){
    console.log('Express server listening on port ' + app.get('port'));
    return;
});