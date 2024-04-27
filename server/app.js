const express = require('express');
const { connectToDb, getDb } = require('./db');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

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

        app.listen(3000, () => {
            console.log('app listening on port 3000');
        });
    } else {
        console.error('Failed to connect to the database', err);
    }
});

module.exports.getDatabase = getDatabase;