function perpangkatanDua(str) {
  let result;
  let range = Math.floor(Math.sqrt(str));
  for (let i = 0; i <= range; i++) {
      if ( 2 ** i === str ) {
        result = i;
        break;
      } else {
        result = -1;
      }
  }
  return result;
}

// TEST CASES
console.log(perpangkatanDua(64)); // 6
console.log(perpangkatanDua(22)); // -1
console.log(perpangkatanDua(16)); // 4
console.log(perpangkatanDua(222)); // -1
console.log(perpangkatanDua(1)); // 0
