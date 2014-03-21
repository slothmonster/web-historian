var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

exports.serveAssetsForGet = function(res, asset) {
  if(asset.indexOf(".css") !== -1) {
    contentType = "text/css";
  } else {
    contentType = "text/html";
  }
  headers['Content-Type'] = contentType;
  fs.readFile(asset, function(err, data){
    if(err) {
      throw err;
    }
    res.writeHead(200, headers);
    res.end(data);
  });
};

exports.serveAssetsForPost = function(res, asset, req) {
  headers['Content-Type'] = "text/html";
  fs.readFile(asset, function(err, data){
    if(err) {
      throw err;
    }
    res.writeHead(302, {Location: "/loading.html"});
    res.end();
  });
};