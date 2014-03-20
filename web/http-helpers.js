var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
  // 'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset, contentType) {
  // gett it f/m the url somehow??
  // contentType = asset.parseURLImMakingThisUP(".extension");
  if(asset.indexOf(".css") !== -1) {
    contentType = "text/css";
  } else {
    contentType = "text/html";
  }
  headers['Content-Type'] = contentType;
  fs.readFile(asset, function(err, data){
    if(err) {
      //if didn't read return internal error code
      throw err;
    }
    res.writeHead(200, headers);
    // Check our handlers, ensure not returning data before file-read finishes.
    res.end(data);
  });
};
