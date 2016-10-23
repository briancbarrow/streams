var stream = require('stream');

function Random(options) {
    stream.Readable.call(this, options);
    this._end = 10;
    this._count = 0;
}
Random.prototype = Object.create(stream.Readable.prototype);
Random.prototype.constructor = Random;

Random.prototype._read = function() {
    var num = Math.floor(Math.random() * (200 - 1 + 1));
    num = num.toString(10);
    console.log('test: ', num);
    var buf = new Buffer(num);
    this.push(buf);
    this._count++;
    if (this._end === this._count) {
        this.push(null);
    }
};

module.exports = Random;