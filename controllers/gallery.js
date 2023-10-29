const Gallery = require('../models/Gallery');

// Get all gallery items
exports.getAllGalleryItems = async (req, res) => {
  try {
    const galleryItems = await Gallery.find();
    res.json(galleryItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new gallery item
exports.createGalleryItem = async (req, res) => {
  const { title, description, imageUrl } = req.body;
  try {
    const newGalleryItem = new Gallery({ title, description, imageUrl });
    const savedItem = await newGalleryItem.save();
    res.json(savedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create a new gallery item" });
  }
};

// Update a gallery item's details
exports.updateGalleryItem = async (req, res) => {
  const { id } = req.params;
  const { title, description, imageUrl } = req.body;
  try {
    const updatedItem = await Gallery.findByIdAndUpdate(id, { title, description, imageUrl }, { new: true });
    res.json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update the gallery item" });
  }
};

// Delete a gallery item
exports.deleteGalleryItem = async (req, res) => {
  const { id } = req.params;
  try {
    await Gallery.findByIdAndRemove(id);
    res.json({ message: "Gallery item deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete the gallery item" });
  }
};
