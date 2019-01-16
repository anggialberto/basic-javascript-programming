# Proxytia to Next Level

## Objectives
- Mampu menggunakan variabel dengan benar
- Mampu melakukan operasi aritmatika pada JavaScript
- Mampu mengimplimentasikan perulangan menggunakan `for` atau `while`
- Mampu mengimplimentasikan `if-else if-else` dan mengerti logikanya

## Directions
Masih ingat dengan Proxytia? game yang pernah kamu buat pada tugas sebelumnya. Pada challenge kali ini kamu ditantang untuk mengembangkan game ini lebih lanjut. Ada beberapa perubahan yang akan perlu kamu lakukan agar game ini dapat dimainkan. Perhatikan langkah-langkahnya sebagai berikut:

1. Tambahkan variabel `yearOfBirth`, variabel ini akan diisi dengan tahun lahir pemain.
2. Isi variabel `age` sekarang adalah `2017 - yearOfBirth`.
3. Tambahkan variabel `playerHealth`, *assign* variabel ini dengan `yearOfBirth * Math.random()`
4. Tambahkan variabel `monsterHealth`, *assign* variabel ini dengan `yearOfBirth * Math.random()`
5. Tambahkan variabel `monsterCode`, *assign* variabel ini dengan `Math.floor(Math.pow(100, Math.random()))`
6. Pada logika `if` terhadap variabel `name`, apabila pemain tidak mengisi variabel, *assign* variabel `actor` dengan **kacung**
7. Setelah semua pengecekan menggunakan `if` selesai dilakukan, lakukan perulangan sebanyak `yearOfBirth`.
8. Di dalam perulangan tersebut, buat sebuah logika `if-else` untuk melakukan pengecekan sebagai berikut:
  - jika indeks perulangan adalah kelipatan `umur`:
    - `console.log(actor + ' ' + name + ' menyerang monster!')`
    - Kurangi `monsterHealth` dengan `age`
  - jika indeks perulangan adalah kelipatan `monsterCode`:
    - `console.log('monster menyerang ' + actor + ' ' + name + '!')`
    - Kurangi `playerHealth` dengan `monsterCode`
  - jika indeks perulangan adalah kelipatan `age` dan `monsterCode` sekaligus:
    - `console.log('Health keduanya bertambah')`
    - Tambahkan `playerHealth` dengan `monsterCode`
    - Tambahkan `monsterHealth` dengan `age`
9. Jika `playerHealth` lebih besar daripada `monsterHealth`:
  - `console.log('Selamat, ' + actor + ' ' + name + ' memenangkan pertarungan!')`
  - Jika sebaliknya, `console.log('Sayang sekali, ' + actor + ' ' + name + ' dikalahkan monster...')`

### Answer
Untuk mendapatkan jawabannya [klik disini!](answer.js)
