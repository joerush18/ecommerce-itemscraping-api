const puppeteer = require("puppeteer-core");

const startBrowser = async () => {
  let browser;
  try {
    console.log("Opening browser");
    browser = await puppeteer.launch({
      executablePath: `C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe`,
      headless: false,
    });
  } catch (e) {
    console.log(`Couldn't open browser : ${e}`);
  }
  return browser;
};
module.exports = {
  startBrowser,
};
