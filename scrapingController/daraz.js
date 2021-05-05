const cheerio = require("cheerio");
const request = require("request");

const LINK = `https://www.daraz.com.np/catalog/?q=`;
exports.darazController = (req, res, next) => {
  try {
    const id = req.params.itemName;
    request(LINK + id, (err, resp, html) => {
      const $ = cheerio.load(html);
      const details = [];
      $(".c2prKC").each((index, el) => {
        const id = $(el).attr("data-item-id");
        const title = $(el).find("a.c16H9d").attr("title");
        console.log(title);
        const price = $(el).find(".c3gUW0 > span").text();
        const imageLink = $(el).find(".c1ZEkM").attr("src");
        const descLink = $(el).find(".cRjKsc > a").attr("href");
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
        items: details,
      });
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
