const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/HotelHunt";

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("Connected to DB");

  // Reset collection
  await Listing.deleteMany({});
 

  // Insert new sample data
  await Listing.insertMany(initData.data);

  // Close connection
  mongoose.connection.close();
}

main().catch((err) => console.log(err));
