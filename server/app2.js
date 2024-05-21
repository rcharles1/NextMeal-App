const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { connectToDb, getDb } = require('./db');
const User = require('./models/users'); 
const cors = require('cors');
const crypto = require('crypto');

// App Configuration
const app = express();
app.use(express.json());
app.use(cors());

const secretKey = crypto.randomBytes(64).toString('hex');

// Session Configuration
app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false, 
    maxAge: 24 * 60 * 60 * 1000 
  }
}));

// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());

// Passport and Google OAuth setup
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5173/authenticated"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      if (err) { return cb(err); }
      // You can store the accessToken in the user object if needed
      user.accessToken = accessToken;
      user.googleId = profile.id;
      return cb(null, user);
    });
  } 
));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/signup' }),
  function(req, res) {
    if (req.user) {
      req.session.accessToken = req.user.accessToken;
      res.redirect(`http://localhost:5173/authenticated`);
    } else {
      res.redirect('/pageNotFound');
    }
  }
);

app.get('/api/check-authentication', (req, res) => {
  if (req.isAuthenticated()) {
    const user = {
      id: req.user.googleId,
      name: req.user.name,
      email: req.user.email,
      given_name: req.user.given_name,
      picture: req.user.picture,
      locale: req.user.locale
    };
    const authToken = req.session.accessToken; 

    res.json({
      isAuthenticated: true,
      user: user,
      authToken: authToken
    });
  } else {
    res.json({ isAuthenticated: false });
  }
});

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

let db;

const getDatabase = () => db;

connectToDb((err) => {
  if (!err) {
    db = getDb();

    const restaurantRouter = require('./routes/restaurants');
    app.use('/restaurants', restaurantRouter);

    const mealsRouter = require('./routes/meals');
    app.use('/meals', mealsRouter);

    const beveragesRouter = require('./routes/beverages');
    app.use('/beverages', beveragesRouter);

    const searchRouter = require('./routes/search');
    app.use('/search', searchRouter);

    app.listen(3000, () => {
      console.log('app listening on port 3000');
    });
  } else {
    console.error('Failed to connect to the database', err);
  }
});

module.exports.getDatabase = getDatabase;