const fs = require("node:fs");

console.log(fs.readFileSync("package.json", "utf8"));
