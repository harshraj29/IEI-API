const mongoose = require("mongoose");


const PastEventschema = new mongoose.Schema({
    EventName: String,
    description: String,
    Date: Date,
    Venue: String,
    Image: String,
})

const PastEvent = mongoose.model("PastEvents", PastEventschema);

module.exports = PastEvent;