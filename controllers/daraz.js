const { botDaraz } = require("../automation/bot");

exports.darazController = async (req, res, next) => {
  try {
    const items = await botDaraz(req.params.itemname);
    console.log("Get item completed....");
    res.status(200).json({
      items,
    });
  } catch (e) {
    res.staus(400).json({
      message: "Not Found at the moment",
    });
  }
};
