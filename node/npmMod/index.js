// cl
// console.log(chalk.blue.italic("hello world"));
const validator = require("validator");
const res = validator.isEmail("shlokjagtap.0608@gmail.com")
console.log(res);
// console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res))