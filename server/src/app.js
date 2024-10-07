require('dotenv').config();
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { connectToDb, getDb } = require('./db');
const User = require('./models/users'); 
const cors = require('cors');
const crypto = require('crypto');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// App Configuration
const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));

const secretKey = crypto.randomBytes(64).toString('hex');

// Session Configuration
app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.VITE_MONGODB_URI,
    collectionName: 'sessions',
    mongooseConnection: mongoose.connection // Reuse existing mongoose connection
  }),
  cookie: {
    httpOnly: true, // Mitigates XSS attacks
    secure: false, 
    maxAge: 24 * 60 * 60 * 1000 
  }
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(err => {
      done(err, null);
    });
});

// Passport and Google OAuth setup
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({
        googleId: profile.id,
        email: profile.emails[0].value,
        name: profile.displayName,
        picture: profile.photos[0].value
      }).save();
      
      done(null, user);
    }
  )
);

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect("http://localhost:5173/authenticated"); 
  }
);

app.get('/api/current_user', (req, res) => {
  res.send(req.user);
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

    const favoriteRouter = require('./routes/favorites');
    app.use('/favorites', favoriteRouter);

    const reviewsRouter = require('./routes/reviews');
    app.use('/reviews', reviewsRouter);

    const userDetailsRouter = require('./routes/user');
    app.use('/userDetails', userDetailsRouter);

    const getNameByIdRouter = require(`./routes/getNameById`);
    app.use('/getNameById', getNameByIdRouter);

    app.listen(3000, () => {
      console.log('app listening on port 3000');
    });
  } else {
    console.error('Failed to connect to the database', err);
  }
});

module.exports.getDatabase = getDatabase;