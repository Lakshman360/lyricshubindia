const Attendance = require('../models/Attendance');
const User = require('../models/User');

// @desc    Mark attendance via QR scan
// @route   POST /api/attendance/scan
// @access  Private/Owner
const scanQrAttendance = async (req, res) => {
    try {
        const { uniqueQrId, hostelId, mealType } = req.body;

        // Find the student by uniqueQrId
        const student = await User.findOne({ uniqueQrId, role: 'student', hostelId });
        if (!student) {
            return res.status(404).json({ message: 'Student not found or invalid QR' });
        }

        const date = new Date().setHours(0,0,0,0);
        const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

        // Check if already marked for this meal on this day
        const existingRecord = await Attendance.findOne({
            studentId: student._id,
            date,
            mealType
        });
        
        if (existingRecord) {
            return res.status(400).json({ message: `Attendance for ${mealType} already marked` });
        }

        const attendance = await Attendance.create({
            studentId: student._id,
            hostelId,
            date,
            time,
            mealType,
            status: 'present'
        });

        res.status(201).json({
            message: 'Attendance marked successfully',
            studentName: student.name,
            roomNumber: student.roomNumber,
            date,
            time
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get attendance stats for dashboard
// @route   GET /api/attendance/stats/:hostelId
// @access  Private/Owner
const getAttendanceStats = async (req, res) => {
    try {
        const date = new Date().setHours(0,0,0,0);
        // Default to checking 'lunch' for example purposes, or can be passed as query param
        const mealType = req.query.mealType || 'lunch';

        const presentRecords = await Attendance.find({
            hostelId: req.params.hostelId,
            date,
            mealType
        }).populate('studentId', 'name roomNumber');

        const totalStudentsCount = await User.countDocuments({ hostelId: req.params.hostelId, role: 'student' });
        
        const presentCount = presentRecords.length;
        const absentCount = totalStudentsCount - presentCount;

        res.status(200).json({
            mealType,
            presentCount,
            absentCount,
            records: presentRecords
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { scanQrAttendance, getAttendanceStats };
