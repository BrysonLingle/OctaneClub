///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables
require("dotenv").config();

// start the mongoose db connection
require("./config/db.connection.js");

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT, DATABASE_URI } = process.env;

// import express
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// import people router
const carsRouter = require('./routes/cars'); // Adjust the path as needed


// create application object
const app = express();

///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // parse json bodies - this will run before our request accesses the people router

app.use(cors()); // to minimize cors errors, open access to all origins
app.use(morgan("dev")); // logging for development

// all requests for endpoints that begin with '/people'
app.use("/cars", carsRouter);

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
  res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
