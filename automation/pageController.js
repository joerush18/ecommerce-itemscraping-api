const sastodealScraper = require("./sdScraper");
const darazScraper = require("./darazScraper");

exports.scrapeSastodealAll = async (browserInst, itemName) => {
  let browser;
  try {
    browser = await browserInst;
    const result = await sastodealScraper.scraper(browser, itemName);
    return result;
  } catch (e) {
    console.log(`Error while browser instantation : ${e} `);
  }
};

exports.scrapeDarazAll = async (browserInst, itemName) => {
  let browser;
  try {
    browser = await browserInst;
    const result = await darazScraper.scraper(browser, itemName);
    return result;
  } catch (e) {
    console.log(`Error while browser instantation : ${e} `);
  }
};

//module.exports = (browserInst, itemName) => scrapeAll(browserInst, itemName);
