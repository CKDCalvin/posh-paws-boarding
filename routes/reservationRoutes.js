const express = require('express');
const router = express.Router();
const { 
    createReservation, 
    getReservationById, 
    getAllReservations,
    updateReservation,
    deleteReservation, 
} = require('../controllers/reservationController');

router.post('/', createReservation);
router.get('/', getAllReservations);
router.get('/:reservationId', getReservationById);
router.put('/:reservationId', updateReservation);
router.delete('/:reservationId', deleteReservation);

module.exports = router;