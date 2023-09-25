// routes/people.js

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

const carsCtrl = require('../controllers/cars')

///////////////////////////////
// ROUTES
////////////////////////////////

// PEOPLE INDEX ROUTE
router.get("/", carsCtrl.index);

// PEOPLE CREATE ROUTE
router.post("/", carsCtrl.create);

// PEOPLE SHOW ROUTE
router.get("/:id", carsCtrl.show);


router.delete("/:id", carsCtrl.delete);


router.put("/:id", carsCtrl.update);


module.exports = router

