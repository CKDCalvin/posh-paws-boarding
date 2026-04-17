import React, { useState } from 'react';
import { getReservation } from '../../services/reservationService';
import '../../assets/styles/reservationLookup.css';

const ReservationLookup = () => {
    const [reservationId, setReservationId] = useState('');
    const [reservation, setReservation] = useState(null);
    const [error, setError] = useState('');

    const formatDateOnly = (dateString) => {
        const [year, month, day] = dateString.split("T")[0].split("-");
        return `${month}/${day}/${year}`;
    };

    const handleLookup = async (e) => {
        e.preventDefault();

        try {
            const data = await getReservation(reservationId);
            setReservation(data);
            setError('');
        } catch (err) {
            setReservation(null);
            setError('Reservation not found.');
        }
    };

    return (
        <div id="reservation-lookup-page">
            <div className="lookup-container">
                <h1>Reservation Lookup</h1>
                <p className="lookup-subtext">
                    Enter your reservation ID to view your booking details.
                </p>

                <form onSubmit={handleLookup} className="lookup-form">
                    <input
                        type="text"
                        placeholder="Enter Reservation ID"
                        value={reservationId}
                        onChange={(e) => setReservationId(e.target.value)}
                    />
                    <button type="submit">Lookup</button>
                </form>

                {error && <p className="lookup-error">{error}</p>}

                {reservation && (
                    <div className="lookup-card">
                        <h2>Reservation Details</h2>
                        <p><strong>Reservation ID:</strong> {reservation.reservationId}</p>
                        <p><strong>Owner Name:</strong> {reservation.ownerName}</p>
                        <p><strong>Pet Name:</strong> {reservation.petName}</p>
                        <p><strong>Pet Type:</strong> {reservation.petType}</p>
                        <p><strong>Suite Number:</strong> {reservation.suiteNumber}</p>
                        <p><strong>Check-In Date:</strong> {formatDateOnly(reservation.checkInDate)}</p>
                        <p><strong>Check-Out Date:</strong> {formatDateOnly(reservation.checkOutDate)}</p>
                        <p><strong>Status:</strong> {reservation.status}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReservationLookup;