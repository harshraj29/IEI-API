const mongoose = require("mongoose");

const upcomingEventSchema = new mongoose.Schema({
    EventName: String,
    description: String,
    Date: Date,
    Venue: String,
    Image: String,
});

const UpcomingEvent = mongoose.model("UpcomingEvent", upcomingEventSchema);

module.exports = UpcomingEvent;
