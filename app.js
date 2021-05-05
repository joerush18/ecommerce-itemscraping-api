const express = require("express");
const app = express();
const env = require("dotenv");
const routeSastodeal = require("./routes/sastodeal");
const routeDaraz = require("./routes/daraz");

const morgan = require("morgan");

env.config();

app.use(morgan("dev"));
app.use("/", (req, res, next) => {
  res.status(400).json({
    forDarz: "/rundaraz/<youitem>",
    forSastodeal: "/runsastodeal/<youritem>",
  });
});
app.use("/runsastodeal", routeSastodeal);
app.use("/rundaraz", routeDaraz);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
