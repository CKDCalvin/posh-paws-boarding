const Suite = require("../models/Suite");

const assignSuite = async (petType) => { // Find the first empty suite for the specific pet type and assign it to the reservation pet  then mark it as unavailable
    try {
        console.log(`Assigning suite for pet type: ${petType}`);

        const availableSuite = await Suite.findOne({
            petType,
            isAvailable: true,
        }).sort({ suiteNumber: 1 });

        console.log("Suite found:", availableSuite);

        if (!availableSuite) {
            return null;
        }

        availableSuite.isAvailable = false;
        await availableSuite.save();

        return availableSuite;
    } catch (error) {
        console.log(`Error in assignment: ${error}`);
        throw error;
    }
};

module.exports = assignSuite;