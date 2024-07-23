const fs = require("node:fs");

fs.appendFileSync("nuevo_archivo.txt", "Agregando una segunda linea", "utf8");
