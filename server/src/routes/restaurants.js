const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();

// Get all restaurants with filters and pagination
router.get('/', (req, res) => {
  const page = req.query.p || 0;
  const restaurantsPerPage = 18;
  const cuisine = req.query.cuisine ? { cuisine: { $in: req.query.cuisine.split(',') } } : {};
  const openHours = req.query.openHours ? { openHours: { $in: req.query.openHours.split(',') } } : {};
  const services = req.query.services ? { ['services.' + req.query.services]: 1 } : {};
  const amenities = req.query.amenities ? { ['amenities.' + req.query.amenities]: 1 } : {};
  let targetLocation = {};
  if (req.query.district) {
    targetLocation = { 'locationData.district': { $in: req.query.district.split(',') } };
  } else if (req.query.region) {
    targetLocation = { 'locationData.region': { $in: req.query.region.split(',') } };
  }
  const filters = { ...cuisine, ...openHours, ...services, ...amenities, ...targetLocation };

  req.db.collection('restaurants')
    .find(filters)
    .skip(page * restaurantsPerPage)
    .limit(restaurantsPerPage)
    .toArray()
    .then(restaurants => {
      try {
        console.log(JSON.stringify(restaurants));
        res.status(200).json(restaurants);
      } catch (error) {
        console.error('Error stringifying JSON:', error);
        res.status(500).json({ error: 'Error parsing data' });
      }
    })
    .catch(err => {
      console.error('Error fetching documents:', err);
      res.status(500).json({ error: 'Could not fetch the documents' });
    });
});

// Get one restaurant by ID
router.get('/:id', (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    req.db.collection('restaurants')
      .findOne({ _id: new ObjectId(req.params.id) })
      .then(doc => {
        res.status(200).json(doc);
      })
      .catch(err => {
        res.status(500).json({ err: 'Could not fetch the document' });
      });
  } else {
    res.status(500).json({ error: 'Not a valid doc id' });
  }
});

// Create one restaurant
router.post('/', (req, res) => {
  const restaurant = req.body;
  req.db.collection('restaurants')
    .insertOne(restaurant)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      res.status(500).json({ err: 'Could not create new doc' });
    });
});

// Delete one restaurant by ID
router.delete('/:id', (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    req.db.collection('restaurants')
      .deleteOne({ _id: new ObjectId(req.params.id) })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        res.status(500).json({ err: 'Could not delete the document' });
      });
  } else {
    res.status(500).json({ error: 'Not a valid doc id' });
  }
});

// Update one restaurant by ID
router.patch('/:id', (req, res) => {
  const updates = req.body;
  if (ObjectId.isValid(req.params.id)) {
    req.db.collection('restaurants')
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        res.status(500).json({ err: 'Could not update the document' });
      });
  } else {
    res.status(500).json({ error: 'Not a valid doc id' });
  }
});

module.exports = router;