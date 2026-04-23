const { get } = require('mongoose');
const Reservation = require('../models/Reservation');
const Suite = require('../models/Suite');
const assignSuite = require('../utils/assignSuite');

//helper function to generate reservation ID
const generateReservationId = (petType) => {
    // Implementation for generating reservation ID
    const prefix = petType === 'Dog' ? 'DOG' : 'CAT';
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}-${randomNum}`;
};

//CREATE reservation
const createReservation = async (req, res) => {
    try {
        const {
            ownerName,
            petName,
            petType,
            petAge,
            checkInDate,
            checkOutDate,
            groomingOption,
            specialInstructions,
        } = req.body;

        console.log(`Incoming reservation data: ${JSON.stringify(req.body)}`); //log backend req body 

        //validation
        if (
            !ownerName ||
            !petName ||
            !petType ||
            !petAge ||
            !checkInDate ||
            !checkOutDate
        ) {
            return res.status(400).json({ message: "All required fields must be filled!" });
        }

        if (petType !== "Dog" && petType !== "Cat") {
            return res.status(400).json({ message: 'Pet type must be Dog or Cat.' });
        }

        //algorithm to assign suite
        const suite = await assignSuite(petType);

        if (!suite) {
            return res.status(400).json({ message: `No ${petType.toLowerCase()} suites available!` });
        }

        const reservationId = generateReservationId(petType);

        const reservation = new Reservation({
            reservationId,
            ownerName,
            petName,
            petType,
            petAge,
            suiteNumber: suite.suiteNumber,
            checkInDate,
            checkOutDate,
            groomingOption: petType === 'Dog' ? groomingOption : false,
            specialInstructions,
        });

        await reservation.save();

        res.status(201).json({ // 201 status code for successful creation
            message: "Reservation created successfully!",
            reservation,
        });
    } catch (error) {// catch any unexpected errors
        console.log(`Create reservation error: ${error}`);
        res.status(500).json({ message: "Server error while creating reservation." });
    }
};

//GET reservation by ID
const getReservationById = async (req, res) => {
    try {
        const reservation = await Reservation.findOne({
            reservationId: req.params.reservationId,
        });

        if (!reservation) { // if no reservation found with the given ID
            return res.status(404).json({ message: "Reservation not found!" });
        }

        res.status(200).json(reservation);
    } catch (error) { // catch any unexpected errors
        console.log(`Get reservation error: ${error}`); // Log the error for debugging purposes
        res.status(500).json({ 
            message: "Server error while fetching reservation.",
            error: error.message
         }); 
    }
};

// GET all reservations (for admin)
const getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find().sort({ createdAt: -1 }); // Sort by most recent first
        res.json(reservations);
    } catch (error) {
        console.error(`Fetch all reservations error:`, error); // Log the error for debugging
        res.status(500).json({ message: "Server error while fetching reservations." }); // Send a generic error message to the client

    }
};

// Update Reservation 

const updateReservation = async (req, res) => {
    try {
        const { reservationId } = req.params;

        const updatedReservation = await Reservation.findOneAndUpdate(
            { reservationId },
            req.body,
            { new: true, runValidators:  true }
        );

        if (!updateReservation) {
            return res.status(404).json({ message: "Reservation not found!" });
        }

        res.status(200).json({
            message: "Reservation updated successfully!",
            reservation: updatedReservation,
        });
    } catch (error) {
        console.log(`Update reservation error: ${error}`);
        res.status(500).json({
            message: "Server error while updating reservation.",
            error: error.message,
        });
        };
    }

// Delete Reservation

const deleteReservation = async (req, res) => {
    try {
        const { reservationId } = req.params;

        const reservation = await Reservation.findOneAndDelete({ reservationId });

        if (!reservation) {
            return res.status(404).json({ message: "Reservation not found!" });
        }

        await Suite.findOneAndUpdate(
            { 
                suiteNumber: reservation.suiteNumber,
                petType: reservation.petType, 
            },
            { isAvailable: true }
        );

        await Reservation.deleteOne({ reservationId });

        res.status(200).json({
            message: `Reservation ${reservationId} deleted successfully!`,
        });
    } catch (error) {
        console.log(`Delete reservation error: ${error}`);
        res.status(500).json({
            message: "Server error while deleting reservation.",
            error: error.message,
        });
    }
}

module.exports = {
    createReservation,
    getReservationById,
    getAllReservations,
    updateReservation,
    deleteReservation,
};