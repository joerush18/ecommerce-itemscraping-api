const { botDaraz } = require("../automation/bot");

exports.darazController = async (req, res, next) => {
  const items = await botDaraz();
  console.log("Get item completed....");
  res.status(200).json({
    items,
  });
};
