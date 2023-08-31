const Event = require("../models/event");

// Get all events
module.exports.getEvents = function (req, res) {
    Event.find({})
        .then((foundEvents) => {
            res.status(200).json(foundEvents);
        })
        .catch((err) => {
            res.status(500).json({ error: "Error fetching events" });
        });
};

// Create a new event
module.exports.createEvent = function (req, res, next) {
    const newEvent = new Event({
        EventName: req.body.EventName,
        description: req.body.description,
        Date: req.body.Date,
        Venue: req.body.Venue,
        Image: req.body.Image,
    });

    newEvent
        .save()
        .then((result) => {
            res.status(201).json({
                message: "Event created successfully",
                event: result,
            });
        })
        .catch((err) => {
            res.status(500).json({ error: "Error creating event" });
        });
};

// Update an event's details
module.exports.updateEvent = async function (req, res) {
    const eventId = req.params.id;
    const updatedEventData = req.body;

    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            eventId,
            updatedEventData,
            { new: true }
        );
        res.status(200).json({
            message: "Event updated successfully",
            event: updatedEvent,
        });
    } catch (err) {
        res.status(500).json({ error: "Error updating event" });
    }
};

// Delete an event
module.exports.deleteEvent = function (req, res) {
    const eventId = req.params.id;

    Event.findByIdAndDelete(eventId)
        .then(() => {
            res.status(204).json({ message: "Event deleted" });
        })
        .catch((err) => {
            res.status(500).json({ error: "Error deleting event" });
        });
};
