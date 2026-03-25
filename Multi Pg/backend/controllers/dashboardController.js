const User = require('../models/User');
const Room = require('../models/Room');
const Attendance = require('../models/Attendance');

// @desc    Get dashboard statistics
// @route   GET /api/dashboard/:hostelId
// @access  Private/Owner
const getDashboardStats = async (req, res) => {
    try {
        const { hostelId } = req.params;
        
        const totalStudents = await User.countDocuments({ hostelId, role: 'student' });
        const totalRooms = await Room.countDocuments({ hostelId });
        
        // Fee Tracking
        const pendingFees = await User.countDocuments({ hostelId, role: 'student', feeStatus: { $in: ['unpaid', 'pending'] } });
        const paidFees = await User.countDocuments({ hostelId, role: 'student', feeStatus: 'paid' });

        // Today's Attendance overview (Any meal)
        const date = new Date().setHours(0,0,0,0);
        const presentRecords = await Attendance.find({ hostelId, date });
        
        // Find unique students present today across all meals
        const presentStudentIds = new Set(presentRecords.map(r => r.studentId.toString()));
        const presentToday = presentStudentIds.size;
        const absentToday = totalStudents - presentToday;

        res.status(200).json({
            totalStudents,
            totalRooms,
            feeStats: {
                paid: paidFees,
                unpaid: pendingFees
            },
            attendanceToday: {
                present: presentToday,
                absent: absentToday
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { getDashboardStats };
