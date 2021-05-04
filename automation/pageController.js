const pageScraper = require("./scraper");

const scrapeAll = async (browserInst, itemName) => {
  let browser;
  try {
    browser = await browserInst;
    const result = await pageScraper.scraper(browser, itemName);
    return result;
  } catch (e) {
    console.log(`Error while browser instantation : ${e} `);
  }
};

module.exports = (browserInst, itemName) => scrapeAll(browserInst, itemName);
