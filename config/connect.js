const mongoose = require("mongoose");

const connectDB = (uri) => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
}

module.exports = connectDB;
