const express = require('express');
const router = express.Router();
const { getStudents, assignRoom, updateFeeStatus } = require('../controllers/studentController');
const { protect, ownerCheck } = require('../middleware/authMiddleware');

router.route('/:hostelId')
    .get(protect, ownerCheck, getStudents);

router.route('/:id/assign-room')
    .put(protect, ownerCheck, assignRoom);

router.route('/:id/fee')
    .put(protect, ownerCheck, updateFeeStatus);

module.exports = router;
