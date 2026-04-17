const mongoose = require ('mongoose');

const suiteSchema = new mongoose.Schema({
    suiteNumber: {
        type: Number,
        required: true,
    },
    petType: {
        type: String,
        required: true,
        enum: ["Dog", "Cat"],
    },
    isAvalable: {
        type: Boolean,
        default: true,
    },
},
{ timestamps : true});

module.exports = mongoose.model('Suite', suiteSchema);