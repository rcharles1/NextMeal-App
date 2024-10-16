const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();

// Get all meals in pagination
router.get('/', async (req, res) => {
  const page = req.query.p || 0;
  const mealsPerPage = 18;
  let meals = [];

  // Contains a simple filtering system depending on moods and an advanced filtering
  const mood = req.query.mood || null;
  const cuisine = req.query.cuisine ? req.query.cuisine.split(',') : [];
  let categoryValues = [...cuisine];
  if (mood) {
    categoryValues.push(mood);
  }
  let categoryFilter = categoryValues.length > 0 ? { category: { $in: categoryValues } } : {};
  const type = req.query.mealType ? { mealType: { $in: req.query.mealType.split(',') } } : {};
  const course = req.query.course ? { course: { $in: req.query.course.split(',') } } : {};
  const filters = { ...categoryFilter, ...type, ...course };

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

  try {
    const mealsCursor = req.db.collection('meals').find(filters).sort(sortObject).skip(page * mealsPerPage).limit(mealsPerPage);
    await mealsCursor.forEach(meal => meals.push(meal));
    res.status(200).json(meals);
  } catch (error) {
    console.error('Error fetching meals:', error);
    res.status(500).json({ error: 'Could not fetch meal documents' });
  }
});

// Get one meal
router.get('/:id', async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    try {
      const doc = await req.db.collection('meals').findOne({ _id: new ObjectId(req.params.id) });
      res.status(200).json(doc);
    } catch (err) {
      res.status(500).json({ error: 'Could not fetch the document' });
    }
  } else {
    res.status(500).json({ error: 'Not a valid doc id' });
  }
});

// Create one meal
router.post('/', async (req, res) => {
  const meal = req.body;
  try {
    const result = await req.db.collection('meals').insertOne(meal);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Could not create new doc' });
  }
});

// Delete one meal
router.delete('/:id', async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    try {
      const result = await req.db.collection('meals').deleteOne({ _id: new ObjectId(req.params.id) });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: 'Could not delete the document' });
    }
  } else {
    res.status(500).json({ error: 'Not a valid doc id' });
  }
});

// Update one meal
router.patch('/:id', async (req, res) => {
  const updates = req.body;
  if (ObjectId.isValid(req.params.id)) {
    try {
      const result = await req.db.collection('meals').updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: 'Could not update the document' });
    }
  } else {
    res.status(500).json({ error: 'Not a valid doc id' });
  }
});

module.exports = router;