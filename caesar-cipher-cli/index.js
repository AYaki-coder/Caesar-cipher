const path = require('path');
const fs = require('fs');
const { program } = require('commander');
const { pipeline } = require('stream');

const CaesarCipher = require('./CaesarCipherAlgorythm');
const validate = require('./validation');

console.log(process.argv);

program
  .storeOptionsAsProperties(false)
  .requiredOption('-s, --shift <shift>', 'a shift')
  .requiredOption('-a, --action <action>', 'an action encode/decode')
  .option('-i, --input <file>', 'an input file')
  .option('-o, --output <file>', 'an output file');
program.parse(process.argv);
let { shift, action, input, output } = program.opts();
console.log(input, output, shift, action);
validate(input, output, shift, action);

let obj = new CaesarCipher(7, false);
console.log(obj.encode('Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!'));