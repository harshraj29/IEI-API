const mongoose = require("mongoose");

const upcomingEventSchema = new mongoose.Schema({
    EventName: String,
    description: String,
    Date: String,
    Venue: String,
    Time: String,
    Image: String,
    Link: String,
});

const UpcomingEvent = mongoose.model("UpcomingEvent", upcomingEventSchema);

module.exports = UpcomingEvent;
