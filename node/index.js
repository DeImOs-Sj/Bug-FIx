const fs = require("fs");
// fs.writeFileSync('read.txt', "welcome")
// fs.writeFileSync('read.txt', "welcome to my node js journey")

// fs.appendFileSync('read.txt', 'Hellowwww')


const buf_data = fs.readFileSync("read.txt");
org_data = buf_data.toString();
console.log(org_data);

fs.renameSync('read.txt', "readwrite.txt")
fs.appendFileSync('read.txt', 'Hellowwww')
