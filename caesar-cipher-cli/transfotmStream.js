const CaesarCipher = require('./CaesarCipherAlgorythm');
const { Transform } = require('stream');
class TransformStream extends Transform {
  constructor(shift, action){
    super();
    this.obj = new CaesarCipher(shift, action);
    // console.log(obj.encode('Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!'));
  }
  _transform(chunk, encoding, callback) {
    // console.log (chunk.toString('utf8'));
    try {
      const resultString = this.obj.encode(chunk.toString('utf8'));
      callback(null, resultString);
    } catch (err) {
      // console.log('tr err');
      callback(err);
    }
  }
}

module.exports = TransformStream;