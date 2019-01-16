function processSentence(name_param, age_param, address_param, hobby_param) {
  console.log("Nama saya " + name_param + ", umur saya " + age_param + ", alamat saya di " + address_param + ", dan saya punya hobby yaitu " + hobby_param);
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
