function pasanganTerbesar(num) {
  let arrNum = [];
  const numString = num.toString();
  for ( let i = 0; i < numString.length-1; i++) {
    arrNum.push(parseInt(numString[i]+numString[i+1]));
  } 
  let result = Math.max(...arrNum);
  return result;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
