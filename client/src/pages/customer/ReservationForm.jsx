import React, { useState } from 'react';
import { createReservation } from '../../services/reservationService';
import '../../assets/styles/reservationForm.css';

const ReservationForm = () => {
    const [form, setForm] = useState({
        ownerName: '',
        petName: '',
        petType: 'Dog',
        petAge: '',
        checkInDate: '',
        checkOutDate: '',
        groomingOption: false,
    });

    const [confirmation, setConfirmation] = useState(null);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting reservation form:", form);

        try {
            const data = await createReservation(form);
            setConfirmation(data);
            setError('');

            setForm({
                ownerName: '',
                petName: '',
                petType: 'Dog',
                petAge: '',
                checkInDate: '',
                checkOutDate: '',
                groomingOption: false,
            });
        } catch (err) {
            setConfirmation(null);
            setError(
                err.response?.data?.message || 'Failed to create reservation. Please try again.'
            );
        }
    };

    return (
        <div id="reservation-page">
            <div className="reservation-container">
                <h1>Reserve a Boarding Spot</h1>
                <p className="reservation-subtext">
                    Please complete the form below to reserve a suite for your pet.
                </p>

                <form onSubmit={handleSubmit} className="reservation-form">
                    <div className="form-group">
                        <label htmlFor="ownerName">Owner Name:</label>
                        <input
                            type="text"
                            id="ownerName"
                            name="ownerName"
                            placeholder="Owner Name"
                            value={form.ownerName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="petName">Pet Name:</label>
                        <input
                            type="text"
                            id="petName"
                            name="petName"
                            placeholder="Pet Name"
                            value={form.petName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="petType">Pet Type:</label>
                        <select
                            id="petType"
                            name="petType"
                            value={form.petType}
                            onChange={handleChange}
                        >
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="petAge">Pet Age:</label>
                        <input
                            type="number"
                            id="petAge"
                            name="petAge"
                            placeholder="Pet Age"
                            value={form.petAge}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="checkInDate">Check-In Date:</label>
                            <input
                                type="date"
                                id="checkInDate"
                                name="checkInDate"
                                value={form.checkInDate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="checkOutDate">Check-Out Date:</label>
                            <input
                                type="date"
                                id="checkOutDate"
                                name="checkOutDate"
                                value={form.checkOutDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {form.petType === 'Dog' && (
                        <div className="checkbox-group">
                            <label htmlFor="groomingOption">
                                <input
                                    type="checkbox"
                                    id="groomingOption"
                                    name="groomingOption"
                                    checked={form.groomingOption}
                                    onChange={handleChange}
                                />
                                Add Grooming Option
                            </label>
                        </div>
                    )}

                    <button type="submit" className="submit-btn">
                        Submit Reservation
                    </button>
                </form>

                {error && <p className="error-message">{error}</p>}

                {confirmation && (
                    <div className="confirmation-card">
                        <h2>Reservation Confirmed!</h2>
                        <p><strong>Message:</strong> {confirmation.message}</p>
                        <p><strong>Reservation ID:</strong> {confirmation.reservation.reservationId}</p>
                        <p><strong>Assigned Suite:</strong> {confirmation.reservation.suiteNumber}</p>
                        <p><strong>Pet Name:</strong> {confirmation.reservation.petName}</p>
                        <p><strong>Pet Type:</strong> {confirmation.reservation.petType}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReservationForm;