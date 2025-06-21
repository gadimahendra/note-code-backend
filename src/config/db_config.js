const mongoose = require('mongoose')


const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/note-code");
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error("MongoDB connection error:", err);
        process.exit(1); // Exit on failure
    }
}


module.exports = connectDb