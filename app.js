const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

const events_routes = require("./routes/event");

app.get("/", (req, res) => {
    res.send("Working");
});

app.use("/api/events", events_routes);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} Started`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
