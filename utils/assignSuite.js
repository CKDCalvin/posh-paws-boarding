const Suite = require("../models/Suite");

const assignSuite = async (petType) => { // Find the first empty suite for the specific pet type and assign it to the reservation pet  then mark it as unavailable
    const availableSuite = await Suite.findOne({
        petType,
        isAvalable: true,
    }).sort({ suiteNumber: 1});

    if (!availableSuite) {
        return null;
    }

    availableSuite.isAvalable = false;
    await availableSuite.save();

    return availableSuite;
};

module.exports = assignSuite;