const fs = require('fs');

let readFileSync = function(path){
  return JSON.parse(fs.readFileSync(path,'utf-8')); //readFileSync trả trực tiếp data
}

let readFile = function(path,onReadFileOne){
  fs.readFile(path,'utf-8',function(err,data){
    if (err) {
      console.log("Read Error!");
    }
    onReadFileOne(data);
  })
}

let writeFile = function(path,writedata,SuccessWrite){
  fs.writeFile(path,JSON.stringify(writedata),SuccessWrite)
}

module.exports = {
  readFileSync,
  writeFile,
  readFile,
}
