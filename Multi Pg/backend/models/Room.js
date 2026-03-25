const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    hostelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hostel', required: true },
    roomNumber: { type: String, required: true },
    floorNumber: { type: Number, required: true },
    capacity: { type: Number, required: true, default: 4 },
    occupants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Array of student user IDs
    status: { type: String, enum: ['available', 'full', 'maintenance'], default: 'available' }
}, { timestamps: true });

module.exports = mongoose.model('Room', roomSchema);
