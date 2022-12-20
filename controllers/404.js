const path = require('path');
const rootDir = require('../util/path')

exports.getError = (req,res,next) =>{
  res.status(404).sendFile(path.join(rootDir,"views","404page.html"));
}