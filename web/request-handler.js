var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelps = require('./http-helpers.js');
// require more modules/folders here!
var fs = require('fs');

var routes = {
  "/styles.css": __dirname + '/public/styles.css',
  "/": __dirname + '/public/index.html',
  "/loading.html": __dirname + '/public/loading.html',
  //need to fix this to handle all of the archived urls
  "/www.google.com": path.normalize(__dirname + '/../archives/sites/www.google.com')
}

exports.handleRequest = function (req, res) {
  var url = req.url;
  var route = routes[url];
  var data;
  if(req.method === "POST"){
    handlePost(req, res);
  } else { // "GET"
    if(route) {
      httpHelps.serveAssetsForGet(res, route);
    } else {
      res.writeHead(404, httpHelps.headers);
      res.end();
    }
  }
};

var handlePost = function(req, res){
  //do the archiving
  var body = "";
  req.on("data", function(data) {
    body += data; // Read the buffer.
  });
  req.on("end", function() {
    // archive.addUrlToList(body.split("url=")[1]);
    httpHelps.serveAssetsForPost(res, body.split("url=")[1]);
  });
};