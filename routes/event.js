const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event');

// GET - Get all PastEvents
router.get('/', eventController.getPastEvents);

// POST - Create a new event
router.post('/', eventController.createEvent);

// PUT - Update an event's details
router.put('/:id', eventController.updateEvent);

// DELETE - Delete an event
router.delete('/:id', eventController.deleteEvent);

module.exports = router;
