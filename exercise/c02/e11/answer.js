function tentukanDeretAritmatika(arr) {
  let result;
  for( let i = 1; i < arr.length-1; i++ ) {
    result = arr[i+1] - arr[i] === arr[0] ? true : false;
    if ( !result) {
        break;
    }
  }
  return result;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
