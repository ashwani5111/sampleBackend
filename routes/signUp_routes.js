const express = require("express");
const router = express.Router();
const {checkFunction} = require("../collections/signUp.js");

router.get("/data",checkFunction);
module.exports = router;