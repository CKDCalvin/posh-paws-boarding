const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

const app = express();
app.use(cors({
    origin: [
        "https://localhost:3000",
        "https://poshpawsboarding.netlify.app/"
    ]
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRoutes);
app.use('/api/reservations', reservationRoutes);

console.log('PORT:', process.env.PORT);

// Connect to MongoDB
mongoose.set("bufferCommands", false);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

mongoose.connection.on("error", err => {
  console.error("Mongoose runtime error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

// mongoose.connect(process.env.MONGO_URI)
// .then(() => console.log('MongoDB connected'))
// .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));