let cp = require("child_process");
// console.log("Tring to open calcultor");
// // cp.execSync("code");
// console.log("Opened calcultor");

console.log("Trying to open website");
cp.execSync("start chrome https:\\www.pepcoding.com");
console.log("Opened");
let output = cp.execSync("node abc.js");
console.log("output "+output);