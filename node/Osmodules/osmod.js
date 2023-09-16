const os = require("os")

console.log(os.arch());
console.log(os.hostname());
console.log(os.type());

const freeMemory = os.freemem();
console.log(`${freeMemory/1024/1024/1024}`);