const fs = require("node:fs");

const checkDir = fs.readdirSync("Carpeta-nueva");
console.log(checkDir);
