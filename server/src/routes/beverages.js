const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();

// Get all beverages in pagination
router.get('/', async (req, res) => {
  const page = req.query.p || 0;
  const beveragesPerPage = 18;
  let beverages = [];

  // Contains a simple filtering system depending on moods and an advanced filtering
  const mood = req.query.mood || null;
  const drinkCategory = req.query.drinkCategory ? req.query.drinkCategory.split(',') : [];
  let categoryValues = [...drinkCategory];
  if (mood) {
    categoryValues.push(mood);
  }
  let categoryFilter = categoryValues.length > 0 ? { category: { $in: categoryValues } } : {};
  const type = req.query.type ? { type: { $in: req.query.type.split(',') } } : {};
  const filters = { ...categoryFilter, ...type };

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
    const beveragesCursor = req.db.collection('beverages').find(filters).sort(sortObject).skip(page * beveragesPerPage).limit(beveragesPerPage);
    await beveragesCursor.forEach(beverage => beverages.push(beverage));
    res.status(200).json(beverages);
  } catch (error) {
    console.error('Error fetching beverages:', error);
    res.status(500).json({ error: 'Could not fetch beverage documents' });
  }
});

// Get one beverage by ID
router.get('/:id', async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    try {
      const doc = await req.db.collection('beverages').findOne({ _id: new ObjectId(req.params.id) });
      res.status(200).json(doc);
    } catch (err) {
      res.status(500).json({ error: 'Could not fetch the document' });
    }
  } else {
    res.status(500).json({ error: 'Not a valid doc id' });
  }
});

// Create one beverage
router.post('/', async (req, res) => {
  const beverage = req.body;
  try {
    const result = await req.db.collection('beverages').insertOne(beverage);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Could not create new doc' });
  }
});

// Delete one beverage by ID
router.delete('/:id', async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    try {
      const result = await req.db.collection('beverages').deleteOne({ _id: new ObjectId(req.params.id) });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: 'Could not delete the document' });
    }
  } else {
    res.status(500).json({ error: 'Not a valid doc id' });
  }
});

// Update one beverage by ID
router.patch('/:id', async (req, res) => {
  const updates = req.body;
  if (ObjectId.isValid(req.params.id)) {
    try {
      const result = await req.db.collection('beverages').updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: 'Could not update the document' });
    }
  } else {
    res.status(500).json({ error: 'Not a valid doc id' });
  }
});

module.exports = router;