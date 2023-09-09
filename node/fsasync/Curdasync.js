const fs = require("fs")

// fs.mkdir('async', (err) => {
//     console.log("folder created")
// })
// fs.writeFile("./async/lmao.txt", "My name is shlok jagtap", "utf-8", (err) => {
//     console.log("file created");
// })
// fs.appendFile("./async/lmao.txt", "oesgoesigneosingrsoisngsior", (err) => {
//     console.log("appended ")
// })
// fs.rename("./async/lmao.txt", "./async/bio.txt", (err) => { console.log("renamed") })
fs.unlink("./async/bio.txt", (err) => { console.log("deleted") })