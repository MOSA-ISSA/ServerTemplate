// Importing the Express library
const express = require("express");
// Importing the controller functions from the 'Controller'
const { testGet, createTestPost, FindTestGet } = require("../controllers/Controller");
// Creating an Express Router instance
const testRouter = express.Router();

// Defining routes and associating them with their respective controller functions

//HTTP_METHOD - URL_PATH - CONTROLLER_FUNCTION
testRouter.get("/testGet", testGet);
testRouter.post("/createTestPost", createTestPost);
testRouter.get("/FindTestGet", FindTestGet);

// Exporting the testRouter for use in other parts of the application
module.exports = testRouter;
