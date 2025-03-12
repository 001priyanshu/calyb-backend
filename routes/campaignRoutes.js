const express = require("express");
const router = express.Router();
const {createCampaign, updateCampaign, getCampaign} = require("../controller/campaignController");


router.post('/', createCampaign);
router.patch("/:campaignId", updateCampaign);
router.get('/', getCampaign);

module.exports = router;