const mongoose = require('mongoose')


const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB!");
        // await mongoose.connect("mongodb://localhost:27017/note-code");
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit on failure
    }
}


module.exports = connectDb