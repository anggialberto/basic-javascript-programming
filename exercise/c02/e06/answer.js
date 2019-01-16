function palindrome(kata) {
  let wordLength = kata.length;
  let result = kata[0] === kata[wordLength-1] ? true : false;
  return result;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
