function xo(str) {
  let x = [];
  let o = [];
  for ( let i = 0; i < str.length; i++ ){
    if ( str[i] === "x" ){
        x.push("x");
    } else {
        o.push("o");
    }
  }
  let result = x.length === o.length ? true : false;
  return result;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
