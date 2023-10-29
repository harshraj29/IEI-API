const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/gallery');

// GET - Get all gallery items
router.get('/', galleryController.getAllGalleryItems);

// POST - Create a new gallery item
router.post('/', galleryController.createGalleryItem);

// PUT - Update a gallery item's details
router.put('/:id', galleryController.updateGalleryItem);

// DELETE - Delete a gallery item
router.delete('/:id', galleryController.deleteGalleryItem);

module.exports = router;
