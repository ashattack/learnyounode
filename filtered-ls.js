const fs = require('fs');

const path = process.argv[2]
const fileExtension = process.argv[3]
fs.readdir(path,function(err,fileList){
    

fileList.map(function(fileName){
    if ( fileName.endsWith("."+fileExtension)) {
        console.log(fileName)
    }
    

})
})