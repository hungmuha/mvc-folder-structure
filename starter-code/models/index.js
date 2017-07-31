var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/airport");

module.exports.Cargo= require('./cargo');