require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Import the cors package
const app = express();
const connectDB = require("./config/connect");

const PORT = process.env.PORT || 5000;

const pastEvents = require("./routes/event");
const upcomingRoutes = require("./routes/upcoming");

app.get("/", (req, res) => {
    res.send("Working");
});

app.use(express.json());

// Enable CORS for all routes by using the cors middleware
app.use(cors()); // Add this line

app.use("/event/past", pastEvents);
app.use("/event/upcoming", upcomingRoutes);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Started`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
