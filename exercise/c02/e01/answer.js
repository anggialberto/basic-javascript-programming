function bandingkanAngka(angka1, angka2) {
  result = angka2 > angka1 ? true : angka2 === angka1 ? -1 : false;
  return result;
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
