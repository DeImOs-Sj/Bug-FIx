// const { error } = require('console');
const fs = require('fs');
const bioData = {
    name: "SHLOK",
    age: 20,
    clg: "NBN"
};
// // console.log(bioData.clg)
// const jsonData = JSON.stringify(bioData);
// const objData = JSON.parse(jsonData)
//  console.log(objData.name)
const data = JSON.stringify(bioData);
fs.writeFile("json1.json",data,(err)=> {
    // console.log("done");
})
fs.readFile("json1.json", "utf-8", (err, DATA) => {
    // console.log(DATA)
    const orgData = JSON.parse(DATA);
    console.log(DATA)
    console.log(orgData)

})