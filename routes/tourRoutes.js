const express = require("express");
const router = express.Router();
const {getNextStep, botMessage} = require("../controller/tourController");



router.post('/next-step', getNextStep);
router.post('/message', botMessage);

module.exports = router;