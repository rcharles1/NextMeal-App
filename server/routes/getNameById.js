const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');

let { getDatabase } = require('../app');

// Get Name by id
router.get('/:id', async (req, res) => {
    const db = getDatabase();
    const id = req.params.id;

    try {
        // Validate the ID format
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: 'Invalid ID format' });
        }

        const collections = ['restaurants', 'beverages', 'meals'];
        let name = null;

        for (const collection of collections) {
            const data = await db.collection(collection).findOne({ _id: new ObjectId(id) }, { projection: { name: 1 } });

            if (data) {
                name = data.name;
                break;
            }
        }

        if (name) {
            res.json({ success: true, name });
        } else {
            res.json({ success: false, message: 'No matches found.' });
        }
    } catch (error) {
        console.error('Error fetching name:', error);
        res.status(500).json({ success: false, message: error.toString() });
    }
});

module.exports = router;