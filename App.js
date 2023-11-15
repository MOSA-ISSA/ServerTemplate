const express = require("express");
const mongoose = require("mongoose");
const Routes = require("./api/routes/MainRouter");
const app = express();
app.use(express.json());

// Connect to MongoDB (replace 'your_database' with your actual database name)
const mongooseLink = "mongodb<your_database>"
mongoose.connect(mongooseLink);

// when your_database connected
mongoose.connection.on("connected", () => {
  console.log("mongo connected");
});

// error case
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

// Define your routes or API endpoints here
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
//example

app.use("/", Routes);
//By using app.use("/", Routes);
//you are essentially saying, "For any request that comes to the root path ("/"), use the routes defined in the Routes array."

// export to "./server" to run in your port"
module.exports=app;