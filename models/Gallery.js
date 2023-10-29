const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
});

// Create the Gallery model
const Gallery = mongoose.model("Gallery", gallerySchema);

module.exports = Gallery;
