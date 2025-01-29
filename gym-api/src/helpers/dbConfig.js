const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/index");

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI); // Removed deprecated options
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
