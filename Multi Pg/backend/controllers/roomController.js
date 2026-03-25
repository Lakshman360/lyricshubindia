const Room = require('../models/Room');
const Hostel = require('../models/Hostel');

// @desc    Get all rooms for a hostel
// @route   GET /api/rooms/:hostelId
// @access  Private
const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find({ hostelId: req.params.hostelId }).populate('occupants', 'name email feeStatus');
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Create a room
// @route   POST /api/rooms
// @access  Private/Owner
const createRoom = async (req, res) => {
    try {
        const { hostelId, roomNumber, floorNumber, capacity } = req.body;

        const hostel = await Hostel.findById(hostelId);
        if (!hostel || hostel.ownerId.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized for this hostel' });
        }

        const room = await Room.create({
            hostelId,
            roomNumber,
            floorNumber,
            capacity: capacity || 4,
        });

        res.status(201).json(room);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getRooms, createRoom };
