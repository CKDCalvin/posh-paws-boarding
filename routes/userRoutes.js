const express = require('express');
const router = express.Router();
const User = require('../models/User');

//REGISTER USER
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = new User({ username, email, password });
        await user.save();

        res.status(201).send('User registered successfully!');
    } catch (err) {
        res.status(500).json({ message: 'Registration error' });
    }
});

//LOGIN USER
router.post('/login', async (req, response) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.findOne({
            $or: [{ username: username }, { email: email }],
        });

        if (!user) {
            return response.status(404).json({ message: 'User not found' });
        }

        if (user.password !== password) {
            return response.status(400).json({ message: "Invalid credentials!" });
        }
        response.status(200).json({ messsage: "Login successful!" });
    } catch (err) {
        response.status(500).json({ message: 'Login error' });
    }
});


module.exports = router;