var stream = require('stream');

function Log (key, options) {
    stream.Writable.call(this, options);
    this._key = key;
    this._value = null;
    this.on('finish', function() {
        Log.store[this._key] = this._value;
    });
}
Log.store = {};
Log.prototype = Object.create(stream.Writable.prototype);
Log.prototype.constructor = Log;

Log.prototype._write = function(chunk, encoding, callback) {
    // console.log(parseInt(chunk.toString(), 10));
    if (!this._value) {
        this._value = chunk;
    } else {
        this._value = Buffer.concat([this._value, chunk]);
    }
    console.log(chunk.toString());
    callback();
};

module.exports = Log;