const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['owner', 'student'], required: true },
    hostelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hostel' }, // Optional for super-admin, required for specific hostel users
    
    // Student specific fields
    roomNumber: { type: String },
    floorNumber: { type: Number },
    feeStatus: { type: String, enum: ['paid', 'unpaid', 'pending'], default: 'unpaid' },
    parentContact: { type: String },
    uniqueQrId: { type: String } // For generating QR codes for attendance
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
