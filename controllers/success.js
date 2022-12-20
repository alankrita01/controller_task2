const path = require('path')
const rootDir=require('../util/path');

exports.getSuccess = (req,res,next) =>{
  console.log('"Form successfuly filled"');
  res.write('<h1>Form successfuly filled :)</h1>');

}