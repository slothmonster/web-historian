var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var httpReq = require('http-request');
var httpHelps = require('../web/http-helpers.js');

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

exports.readListOfUrls = function(callback){
  var urls = [];
  fs.readFile(paths.list, {encoding:'utf8'}, function(err, data){
    if(err){ throw err; }
    urls = data.split("\n");
    callback(urls);
  });
};

exports.isUrlInList = function(targetUrl, callback){
  exports.readListOfUrls(function(urls) {
    if(_.contains(urls, targetUrl)){
      callback(targetUrl);
    }
  });
};

exports.addUrlToList = function(newURL){
  fs.appendFile(paths.list, newURL + "\n", function(err) {
    if(err) {
      throw err;
    }
  });
};

exports.isURLArchived = function(targetUrl, callback){
  // console.log(path.normalize(__dirname + "/../archives/sites/" + target));
  fs.readFile(path.normalize(__dirname + "/../archives/sites/" + target), function(err, data){
    if(err){
      throw err;
    } else {
      callback(targetUrl);
    }
  })
};

exports.downloadUrls = function(){
  httpReq.get(options, file, callback);
};

//check if in list
  //if yes
    //check if in archive
      //if yes -> serve archived page via redirect
      //if no -> serve loading.html via redirect
  // if no
    //add to list
    //serve loading.html via redirect
//Trust that cron is running and doing its job.