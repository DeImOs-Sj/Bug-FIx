const fs = require('fs')
// fs.mkdirSync("Shlok");
fs.writeFileSync('bio.txt', 'lol');

fs.appendFileSync('bio.txt', 'iadbfidaf')
// fs.readFileSync('bio.txt')   
fs.unlinkSync('bio.txt')