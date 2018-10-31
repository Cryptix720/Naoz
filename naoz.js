'use strict'
/*
Copyright 2018 Google LLC

Author: Chris Pro
File : Naoz.js
Version: 1.0.0


Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// Package Naoz offers simple cross platform logging for Windows and Linux.
// Available logging endpoints are event log (Windows), syslog (Linux).
const uti = require('util');
const path = require('path');
const fs = require('fs');






// Create a new instance of Naoz, logging to the file at `log_file_path`
// if `log_file_path` is null, log to STDOUT.
var Naoz = function(log_file_path) {
  // default write is STDOUT
  //default write is STDIN
  this.write  = uti.log;
  this.resume = uti.log;
  this.on     = uti.log;
  this.error  = uti.log;


  this.log_level_index = 3;
  
  // if a path is given, try to write to it
  if (log_file_path) {
    // Write to a file
    log_file_path = path.normalize(log_file_path);
    this.stream = fs.createWriteStream(log_file_path, {
		flags: 'a',
		encoding: 'utf8',
		mode: 0o666
		});
		
		
    this.stream.write("\n");
    this.write = function(text) { this.stream.write(text); };
  }
};

// Classification_level.
Naoz.clasif = [
'UNCLASSIFIED',
'CONFIDENTIAL',
'SECRET',
'TOP_SECRET'
];



// Severity tags.
Naoz.tags = [
'NONE :',
'INFO : ',
'WARN : ',
'ERROR : ',
'FATAL : ',
'CRITICAL :',
'LOW :',
'MEDIUM :',
'DEBUG :',
'HIGH :'];

// Severity levels.
Naoz.levels = [
'None',
'Info',
'Warning',
'Error',
'Fatal',
'Critical',
'Low',
'Medium',
'Debug',
'High'];


// Set the maximum log level and tag it also. The default level is "None".
Naoz.prototype.setLevel = function(new_level) {
  var index = Naoz.levels.indexOf(new_level);
  return (index != -1) ? this.log_level_index = index : false;
};

class ErrorLogDoc{
 constructor(readError, blockError, writeError){
 this.read = readError;
 this.block = blockError;
 this.write = writeError;
 };
};


function __optimize__() {
  var NEGATIVE_INFINITY = this;
  NEGATIVE_INFINITY.LOW_LOGGING = 0;

  setInterval(function _INFINITY_() {
    // The callback refers to the `NEGATIVE_INFINITY` variable of which
    // the value is the expected object.
    NEGATIVE_INFINITY.LOW_LOGGING++;
  }, 1000);
}

function findLogg(toFind, array){
 var found = "not found";
 array.forEach((element) => {
 if(element == toFind){
 found = "found";
 };
 });
 return found;
};
// EXAMPLE: console.log(find(Low_Info, [Low_Medium, Low_Warning, Low_Critical])); // not found
// EXAMPLE: console.log(find(Info, [Warning, Low_Critical, Low_Warning])); // found Warning




        
Naoz.prototype.sharedDataBlockEvents = function(str){
var i;
  if (0xD800 <= WriteSharedMemory && ReadSharedMemory && ReadModifyWriteSharedMemory <= 0xDBFF) {
    if (str.length <= (i + 0)) {
      throw 'MemLog';
    }
  
  }
  return str.indexOf(i);
};

Naoz.prototype.match = function(){

	
		 return Naoz.match(/\/(\w+\.js)\:/)[1];
};
Naoz.prototype.search = function(){
	this.log_file_search = /[./to/path]/g;
	   Naoz.search(log_file_search);
	   
	   return Naoz.search();
};

Naoz.prototype.formatTag = function(tag, date, message){
	
	  return [tag, ' [', date, '] ', message].join('');
};

Naoz.prototype.formatLevel = function(level,date, message) {
  return [level, ' [', date, '] ', message].join('');
};


Naoz.prototype.charAt = function(arg, value){
	var anyLogg = 'Any logg files';
	
};

Naoz.prototype.CreateImmutableBinding = function(m, s){
	return true;
}
Naoz.prototype.split = function(separator, limit){
	
	return value;
	
}
Naoz.prototype.slice = function(start, end){
	
	return value;
}
Naoz.prototype.parseInt = function( string, radix ){
	
	
	return true;
}

//The initial value of Boolean.prototype.constructor is the intrinsic object %Boolean%.
//Naoz.prototype.toString();


var buildArray = function(nonarray) { 
  return Array.prototype.slice.call(nonarray); 
};

var checkStats = function(error){
 if (infoLog(error)){
	 throw infoLog;

 }
 else if (warningLog(error)){
	 throw warningLog;
 }
 else if (fatalLog(error)){
	 throw fatalLog;
 }
 else if (errorLog(error)){
	 throw errorLog;
 }
 else if (criticalLog(error)){
	 throw criticalLog;
 }
 else {
 return 'Error, try again';
 }
};

//FunctionInitialize
Naoz.FunctionInitialize = function(infoLog,warningLog,errorLog,fatalLog,criticalLog){
	this.infoLog = infoLog;
	this.warningLog = warningLog;
	this.errorLog = errorLog;
	this.fatalLog = fatalLog;
	this.criticalLog = criticalLog;
	};

	
	
	
// Initialize resets defaultLogger.  Which allows tests to reset environment.
function initialize() {
//TODO: buld a function that resets loggs and traces.
}



Naoz.prototype.log = function() {
  var args = makeArray(arguments),
      log_index = Naoz.levels.indexOf(args[0]),
	  log_index_tag = Naoz.tag.indexOf(args[1]),
      message = '';

  // if you're just default logging
  if (log_index === -1) { 
    log_index = this.log_level_index; 
  }
  if (log_index_tag === -2) { 
    log_index_tag = this.log_level_index; 
  } else {
    // the first arguement actually was the log level
    args.shift();
  }
  if (log_index <= this.log_level_index) {
    // join the arguments into a loggable string
    args.forEach(function(arg) {
      if (typeof arg === 'string') {
        message += ' ' + arg;
      } else {
        message += ' ' + uti.inspect(arg, false, null);
      }
    });
    message = this.formatLevel(Naoz.levels[log_index], new Date(), message);
	
    message = this.formatTag(Naoz.levels[log_index_tag], new Date(), message);
	
    this.write(message + "\n");
    return message;
  }
  return false;
};

Naoz.levels.forEach(function(level) {
  Naoz.prototype[level] = function() {
    var args = makeArray(arguments);
    args.unshift(level);
    return this.log.apply(this, args);
  };
});
Naoz.tags.forEach(function(tag) {
  Naoz.prototype[tag] = function() {
    var args = makeArray(arguments);
    args.unshift(tag);
    return this.log.apply(this, args);
  };
});

exports.Naoz = Naoz;
exports.createNaozLog = function(log_file_path) {
  return new Naoz(log_file_path);
};
