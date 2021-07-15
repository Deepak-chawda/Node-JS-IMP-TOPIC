// schema for store data in mongodb
const mongoose = require("mongoose");
const schemaStudent = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email id already present"],
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});
const StudentId = new mongoose.model("frdcollection", schemaStudent);
module.exports = StudentId;
