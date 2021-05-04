const express = require("express");
const { sastodealController } = require("../controllers/sastodeal");
const router = express.Router();

router.get("/:itemname", sastodealController);

module.exports = router;
