const p = require("path");//path is build in module which provide some utilities for files and directors.
const pri = p.parse(__filename);
console.log(pri);


//modules to get os details
const os = require("os");
console.log(os.totalmem());
console.log(os.freemem());