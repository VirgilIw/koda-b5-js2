// (Nilai Diskon= HargaAwal x PersenDiskon/100)
// Total Belanja = HargaAwal - NilaiDiskon

let hargaAwal = 6e5;
let persenDiskon = 0;
let tidakValid;

if (hargaAwal < 0) {
  console.log("tidak valid");
} else if (hargaAwal < 5e5) {
  persenDiskon = 0;
} else if (hargaAwal >= 5e5 && hargaAwal <= 1e6) {
  persenDiskon = 5 / 100;
} else if (hargaAwal > 1e6) {
  persenDiskon = 10 / 100;
} else {
  console.log("harga ga masuk akal");
}

let totalDiskon = hargaAwal * persenDiskon;
let totalHarga = hargaAwal - totalDiskon;
console.log(totalDiskon);
console.log(totalHarga);

console.log(tidakValid);
