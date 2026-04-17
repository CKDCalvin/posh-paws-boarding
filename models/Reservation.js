const mongoose = require('mongoose');
const reservationSchema = new mongoose.Schema({
    reservationId: {
        type: String,
        required: true,
        unique: true,
    },
    ownerName: {
        type: String,
        required: true,
    },
    petName: {
        type: String,
        required: true,
    },
    petType: {
        type: String,
        required: true,
        enum: ["Dog", "Cat"],
    },
    petAge: {
        type: Number,
        required: true,
    },
    suiteNumber: {
        type: Number,
        required: true,
    },
    checkInDate: {
        type: Date,
        required: true,
    },
    checkOutDate: {
        type: Date,
        required: true,
    },
    groomingOption: { type: Boolean, default: false, },
    status: { type: String, default: 'checked-in', enum: ['checked-in', 'checked-out',] },
    specialInstructions: {
        type: String,
    },
},
    { timestamps: true }
);

module.exports = mongoose.model('Reservation', reservationSchema);