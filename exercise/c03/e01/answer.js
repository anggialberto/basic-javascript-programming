function faktorialRekursif(angka) {
  if ( angka === 1 ) {
    return 1;
  }
  else {
    return angka * faktorialRekursif(angka-1);
  }
}

// TEST CASES
console.log(faktorialRekursif(3)); // 6
console.log(faktorialRekursif(4)); // 24
console.log(faktorialRekursif(5)); // 120
console.log(faktorialRekursif(2)); // 2
console.log(faktorialRekursif(1)); // 1
