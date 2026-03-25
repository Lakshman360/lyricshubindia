const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    hostelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hostel', required: true },
    date: { type: Date, required: true }, // Store the day, e.g., '2026-03-15' mapped to Date object
    time: { type: String, required: true }, // e.g., '08:30 AM'
    mealType: { type: String, enum: ['breakfast', 'lunch', 'dinner'], required: true },
    status: { type: String, enum: ['present', 'absent'], default: 'present' }
}, { timestamps: true });

module.exports = mongoose.model('Attendance', attendanceSchema);
