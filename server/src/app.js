require('dotenv').config();
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const { MongoClient, ObjectId } = require('mongodb');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const cors = require('cors');
const crypto = require('crypto');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { connectToDb, getDb } = require('./db');

const allowedOrigins = ['https://next-meal-app-client.vercel.app', 'http://localhost:5173'];
const redirectPaths = ['https://next-meal-app-client.vercel.app/'];

// App Configuration
const app = express();

// Security Middleware
app.use(helmet());
app.use(express.json());
app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Session Configuration
const secretKey = crypto.randomBytes(64).toString('hex');
let sessionStore;

// Initialize Database Connection First
(async () => {
  try {
    const client = await connectToDb();
    const db = getDb();

    // Initialize session store after successful connection
    sessionStore = MongoStore.create({
      clientPromise: Promise.resolve(client),
      dbName: 'nextmeal',
      collectionName: 'sessions',
    });

    // Configure session middleware
    app.use(session({
      secret: secretKey,
      resave: false,
      saveUninitialized: false,
      store: sessionStore,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: 'lax'
      }
    }));

    // Passport Configuration
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => done(null, user._id.toString()));

    passport.deserializeUser(async (id, done) => {
      try {
        const user = await db.collection('users').findOne({ _id: new ObjectId(id) });
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    });

    // Google OAuth Strategy
    passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    }, async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await db.collection('users').findOne({ googleId: profile.id });
        
        if (existingUser) return done(null, existingUser);

        const newUser = {
          googleId: profile.id,
          email: profile.emails[0].value,
          name: profile.displayName,
          picture: profile.photos[0].value,
          createdAt: new Date(),
          updatedAt: new Date()
        };

        const result = await db.collection('users').insertOne(newUser);
        done(null, { ...newUser, _id: result.insertedId });
      } catch (err) {
        done(err, null);
      }
    }));

    // Routes
    app.use((req, res, next) => {
      req.db = db;
      next();
    });

    // Auth Routes
    app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

    app.get('/auth/google/callback', 
      passport.authenticate('google', { failureRedirect: '/login' }),
      (req, res) => res.redirect(`${redirectPaths[0]}/authenticated`)
    );

    app.get('/api/current_user', (req, res) => res.send(req.user));

    // Application Routes
    const routes = [
      { path: '/restaurants', router: require('./routes/restaurants') },
      { path: '/meals', router: require('./routes/meals') },
      { path: '/beverages', router: require('./routes/beverages') },
      { path: '/search', router: require('./routes/search') },
      { path: '/favorites', router: require('./routes/favorites') },
      { path: '/reviews', router: require('./routes/reviews') },
      { path: '/userDetails', router: require('./routes/user') },
      { path: '/getNameById', router: require('./routes/getNameById') }
    ];

    routes.forEach(({ path, router }) => app.use(path, router));

    // Error Handling
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ error: 'An internal error occurred' });
    });

    // Start Server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error('Failed to initialize application:', err);
    process.exit(1);
  }
})();

// Cleanup on shutdown
process.on('SIGINT', async () => {
  await closeConnection();
  process.exit(0);
});