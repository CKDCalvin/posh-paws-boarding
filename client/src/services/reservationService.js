import axios from "axios";
const API_URL = "http://localhost:5000/api/reservations";

// CREATE reservation
export const createReservation = async (reservation) => {
    const res = await axios.post(API_URL, reservation);
    return res.data;
};

// GET reservation by ID
export const getReservation = async (reservationId) => {
    const res = await axios.get(`${API_URL}/${reservationId}`);
    return res.data;
}; 

// GET all reservations
export const getAllReservations = async () => {
    const res = await axios.get(API_URL);
    return res.data;
};

// UPDATE reservation
export const updateReservation = async (reservationId, updatedData) => {
    const res = await axios.put(
        `${API_URL}/${reservationId}`,
        updatedData
    );
    return res.data;
};

// DELETE reservation
export const deleteReservation =  async (reservationId) => {
    const res = await axios.delete(
        `${API_URL}/${reservationId}`,
    );
    return res.data;
}
