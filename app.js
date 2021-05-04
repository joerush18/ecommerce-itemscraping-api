const express = require("express");
const app = express();
const env = require("dotenv");
const routeSastodeal = require("./routes/sastodeal");
const routeDaraz = require("./routes/daraz");

const morgan = require("morgan");

env.config();

app.use(morgan("dev"));

app.use("/runsastodeal", routeSastodeal);
app.use("/rundaraz", routeDaraz);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
