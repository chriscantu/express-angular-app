
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

var app = express();
var oneYear = 86400000 * 365;

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

var authenticate = function(username, password, done) {
	if (username == "Chris" && password == "qwerty") {
		return done(null, {id: 'mongoid'} );
	};

	return done(null, false, { message: "Invalid Credentials"} );
}


passport.use( new LocalStrategy(authenticate) );

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile);

app.use(express.favicon());
app.use(express.compress());
app.use(express.static( path.join(__dirname, 'public'), { maxAge: oneYear }));

app.use(express.logger('dev'));

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.post('/login', passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login' }));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});