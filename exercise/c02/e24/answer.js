function ubahKapital(kalimat) {
  let arrKalimat = kalimat.split(" ");
  let res = "";
  for (let i = 0; i < arrKalimat.length; i++) {
    res += arrKalimat[i][0].toUpperCase();
    for (let j = 1; j < arrKalimat[i].length; j++) {
      res += arrKalimat[i][j];
    }
    res += " ";
  }
  return res;
}

// TEST CASES
console.log(ubahKapital('saya makan sushi')); // Saya Makan Sushi
console.log(ubahKapital('programming adalah hobi saya')); // Programming Adalah Hobi Saya
console.log(ubahKapital('menjadi developer adalah cita-cita saya')); // Menjadi Developer Adalah Cita-cita Saya
console.log(ubahKapital('i have a dream')); // I Have A Dream
console.log(ubahKapital('coding is fun')); // Coding Is Fun
