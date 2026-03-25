const express = require('express');
const router = express.Router();
const { scanQrAttendance, getAttendanceStats } = require('../controllers/attendanceController');
const { protect, ownerCheck } = require('../middleware/authMiddleware');

router.post('/scan', protect, ownerCheck, scanQrAttendance);
router.get('/stats/:hostelId', protect, ownerCheck, getAttendanceStats);

module.exports = router;
