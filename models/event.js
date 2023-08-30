const mongoose = require("mongoose");


const eventSchema = new mongoose.Schema({
    EventName: String,
    description: String,
    Date: Date,
    Venue: String,
    Image: String,
})

const event = mongoose.model("event", eventSchema);

module.exports = event;