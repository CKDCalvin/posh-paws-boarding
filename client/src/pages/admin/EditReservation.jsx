import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReservation, updateReservation } from "../../services/reservationService";
import "../../assets/styles/editReservation.css";

const EditReservation = () => {
    const { reservationId } = useParams();

    const [form, setForm] = useState({
        ownerName: "",
        petName: "",
        petType: "Dog",
        petAge: "",
        checkInDate: "",
        checkOutDate: "",
        groomingOption: false,
        status: "checked-in",
    });

    const [error, setError] = useState("");

    useEffect(() => {
        fetchReservation();
    }, []);

    const fetchReservation = async () => {
        try {
            const data = await getReservation(reservationId);

            setForm({
                ownerName: data.ownerName || "",
                petName: data.petName || "",
                petType: data.petType || "Dog",
                petAge: data.petAge || "",
                checkInDate: data.checkInDate ? data.checkInDate.split("T")[0] : "",
                checkOutDate: data.checkOutDate ? data.checkOutDate.split("T")[0] : "",
                groomingOption: data.groomingOption || false,
                status: data.status || "checked-in",
            });
        } catch (error) {
            console.error(`Error fetching reservation: ${error}`);
            setError("Failed to load reservation");
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateReservation(reservationId, form);
            alert("Reservation successfully updated!");
            window.location.href = "/admin";
        } catch (error) {
            console.error(`Reservation update error: ${error}`);
            setError(
                error.response?.data?.message || "Failed to update reservation!"
            );
        }
    };

    return (
        <div id="edit-reservation-page">
            <div className="edit-reservation-container">
                <h1>Edit Reservation</h1>
                <p className="edit-subtext">
                    Update the reservation details below and save your changes.
                </p>

                {error && <p className="edit-error">{error}</p>}

                <form onSubmit={handleSubmit} className="edit-reservation-form">
                    <div className="form-group">
                        <label htmlFor="ownerName">Owner Name:</label>
                        <input
                            type="text"
                            id="ownerName"
                            name="ownerName"
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

                    {form.petType === "Dog" && (
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

                    <div className="form-group">
                        <label htmlFor="status">Status:</label>
                        <select
                            id="status"
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                        >
                            <option value="checked-in">Checked-In</option>
                            <option value="checked-out">Checked-Out</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                    </div>

                    <button type="submit" className="save-btn">Save Changes</button>
                </form>
            </div>
        </div>
    );
};

export default EditReservation;