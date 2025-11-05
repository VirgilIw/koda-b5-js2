let hargaAwal = 6e5;
let persenDiskon = 0;
let tidakValid;

switch (true) {
  case hargaAwal < 0:
    console.log("tidak valid");
    break;
  case hargaAwal < 5e5:
    persenDiskon = 0;
    break;
  case hargaAwal >= 5e5 && hargaAwal <= 1e6:
    persenDiskon = 5 / 100;
    break;
  case hargaAwal > 1e6:
    persenDiskon = 10 / 100;
    break;
  default:
    console.log("invalid");
}

let totalDiskon = hargaAwal * persenDiskon;
let totalHarga = hargaAwal - totalDiskon;
console.log(totalDiskon);
console.log(totalHarga);
