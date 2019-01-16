function dataHandling(bioArr){
  for(var i = 0; i < bioArr.length; i++){
    console.log("Nomor ID: " + bioArr[i][0]);
    console.log("Nama Lengkap: " + bioArr[i][1]);
    console.log("TTL: " + bioArr[i][2] + " " + bioArr[i][3]);
    console.log("Hobi: " + bioArr[i][4]);
    console.log("");
  }
}

var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

console.log(dataHandling(input));
