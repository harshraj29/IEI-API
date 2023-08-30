const express = require("express");
const router = express.Router();


const {getAllEvent,getAllEventTesting}  = require("../controllers/event");

router.route("/").get(getAllEvent);
router.route("/testing").get(getAllEventTesting);


module.exports = router;