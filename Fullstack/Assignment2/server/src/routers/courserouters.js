const express = require('express');
const router = express.Router();
const {} = require('../controllers/coursecontroller.js');

router.post('/courses', addCourse);
router.get('/courses', getAllCourses);

module.exports = router;
// Add your routes here