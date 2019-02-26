class Mobil {

  constructor(merek, harga, warna, bensin, jumlahRoda) {
    this.merek = merek;
    this.harga = harga;
    this.warna = warna;
    this.bensin = bensin;
    this.jumlahRoda = jumlahRoda;
  }

  tampilkanSpesifikasi() {
    return (`Mobil saya bermerek ${this.merek} 
    dengan harga ${this.harga} rupiah, berwarna ${this.warna},
    bensinya ${this.bensin}, dan beroda ${this.jumlahRoda}`
    );
  }

  jualMobil() {
    return (`Harga Mobil : ${this.harga - (this.harga * 20 / 100)}`);
  }

}

const hando = new Mobil('Hando', 300000000, 'merah', 'solar', 4)
console.log(hando.tampilkanSpesifikasi());
console.log(hando.jualMobil())
