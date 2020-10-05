class CaesarCipher {
  constructor(shift, isEncode) {
    if (isEncode === 'decode') {
      shift = 26 - shift;
    }
    this.shift = shift >= 0 ? (shift % 26) : 26 + (shift % 26);
  }
  
  encode(inputString) {
    const startABCUppecase = 'A'.charCodeAt(0);
    const endABCUppecase = 'Z'.charCodeAt(0);
    const startABC = 'a'.charCodeAt(0);
    const endABC = 'z'.charCodeAt(0);
    const newArr = [];

    inputString.split('').forEach(el => {
      if (el.charCodeAt(0) >= startABCUppecase && el.charCodeAt(0) <= endABCUppecase) {
        const newCharCode = (el.charCodeAt(0) - startABCUppecase + this.shift) % 26 + startABCUppecase;
        const newChar = String.fromCodePoint(newCharCode);
        newArr.push(newChar);
      } else if (el.charCodeAt(0) >= startABC && el.charCodeAt(0) <= endABC) {
        const newCharCode = (el.charCodeAt(0) - startABC + this.shift) % 26 + startABC;
        const newChar = String.fromCodePoint(newCharCode);
        newArr.push(newChar);
      } else {
        newArr.push(el);
      }
    });

    return (newArr.join(''));
  }
}

module.exports = CaesarCipher;