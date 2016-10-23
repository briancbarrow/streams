///  *** Cache *** ///
// var Alphabet = require('./alphabet');
// var alpha = new Alphabet();
// var Cache = require('./cache');
// var cache = new Cache('alpha1');

// alpha.pipe(cache);

// cache.on('finish', function() {
//     console.log('Cache store:');
//     for (var key in Cache.store) {
//         console.log(key, ':', Cache.store[key]);
//     }
// });

/// *** Alphabet *** ///
// var Alphabet = require('./alphabet');
// var alpha = new Alphabet();
// alpha.on('data', function(chunk) {
//     console.log(chunk.toString());
// });

/// *** Readable *** ///
// var Random = require('./readable');
// var rand = new Random();

// rand.on('data', function(chunk) {
//     console.log(chunk.toString());
// });

/// *** Writable *** ///
var Log = require('./writable');
var Random = require('./readable');
var Evaluate = require('./transform');
var rand = new Random();
var log = new Log('number1');
var trans = new Evaluate();

rand.pipe(trans).pipe(log);

// log.on('finish', function() {
//     // console.log('Log store:');
//     // for (var key in Log.store) {
//     //     console.log(key, ':', Log.store[key]);
//     // }
// });