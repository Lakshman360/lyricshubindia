const express = require('express');
const router = express.Router();
const { getDashboardStats } = require('../controllers/dashboardController');
const { protect, ownerCheck } = require('../middleware/authMiddleware');

router.get('/:hostelId', protect, ownerCheck, getDashboardStats);

module.exports = router;
