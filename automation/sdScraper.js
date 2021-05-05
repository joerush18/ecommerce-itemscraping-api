const sastoDealscraperObject = {
  url: "http://www.sastodeal.com",
  async scraper(browser, itemName) {
    let page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);
    // wait until this selector is loaded
    await page.waitForSelector("#search");
    console.log("Inputting searching item....");
    await page.type("#search", itemName, { delay: 100 });
    await page.keyboard.press("Enter");
    console.log("Search Completed");
    console.log("Getting Data.......");
    await page.waitForNavigation();
    //  await page.waitForSelector(".products > ol > li");
    let itemsList = await page.$$eval(
      ".products-grid > ol > li",
      async (item) => {
        const details = [];
        await item.map((el) => {
          if (!el) {
            details.push({
              message: "We can't find products matching the selection.",
            });
          } else {
            const title = el.querySelector(".product-item-name > a ")
              .textContent;
            //extract from (id product-id-203156)
            const productId = el.querySelector(".price-wrapper").id;
            const id = productId.split("-")[2];
            // const discount = el.querySelector(".product-item-info > a > p.discount-blurb"// );
            const oldPrice = el.querySelector(`#${productId} >.price`)
              .textContent;
            const newPrice = el.querySelector(`#product-price-${id} > .price`)
              .textContent;
            const descLink = el.querySelector(".product-item-info > a").href;
            const imageLink = el.querySelector("img.product-image-photo").src;

            details.push({
              From: "Sasto Deal",
              id: id,
              title,
              oldPrice,
              newPrice,
              imageLink,
              descLink,
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

module.exports = sastoDealscraperObject;
