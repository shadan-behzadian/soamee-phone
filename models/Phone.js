const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//creat schema

const PhoneSchema = new Schema({
  name: { type: String },
  manufacturer: { type: String },
  description: { type: String },
  color: { type: String },
  price: { type: Number },
  imageFileName: { type: String },
  screen: { type: String },
  processor: { type: String },
  ram: { type: Number },
});

module.exports = Phone = mongoose.model("phone", PhoneSchema);
