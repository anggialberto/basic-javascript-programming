function kaliTerusRekursif(angka) {
  if (angka === Number(angka.toString().slice(-1))) {
    return Number(angka.toString().slice(-1));
  } else {
    return kaliTerusRekursif(Number(angka.toString().substring(0, 1)) * kaliTerusRekursif(Number(angka.toString().substring(1))));
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
