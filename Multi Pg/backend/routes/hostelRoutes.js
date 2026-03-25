const express = require('express');
const router = express.Router();
const { getHostels, createHostel, getHostelById } = require('../controllers/hostelController');
const { protect, ownerCheck } = require('../middleware/authMiddleware');

router.route('/')
    .get(protect, ownerCheck, getHostels)
    .post(protect, ownerCheck, createHostel);

router.route('/:id').get(protect, getHostelById);

module.exports = router;
