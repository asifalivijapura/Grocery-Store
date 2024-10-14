const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/groceryStore";

const mongoConnect = async () => {
    try {
        // Connect to MongoDB using Mongoose
        await mongoose.connect(mongoURI);
        console.log("Database Server Connected");
    } catch (error) {
        console.error("Database Connection Error:", error.message);
        process.exit(1); // Exit the process if the connection fails
    }
};

module.exports = mongoConnect;