const express = require("express");
var path = require("path");

const app = express();
const port = 3000;

app.set("appPath", __dirname + "/public");

app.use(express.static(app.get("appPath")));

app.get("*", (req, res) =>
  res.sendFile(path.join(app.get("appPath") + "/index.htm"))
);

app.listen(port, () =>
  console.log(`XPotfy running at http://localhost:${port}`)
);
