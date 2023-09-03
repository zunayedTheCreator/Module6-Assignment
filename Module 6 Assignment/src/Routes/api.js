// routes/api.js
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Create a new blog
router.get('/blog/create', blogController.create);

// Read a blog
router.get('/blog/read', blogController.read);

// Delete a blog
router.get('/blog/delete', blogController.delete);

// Update a blog
router.get('/blog/update', blogController.update);



// Create a new blog details
router.get('/blog/create', blogDetailsController.create);

// Read a blog details
router.get('/blog/read', blogDetailsController.read);

// Delete a blog details
router.get('/blog/delete', blogDetailsController.delete);

// Update a blog details
router.get('/blog/update', blogDetailsController.update);



// Create a new comment
router.get('/blog/create', commentController.create);

// Read a comment
router.get('/blog/read', commentController.read);

// Delete a comment
router.get('/blog/delete', commentController.delete);

// Update a comment
router.get('/blog/update', commentController.update);



// Create a new message
router.get('/blog/create', messageController.create);

// Read a message
router.get('/blog/read', messageController.read);

// Delete a message
router.get('/blog/delete', messageController.delete);

// Update a message
router.get('/blog/update', messageController.update);



// Create a new portfolio
router.get('/blog/create', portfolioController.create);

// Read a portfolio
router.get('/blog/read', portfolioController.read);

// Delete a portfolio
router.get('/blog/delete', portfolioController.delete);

// Update a portfolio
router.get('/blog/update', portfolioController.update);



// Create a new product
router.get('/blog/create', productController.create);

// Read a product
router.get('/blog/read', productController.read);

// Delete a product
router.get('/blog/delete', productController.delete);

// Update a product
router.get('/blog/update', productController.update);



// Create a new profit
router.get('/blog/create', profitController.create);

// Read a profit
router.get('/blog/read', profitController.read);

// Delete a profit
router.get('/blog/delete', profitController.delete);

// Update a profit
router.get('/blog/update', profitController.update);



// Create a new project
router.get('/blog/create', projectController.create);

// Read a project
router.get('/blog/read', projectController.read);

// Delete a project
router.get('/blog/delete', projectController.delete);

// Update a project
router.get('/blog/update', projectController.update);



// Create a new service
router.get('/blog/create', serviseController.create);

// Read a service
router.get('/blog/read', serviseController.read);

// Delete a service
router.get('/blog/delete', serviseController.delete);

// Update a service
router.get('/blog/update', serviseController.update);



// Create a new title
router.get('/blog/create', titleController.create);

// Read a title
router.get('/blog/read', titleController.read);

// Delete a title
router.get('/blog/delete', titleController.delete);

// Update a title
router.get('/blog/update', titleController.update);



module.exports = router;
