var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var httpReq = require('http-request');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(func){
  var urls = [];
  fs.readFile(paths.list, {encoding:'utf8'}, function(err, data){
    if(err){
      throw err;
    }
    urls = data.split("\n");
      // var urls = data.split("\n");
    func(urls);
  });
};

exports.isUrlInList = function(){
};

exports.addUrlToList = function(newURL){
  fs.appendFile(paths.list, newURL + "\n", function(err) {
    if(err) {
      throw err;
    }
  });
};

exports.isURLArchived = function(){
};

exports.downloadUrls = function(){
  httpReq.get(options, file, callback);
};

//get html copy of new page
//archive the new page
//add to list
//send it back