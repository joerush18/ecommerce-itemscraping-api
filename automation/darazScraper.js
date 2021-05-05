const darazscraperObject = {
  url: "http://www.daraz.com.np",
  async scraper(browser, itemName) {
    let page = await browser.newPage();
    await page.setViewport({
      width: 1080,
      height: 720,
    });
    await page.setDefaultNavigationTimeout(0);
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);
    // wait until this selector is loaded
    await page.waitForSelector(".search-box__input--O34g");
    console.log("Inputting searching item....");
    await page.type(".search-box__input--O34g", itemName, {
      delay: 100,
    });
    await page.keyboard.press("Enter");
    console.log("Search Completed");
    console.log("Getting Data.......");
    await page.waitForNavigation();
    await page.waitForSelector(".c1z9Ut > .c1_t2i ");
    let itemsList = await page.$$eval(
      ".c1z9Ut >.c1_t2i > .c2prKC",
      async (item) => {
        const details = [];
        await item.map((el) => {
          if (!el) {
            details.push({ message: "Not found" });
          } else {
            const productId = el.getAttribute("data-item-id");
            const title = el.querySelector(".c16H9d > a").title;
            const price = el.querySelector(".c3gUW0 > span").textContent;
            const imageLink = el.querySelector(".c1ZEkM").src;
            const desLink = el.querySelector(".cRjKsc > a").href;

            details.push({
              From: "Daraz",
              id: productId,
              title,
              price,
              imageLink,
              desLink,
            });
          }
        });
        return details;
      }
    );
    await browser.close();
    return itemsList;
  },
};

module.exports = darazscraperObject;
