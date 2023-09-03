const express = require('express');
const router = express.Router();
const upcomingEventController = require('../controllers/upcoming');

// GET - Get all upcoming events
router.get('/', upcomingEventController.getUpcomingEvents);

// POST - Create a new upcoming event
router.post('/', upcomingEventController.createUpcomingEvent);

// PUT - Update an upcoming event's details
router.put('/:id', upcomingEventController.updateUpcomingEvent);

// DELETE - Delete an upcoming event
router.delete('/:id', upcomingEventController.deleteUpcomingEvent);

module.exports = router;
