const express = require("express");
// const chalk = require("chalk");

// ดู event
const debug = require("debug")("app");
// ดู log
const morgan = require("morgan");
//  declare app and port
const app = express();
const port = 3000;
app.use(morgan("combined"));
app.get("/", (req, res) => {
  res.send("Hello borntodev xx");
});

app.listen(port, () => {
  debug("Listening on port", port);
});
