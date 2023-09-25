///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema
///////////////////////////////
// MODELS
////////////////////////////////
const CarsSchema = new Schema({
  name: String,
  image: String,
  title: String,
},{timestamps: true});

module.exports = mongoose.model("Cars", CarsSchema);

