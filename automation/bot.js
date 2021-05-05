const browserOb = require("./browser");
const { scrapeSastodealAll, scrapeDarazAll } = require("./pageController");

exports.botSastodeal = (itemName) => {
  //start browser
  let browser = browserOb.startBrowser();
  //pass browser instance to scrapepageController
  const result = scrapeSastodealAll(browser, itemName);

  return result;
};

exports.botDaraz = (itemName) => {
  //start browser
  let browser = browserOb.startBrowser();
  //pass browser instance to sController
  const result = scrapeDarazAll(browser, itemName);
  return result;
};
