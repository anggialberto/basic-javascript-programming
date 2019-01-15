// Tulisakan Contoh input disini!

if (peran === 'Ksatria') {
  var tugas = "kamu dapat menyerang dengan senjatamu!";
} else if (peran === 'Tabib') {
  var tugas = "kamu akan membantu temanmu yang terluka."
} else if (peran === 'Penyihir') {
  var tugas = "ciptakan keajaiban yang membantu kemenanganmu!";
} else {
 console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
 throw("");
}
console.log("Selamat datang di Dunia Proxytia, " + nama);
console.log("Halo " + peran + " "+ nama + ", " + tugas);
