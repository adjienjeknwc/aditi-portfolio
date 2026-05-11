const express = require('express');
const router = express.Router();
const { getProjects } = require('../controllers/projectController');

// This should be '/' NOT '/api/projects'
router.get('/', getProjects); 

module.exports = router;