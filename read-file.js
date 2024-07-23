const fs = require("node:fs");

const print = fs.readFileSync("package.json", "utf8");

console.log(print);
