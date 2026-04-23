const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

const app = express();

app.use(cors({
    origin: [
        "http://localhost:3000",
        "https://poshpawsboarding.netlify.app"
    ]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/reservations', reservationRoutes);

app.get("/", (req, res) => {
    res.send("Posh Paws Boarding backend is running.");
});

mongoose.set("bufferCommands", false);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");

        mongoose.connection.on("error", err => {
            console.error("Mongoose runtime error:", err);
        });

        mongoose.connection.on("disconnected", () => {
            console.log("Mongoose disconnected");
        });

        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
};

startServer();