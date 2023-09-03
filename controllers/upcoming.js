const UpcomingEvent = require("../models/upcomingEvent");

// Get all upcoming events
module.exports.getUpcomingEvents = function (req, res) {
    UpcomingEvent.find({})
        .then((foundUpcomingEvents) => {
            res.status(200).json(foundUpcomingEvents);
        })
        .catch((err) => {
            res.status(500).json({ error: "Error fetching upcoming events" });
        });
};

// Create a new upcoming event
module.exports.createUpcomingEvent = function (req, res, next) {
    // Check if the required fields exist in the request body
    if (!req.body.EventName || !req.body.description || !req.body.Date || !req.body.Venue || !req.body.Image) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    
    const newUpcomingEvent = new UpcomingEvent({
        EventName: EventName,
        description: description,
        Date: Date,
        Venue:Venue,
        Image:Image,
    });

    newUpcomingEvent
        .save()
        .then((result) => {
            res.status(201).json({
                message: "Upcoming event created successfully",
                event: result,
            });
        })
        .catch((err) => {
            res.status(500).json({ error: "Error creating upcoming event" });
        });
};

// Update an upcoming event's details
module.exports.updateUpcomingEvent = async function (req, res) {
    const eventId = req.params.id;
    const updatedEventData = req.body;

    try {
        const updatedUpcomingEvent = await UpcomingEvent.findByIdAndUpdate(
            eventId,
            updatedEventData,
            { new: true }
        );
        res.status(200).json({
            message: "Upcoming event updated successfully",
            event: updatedUpcomingEvent,
        });
    } catch (err) {
        res.status(500).json({ error: "Error updating upcoming event" });
    }
};

// Delete an upcoming event
module.exports.deleteUpcomingEvent = function (req, res) {
    const eventId = req.params.id;

    UpcomingEvent.findByIdAndDelete(eventId)
        .then(() => {
            res.status(204).json({ message: "Upcoming event deleted" });
        })
        .catch((err) => {
            res.status(500).json({ error: "Error deleting upcoming event" });
        });
};
