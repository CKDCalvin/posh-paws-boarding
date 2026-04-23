import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_BASE_URL}/api/users`;

// Login User
export const loginUser = async (formData) => {
    const response = await axios.post(`${API_URL}/login`, formData);
    return response.data;
};

// Register User
export const registerUser = async (formData) => {
    const response = await axios.post(`${API_URL}/register`, formData);
    return response.data;
};