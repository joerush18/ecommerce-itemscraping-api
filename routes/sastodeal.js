const express = require("express");
//const { sastodealController } = require("../controllers/sastodeal");
const { sastodealController } = require("../scrapingController/sastodeal");
const router = express.Router();
router.get("/:itemname", sastodealController);

module.exports = router;
