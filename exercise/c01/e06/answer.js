// Perulangan cek ganjil atau genap
for(var i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log("GENAP");
  } else {
    console.log("GANJIL");
  }
}

// Perulangan pertambahan counter sebesar 2
// Mencari kelipatan 3
for(var i = 1; i <= 100; i+=2) {
  if (i % 3 == 0) {
    console.log(i + " kelipatan 3");
  } else {
    console.log("");
  }
}

// Perulangan pertambahan counter sebesar 5
// Mencari kelipatan 6
for(var i = 1; i <= 100; i+=5) {
  if (i % 6 == 0) {
    console.log(i + " kelipatan 6");
  } else {
    console.log("");
  }
}

// Perulangan pertambahan counter sebesar 9
// Mencari kelipatan 10
for(var i = 1; i <= 100; i+=9) {
  if (i % 10 == 0) {
    console.log(i + " kelipatan 10");
  } else {
    console.log("");
  }
}
