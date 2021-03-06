const express = require("express");
const { darazController } = require("../controllers/daraz");
const router = express.Router();

router.get("/:itemname", darazController);

module.exports = router;
