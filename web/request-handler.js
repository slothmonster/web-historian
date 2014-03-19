var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelps = require('./http-helpers.js');
// require more modules/folders here!
var fs = require('fs');


exports.handleRequest = function (req, res, status) {
  status = status || 200;
  res.writeHead(status, httpHelps.headers);

  if(req.url === '/'){
    fs.readFile((__dirname + '/public/index.html'), function(err, data){
      if(err) throw err;
      res.end(data);
    });
  }
};
