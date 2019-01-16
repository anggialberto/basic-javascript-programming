function totalDigitRekursif(angka) {
  if (angka === Number(angka.toString().slice(-1))) {
    return Number(angka.toString().slice(-1));
  } else {
    return Number(angka.toString().substring(0, 1)) + totalDigitRekursif(Number(angka.toString().substring(1)));
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
