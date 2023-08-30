require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/connect");

const PORT = process.env.PORT || 5000;

const events_routes = require("./routes/event");

app.get("/", (req, res) => {
    res.send("Working");
});

app.use("/api/events", events_routes);

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
