const browserOb = require("./browser");
const sController = require("./pageController");

exports.botSastodeal = (itemName) => {
  //start browser
  let browser = browserOb.startBrowser();

  //pass browser instance to sController
  const result = sController(browser, itemName);
  // TODO add input option and call
  // TODO add routes / more websites data / multithreading
  return result;
};

exports.botDaraz = () => {
  //start browser
  let browser = browserOb.startBrowser();

  //pass browser instance to sController
  const result = sController(browser);
  // TODO add input option and call
  // TODO add routes / more websites data / multithreading
  return result;
};
