const express = require('express');
const router = express.Router();
const { getRooms, createRoom } = require('../controllers/roomController');
const { protect, ownerCheck } = require('../middleware/authMiddleware');

router.route('/')
    .post(protect, ownerCheck, createRoom);

router.route('/:hostelId')
    .get(protect, getRooms);

module.exports = router;
