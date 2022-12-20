const path= require('path');
const rootDir = require('../util/path');


exports.getcontactUs = (req,res,next) =>{
  res.sendFile(path.join(rootDir,"views","contactus.html"));
}

exports.postcontactUs = (req,res,next) =>{
  console.log(req.body);
  res.redirect('/success');
}