var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelps = require('./http-helpers.js');
// require more modules/folders here!
var fs = require('fs');

var routes = {
  "/styles.css": __dirname + '/public/styles.css',
  "/": __dirname + '/public/index.html',
  "/www.google.com": path.normalize(__dirname + '/../archives/sites/www.google.com')
}

exports.handleRequest = function (req, res) {
  var url = req.url;
  var route = routes[url];
  var data;
  if(route) {
    httpHelps.serveAssets(res, route);
  } else {
    res.writeHead(404, httpHelps.headers);
    res.end();
  }
};
