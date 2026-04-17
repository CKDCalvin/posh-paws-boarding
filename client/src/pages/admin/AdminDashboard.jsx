import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    deleteReservation,
    getAllReservations,
} from "../../services/reservationService";
import { searchReservations } from "../../utils/searchReservations";
import { sortReservations } from "../../utils/sortReservations";
import styles from "../../assets/styles/AdminDashboard.module.css";

const AdminDashboard = () => {
    const [reservations, setReservations] = useState([]);
    const [query, setQuery] = useState("");
    const [sortType, setSortType] = useState("petName");

    const navigate = useNavigate();

    useEffect(() => {
        fetchReservations();
    }, []);

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("T")[0].split("-");
        return `${month}/${day}/${year}`;
    };

    const fetchReservations = async () => {
        try {
            const data = await getAllReservations();
            setReservations(data);
        } catch (error) {
            console.error("Error fetching reservations:", error);
        }
    };

    const handleDelete = async (reservationId) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this reservation?"
        );

        if (!confirmDelete) return;

        try {
            await deleteReservation(reservationId);
            alert("Reservation deleted successfully!");
            fetchReservations();
        } catch (error) {
            console.error(`Delete reservation error: ${error}`);
            alert("Failed to delete reservation.");
        }
    };

    let filtered = searchReservations(reservations, query);
    filtered = sortReservations(filtered, sortType);

    return (
        <div className={styles.dashboardPage}>
            <div className={styles.dashboardContainer}>
                <h1>Admin Dashboard</h1>
                <h2>All Reservations</h2>

                <div className={styles.controls}>
                    <input
                        type="text"
                        placeholder="Search by Reservation ID, Pet Name, or Pet Type"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className={styles.searchInput}
                    />

                    <select 
                        value={sortType}
                        onChange={(e) => setSortType(e.target.value)}
                        className={styles.sortSelect}
                    >
                        <option value="">Sort</option>
                        <option value="petName">Pet Name</option>
                        <option value="petType">Pet Type</option>
                        <option value="checkOutDate">Check-out Date</option>
                    </select>
                </div>

                <div className={styles.reservationGrid}> {/* filtering Reservation Cards */}
                    {filtered.map((res) => (
                        <div key={res._id} className={styles.reservationCard}>
                            <p><strong>ID:</strong> {res.reservationId}</p>
                            <p><strong>Owner:</strong> {res.ownerName}</p>
                            <p><strong>Pet:</strong> {res.petName}</p>
                            <p><strong>Type:</strong> {res.petType}</p>
                            <p><strong>Age:</strong> {res.petAge}</p>
                            <p><strong>Suite:</strong> {res.suiteNumber}</p>
                            <p><strong>Check-In:</strong> {formatDate(res.checkInDate)}</p>
                            <p><strong>Check-Out:</strong> {formatDate(res.checkOutDate)}</p>
                            <p><strong>Grooming:</strong> {res.groomingOption ? "Yes" : "No"}</p>
                            <p><strong>Status:</strong> {res.status}</p>

                            <div className={styles.buttonGroup}>
                                <button
                                    onClick={() => navigate(`/admin/edit/${res.reservationId}`)}
                                    className={styles.actionButton}
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => handleDelete(res.reservationId)}
                                    className={styles.deleteButton}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <p className={styles.emptyState}>No reservations found.</p>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;