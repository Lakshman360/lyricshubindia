const User = require('../models/User');
const Room = require('../models/Room');
const bcrypt = require('bcryptjs');

// @desc    Get students for a hostel
// @route   GET /api/students/:hostelId
// @access  Private/Owner
const getStudents = async (req, res) => {
    try {
        const students = await User.find({ hostelId: req.params.hostelId, role: 'student' }).select('-password');
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Assign student to a room
// @route   PUT /api/students/:id/assign-room
// @access  Private/Owner
const assignRoom = async (req, res) => {
    try {
        const { roomId } = req.body;
        
        const student = await User.findById(req.params.id);
        const room = await Room.findById(roomId);

        if (!student || !room) {
            return res.status(404).json({ message: 'Student or Room not found' });
        }

        // Add to room occupants
        if (room.occupants.length >= room.capacity) {
            return res.status(400).json({ message: 'Room is full' });
        }

        student.roomNumber = room.roomNumber;
        student.floorNumber = room.floorNumber;
        await student.save();

        room.occupants.push(student._id);
        if (room.occupants.length >= room.capacity) {
            room.status = 'full';
        }
        await room.save();

        res.status(200).json({ student, room });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Update student fee status
// @route   PUT /api/students/:id/fee
// @access  Private/Owner
const updateFeeStatus = async (req, res) => {
    try {
        const { feeStatus } = req.body; // 'paid', 'unpaid', 'pending'

        const student = await User.findById(req.params.id);
        if(!student) return res.status(404).json({ message: 'Student not found' });

        student.feeStatus = feeStatus;
        await student.save();

        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { getStudents, assignRoom, updateFeeStatus };
