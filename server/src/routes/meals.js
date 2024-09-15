const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();

let { getDatabase } = require('../app');
let db = getDatabase();

// Get all meals in pagination
router.get('/', (req, res) => {
    const page = req.query.p || 0;
    const mealsPerPage = 18;

    let meals = [];

    // Contains a simple filtering system depending on moods and an advanced filtering.
    const mood = req.query.mood || null;
    const cuisine = req.query.cuisine ? req.query.cuisine.split(',') : [];
    let categoryValues = [...cuisine];
    if (mood) {
        categoryValues.push(mood);
    }
    let categoryFilter = categoryValues.length > 0 ? {category: {$in: categoryValues}} : {};

    const type = req.query.mealType ? {mealType: {$in: req.query.mealType.split(',')}} : {};
    const course = req.query.course ? {course: {$in: req.query.course.split(',')}} : {};

    const filters = {...categoryFilter, ...type, ...course};

    query = {...filters}

    // Sorting
    const sortParam = req.query.sort ? JSON.parse(req.query.sort) : null;
    let sortObject = {};

    if (sortParam && sortParam.text && typeof sortParam.text === 'string') {
        if (sortParam.text.includes('Price')) {
            sortObject = { price: parseInt(sortParam.value) };
        } else {
            sortObject = { name: parseInt(sortParam.value) };
        }
    }

    db.collection('meals')
        .find(query)
        .sort(sortObject)
        .skip(page * mealsPerPage)
        .limit(mealsPerPage)
        .forEach(meal => meals.push(meal))
        .then(() => {
            res.status(200).json(meals)
        })
        .catch(() => {
            res.status(500).json({error: 'Could not fetch meal documents'})
        })
})

// Get one meal
router.get('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        db.collection('meals')
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

// Create one meal
router.post('/', (req, res) => {
    const meal = req.body

    db.collection('meals')
        .insertOne(meal)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'Could not create new doc'})
        })
})

// Delete one meal
router.delete('/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        db.collection('meals')
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

// Update one meal
router.patch('/:id', (req, res) => {
    const updates = req.body

    if (ObjectId.isValid(req.params.id)) {
        db.collection('meals')
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

module.exports = router;