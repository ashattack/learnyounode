const fs = require('fs')  


const fileName = process.argv[2]

const fileBuffer = fs.readFileSync(fileName)

const fileString = fileBuffer.toString()

const number_of_newlines = fileString.split('\n').length - 1

console.log(number_of_newlines)
