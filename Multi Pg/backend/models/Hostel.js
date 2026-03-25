const mongoose = require('mongoose');

const hostelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // The user with role 'owner'
    // Can add features/facilities array here later
    contactNumber: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Hostel', hostelSchema);
