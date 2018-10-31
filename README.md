
![alt Naoz](https://github.com/Cryptix720/Naoz/blob/master/logo.png)

[![Known Vulnerabilities](https://snyk.io/test/github/Cryptix720/naoz/badge.svg)](https://snyk.io/test/github/Cryptix720/naoz)
![Dependencies](https://david-dm.org/Cryptix720/Naoz.svg)





[![https://nodei.co/npm/naoz.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/naoz.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/naoz)

# Naoz



## About
Naoz is a  bantamweight logging library for Windows, macOS and Linux.
And a universal logging library that combines the simple APIs.



## USAGE


Naoz has 10 different levels of severity levels and tags:
```js
  Levels:  'Fatal', 'Error', 'Warn', 'Info', 'None', 'Debug', 'Critical', 'Low', 'Medium', 'High'
  Tags: 'NONE :', 'INFO : ', 'WARN : ', 'ERROR : ', 'FATAL : ', 'CRITICAL :', 'LOW :', 'MEDIUM :', 'DEBUG :', 'HIGH :'
  
  //BETA TEST:   Customize your own Classification level 

  Clasif: 'UNCLASSIFIED', 'CONFIDENTIAL', 'SECRET', 'TOP_SECRET'
  
   ``` 
Every log levels has its own method on the logging instance. You can set the maximum log level on a Naoz at runtime. 

By default, a naoz writes to STDOUT, but given a writeable file path, it will log directly to a file.

```js



    var naoz = require('./naoz').createNaozLog(); // logs to STDOUT
    var naoz = require('./naoz').createNaozLog('test.log'); // logs to a file

```
### Customization:

You can simply customize the methods by changing `formatLevel()`, `formatTag()` etc.. .

```js
    naoz.formatLevel = function(level, date, message) {
      return date.getTime().toString() + "; " + message;
    };
    naoz.debug('message');
    //=> 1276365362167;  message
```
### Logging:

Any of the logging methods take `n` arguments, which are each joined by ' ' (similar to `console.log()`). 
If an argument is not a string, it is stringified by `uti.inspect()`

```js
    naoz.info('loading an array', [1,2,3], 'now!');
    //=> info [Sat Jun 12 2018 01:12:05 GMT-0400 (EDT)]  loading an array [ 1, 2, 3, [length]: 3 ] now!
    naoz.debug('this wont be logged by Naoz');
    //=> false
    naoz.setLevel('debug');
    naoz.debug('Naoz will logg it now');
    //=> debug [Sat Jun 12 2018 01:12:54 GMT-0400 (EDT)]  Naoz will logg it now.

```
    
## Contributing [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Cryptix720/Naoz/issues)

