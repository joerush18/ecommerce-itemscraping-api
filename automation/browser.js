const puppeteer = require("puppeteer");

const startBrowser = async () => {
  let browser;
  try {
    console.log("Opening browser");
    browser = await puppeteer.launch({
      headless: true,
    });
  } catch (e) {
    console.log(`Couldn't open browser : ${e}`);
  }
  return browser;
};
module.exports = {
  startBrowser,
};
