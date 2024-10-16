const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();
const User = require('../models/users');

// Add favorites to a User
router.post('/', async (req, res) => {
  const { googleId, itemId, itemType } = req.body;
  try {
    const user = await User.findOne({ googleId: googleId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const favoriteIndex = user.favorites.findIndex(favorite => favorite.id === itemId && favorite.itemType === itemType);
    if (favoriteIndex !== -1) {
      user.favorites.splice(favoriteIndex, 1);
    } else {
      user.favorites.push({ id: itemId, itemType: itemType });
    }
    await user.save();
    res.json({ message: 'Favorites updated successfully' });
  } catch (error) {
    console.error('Error updating favorites:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all favorite items in an array
router.get('/favoritesItems', async (req, res) => {
  const page = req.query.p || 0;
  const itemsPerPage = 12;
  let favorites = [];
  const googleId = req.query.googleId ? { googleId: req.query.googleId } : {};
  const itemType = req.query.active ? { itemType: { $in: req.query.active.split(',') } } : {};
  const query = { ...googleId, ...itemType };

  try {
    const favoritesCursor = req.db.collection('users').find(query).skip(page * itemsPerPage).limit(itemsPerPage);
    await favoritesCursor.forEach(item => favorites.push(item));
    res.status(200).json(favorites);
  } catch (error) {
    console.error('Could not fetch favorites:', error);
    res.status(500).json({ error: 'Could not fetch favorites' });
  }
});

module.exports = router;