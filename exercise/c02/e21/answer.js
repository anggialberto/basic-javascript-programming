function tukarBesarKecil(kalimat) {
  let arrKalimat = kalimat.split("");
  let res = [];
  for (let i = 0; i < arrKalimat.length; i++) {
    if (arrKalimat[i].charCodeAt() >= 65 && arrKalimat[i].charCodeAt() <= 90) {
      res.push(arrKalimat[i].toLowerCase());
    } else if (arrKalimat[i].charCodeAt() >= 97 && arrKalimat[i].charCodeAt() <= 122) {
      res.push(arrKalimat[i].toUpperCase());
    } else {
      res.push(arrKalimat[i]);
    }
  }
  return res.join("");
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
