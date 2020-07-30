const fs = require('fs')
const fileName = process.argv[2]


const funkyFunction = (arr,fileText) => console.log(fileText.split("\n").length-1);
fs.readFile(fileName, "utf8", funkyFunction)
