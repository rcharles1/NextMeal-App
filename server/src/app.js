require('dotenv').config();
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { connectToDb } = require('./db');
const User = require('./models/users');
const cors = require('cors');
const crypto = require('crypto');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const allowedOrigins = ['http://localhost:5173', 'http://your-frontend-domain.com'];

// App Configuration
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// Handle preflight requests
app.options('*', cors());
app.options('/*', (req, res) => res.sendStatus(204));

const secretKey = crypto.randomBytes(64).toString('hex');

// Session Configuration
app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.VITE_MONGODB_URI,
    collectionName: 'sessions',
    mongooseConnection: mongoose.connection,
  }),
  cookie: {
    httpOnly: true, // Mitigates XSS attacks
    secure: false,
    maxAge: 24 * 60 * 60 * 1000,
  },
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user)).catch(err => done(err, null));
});

// Passport and Google OAuth setup
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ googleId: profile.id });
  if (existingUser) {
    return done(null, existingUser);
  }
  const user = new User({
    googleId: profile.id,
    email: profile.emails[0].value,
    name: profile.displayName,
    picture: profile.photos[0].value,
  });
  await user.save();
  done(null, user);
}));

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect("http://localhost:5173/authenticated");
});

app.get('/api/current_user', (req, res) => res.send(req.user));

// Connect to DB and set up routes
connectToDb((err) => {
    if (!err) {
      // Middleware to attach db to request object
      app.use((req, res, next) => {
        req.db = mongoose.connection.db;
        next();
      });
  
      // Import routes after middleware to ensure db is attached
      const restaurantRouter = require('../src/routes/restaurants');
      const mealsRouter = require('./routes/meals');
      const beveragesRouter = require('./routes/beverages');
      const searchRouter = require('./routes/search');
      const favoriteRouter = require('./routes/favorites');
      const reviewsRouter = require('./routes/reviews');
      const userDetailsRouter = require('./routes/user');
      const getNameByIdRouter = require('./routes/getNameById');
  
      app.use('/restaurants', restaurantRouter);
      app.use('/meals', mealsRouter);
      app.use('/beverages', beveragesRouter);
      app.use('/search', searchRouter);
      app.use('/favorites', favoriteRouter);
      app.use('/reviews', reviewsRouter);
      app.use('/userDetails', userDetailsRouter);
      app.use('/getNameById', getNameByIdRouter);
  
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
      });
    } else {
      console.error('Failed to connect to the database', err);
    }
});  

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'An internal error occurred' });
});