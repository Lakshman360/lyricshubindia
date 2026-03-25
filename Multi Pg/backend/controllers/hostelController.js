const Hostel = require('../models/Hostel');

// @desc    Get all hostels for current owner
// @route   GET /api/hostels
// @access  Private/Owner
const getHostels = async (req, res) => {
    try {
        const hostels = await Hostel.find({ ownerId: req.user.id });
        res.status(200).json(hostels);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Create a new hostel
// @route   POST /api/hostels
// @access  Private/Owner
const createHostel = async (req, res) => {
    try {
        const { name, address, contactNumber } = req.body;

        if (!name || !address) {
            return res.status(400).json({ message: 'Please provide name and address' });
        }

        const hostel = await Hostel.create({
            name,
            address,
            contactNumber,
            ownerId: req.user.id
        });

        res.status(201).json(hostel);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Get single hostel
// @route   GET /api/hostels/:id
// @access  Private
const getHostelById = async (req, res) => {
    try {
        const hostel = await Hostel.findById(req.params.id);
        
        if (!hostel) {
            return res.status(404).json({ message: 'Hostel not found' });
        }

        // Check if owner owns this hostel, or if a student belongs to this hostel
        if (req.user.role === 'owner' && hostel.ownerId.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized for this hostel' });
        }
        
        if (req.user.role === 'student' && req.user.hostelId?.toString() !== hostel.id.toString()) {
             return res.status(401).json({ message: 'Not authorized for this hostel' });
        }

        res.status(200).json(hostel);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

module.exports = { getHostels, createHostel, getHostelById };
