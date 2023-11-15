const testModule = require("../modules/testModules");

// Handler for GET requests to /api/test
const testGet = (req, res) => {
    try {
        // Sending a simple JSON response indicating the server is working
        res.status(200).json({
            message: "Server is working",
            test: "done",
        });
    } catch (e) {
        // Handling any unexpected errors and sending a 404 response with the error message
        res.status(404).json({ message: e.message });
    }
}

// Handler for POST requests to /api/test
const createTestPost = (req, res) => {
    const { test } = req.body;

    try {
        // Creating a new document in the 'testModules' collection using the testModule model
        testModule.create({
            test
        }).then((response) => {
            // Sending a JSON response indicating the operation was successful
            res.status(200).json({
                message: "Test data created successfully",
                ...req.body,
            });
        }).catch(e => {
            // Handling any errors that occur during the database operation and sending a 500 response
            res.status(500).json({ message: e.message });
            console.log(e.message);
        });
    } catch (e) {
        // Handling any unexpected errors and sending a 404 response with the error message
        res.status(404).json({ message: e.message });
    }
}

// Handler for retrieving all test data from the 'testModules' collection
const FindTestGet = (req, res) => {
    try {
        // Finding all documents in the 'testModules' collection
        testModule.find({}).then((response) => {
            // Sending a JSON response with the retrieved data
            res.status(200).json({
                message: "Test data retrieved successfully",
                ...response
            });
        }).catch(e => {
            // Handling any errors that occur during the database operation and sending a 500 response
            res.status(500).json({ message: e.message });
            console.log(e.message);
        });
    } catch (e) {
        // Handling any unexpected errors and sending a 404 response with the error message
        res.status(404).json({ message: e.message });
    }
}

// Exporting the handlers for use in other parts of the application
module.exports = {
    createTestPost,
    testGet,
    FindTestGet,
}
