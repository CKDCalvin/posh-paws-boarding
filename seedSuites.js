const mongoose = require('mongoose');
const dotenv = require ('dotenv');
const Suite = require('./models/Suite');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
    console.log('MongoDB connected for seeding');

    await Suite.deleteMany({});

    const dogSuites = Array.from({ length: 13 }, (_, i) => ({
        suiteNumber: i + 1,
        petType: "Dog",
        isAvalable: true,
    }));

    const catSuites = Array.from( { length: 12 }, (_, i) => ({
        suiteNumber: i + 1,
        petType: "Cat",
        isAvailable: true,
    }));

    await Suite.insertMany([...dogSuites, ...catSuites]);

    console.log('Suites seeded successfully!');
    process.exit();
})
.catch ((err) => {
    console.error(`Seeding error: ${err}`);
    process.exit(1);
});