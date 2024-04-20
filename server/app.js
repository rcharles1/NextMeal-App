const express = require('express');
const { ObjectId } = require('mongodb');
const { connectToDb, getDb } = require('./db');
const cors = require('cors');

// init app & middleware
const app = express();
app.use(express.json());
app.use(cors());

let db;

connectToDb((err) => {
    if (!err) {
        app.listen(3000, () => {
            console.log('app listening on port 3000')
        });
        db = getDb();
    }
})

// routes
app.get('/restaurants', (req, res) => {
    // Pagination of results
    const page = req.query.p || 0
    const restaurantsPerPage = 4

    let restaurants = [];

    db.collection('restaurants')
        .find()
        .sort({name: 1})
        .skip(page * restaurantsPerPage)
        .limit(restaurantsPerPage)
        .forEach(restaurant => restaurants.push(restaurant))
        .then(() => {
            res.status(200).json(restaurants)
        })
        .catch(() => {
            res.status(500).json({error: 'Could not fetch the documents'})
        })
})

app.get('/restaurant/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        db.collection('restaurants')
            .findOne({_id: new ObjectId( req.params.id)})
            .then(doc => {
                res.status(200).json(doc)
            })
            .catch(err => {
                res.status(500).json({err: 'Could not fetch the document'})
            })
    } else {
        res.status(500).json({error: 'Not a valid doc id'})
    }

})

app.post('/restaurants', (req, res) => {
    const restaurant = req.body

    db.collection('restaurants')
        .insertOne(restaurant)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'Could not create new doc'})
        })
})

app.delete('/restaurants/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        db.collection('restaurants')
            .deleteOne({_id: new ObjectId( req.params.id)})
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json({err: 'Could not delete the document'})
            })
    } else {
        res.status(500).json({error: 'Not a valid doc id'})
    }
})

app.patch('/restaurants/:id', (req, res) => {
    const updates = req.body

    if (ObjectId.isValid(req.params.id)) {
        db.collection('restaurants')
            .updateOne({_id: new ObjectId( req.params.id)}, {$set: updates})
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json({err: 'Could not update the document'})
            })
    } else {
        res.status(500).json({error: 'Not a valid doc id'})
    }
})