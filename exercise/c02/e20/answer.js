function urutkanAbjad(str) {
  let arrString = str.split("");
  let abjad = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  for (let i = 0; i < arrString.length; i++) {
    for (let j = 0; j < arrString.length - 1; j++) {
      if (abjad.indexOf(arrString[j]) > abjad.indexOf(arrString[j + 1])) {
        let tmp = arrString[j];
        arrString[j] = arrString[j + 1];
        arrString[j + 1] = tmp;
      }
    }
  }
  return arrString.join("");
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
