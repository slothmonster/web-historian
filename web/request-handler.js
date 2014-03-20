var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelps = require('./http-helpers.js');
// require more modules/folders here!
var fs = require('fs');


var routes = {
  "/": __dirname + '/public/index.html',
  "/www.google.com": path.normalize(__dirname + '/../archives/sites/www.google.com')
}


exports.handleRequest = function (req, res) {
  var url = req.url;
  var route = routes[url];
  var data;
  console.log("url: " + url);
  console.log("route: " + route);
  console.log("data: ", data);
  
  if(route) {
    fs.readFile(route, function(err, data){
      if(err) {
        //if didn't read return internal error code
        throw err;
      }
      res.writeHead(200, httpHelps.headers);
      // Check our handlers, ensure not returning data before file-read finishes.
      res.end(data);
    });
  } else {
    res.writeHead(404, httpHelps.headers);
    res.end();
  }
};

serveRoot = function(){

}