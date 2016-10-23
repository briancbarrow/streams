var stream = require('stream');

function Evaluate(options) {
    stream.Transform.call(this, options);
    this._comp = 100;
}
Evaluate.prototype = Object.create(stream.Transform.prototype);
Evaluate.prototype.constructor = Evaluate;

Evaluate.prototype._transform = function(chunk, encoding, callback) {
    var chunkNum = parseInt(chunk.toString(), 10);
    if (chunkNum > this._comp) {
    this.push(chunk);
    }
    callback();
};

module.exports = Evaluate;