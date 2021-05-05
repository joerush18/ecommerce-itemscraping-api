//www.sastodeal.com/catalogsearch/result/?q=chini
const cheerio = require("cheerio");
const request = require("request");

const LINK = `https://www.sastodeal.com/catalogsearch/result/?q=`;
exports.sastodealController = (req, res, next) => {
  try {
    const id = req.params.itemName;
    request(LINK + id, (err, resp, html) => {
      const $ = cheerio.load(html);
      const details = [];
      $(".products-grid > ol > li").each((index, el) => {
        const id = $(el).find(".price-wrapper").attr("id").split("-")[2];
        const title = $(el).find(".c16H9d > a").attr("title");
        console.log(title);
        const price = $(el).find(".price").text();
        const imageLink = $(el).find("img.product-image-photo").attr("src");
        const descLink = $(el).find(".product-item-info > a").attr("href");
        details.push({
          From: "Daraz",
          id,
          title,
          price,
          imageLink,
          descLink,
        });
      });
      res.status(200).json({
        details,
      });
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
