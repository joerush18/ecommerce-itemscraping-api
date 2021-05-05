const puppeteer = require("puppeteer");

const startBrowser = async () => {
  let browser;
  try {
    console.log("Opening browser");
    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
  } catch (e) {
    console.log(`Couldn't open browser : ${e}`);
  }
  return browser;
};
module.exports = {
  startBrowser,
};
