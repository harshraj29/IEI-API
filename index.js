const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose"); 

const PORT = process.env.PORT || 3000;

const mongoURI = "mongodb+srv://ieicse:djR81oapTljwGNHU@ieidb.d7nudln.mongodb.net/IEIDB?retryWrites=true&w=majority";

const pastEvents = require("./routes/event");
const upcomingRoutes = require("./routes/upcoming");
const galleryRoutes = require('./routes/gallery');

app.get("/", (req, res) => {
    res.send("Working");
});

app.use(express.json());
app.use(cors());

app.use("/event/past", pastEvents);
app.use("/event/upcoming", upcomingRoutes);
app.use('/gallery', galleryRoutes);

const start = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(PORT, () => {
            console.log(`${PORT} Started`);
        });
    } catch (error) {
        console.error(error);
    }
};

start();
