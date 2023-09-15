// Variable
let nama = "Agus";
let umur = 21;

// Konstanta
const PI = 3.14;

// Kondisional if else
if (umur > 18) {
  console.log("Anda sudah dewasa");
} else {
  console.log("Anda masih anak-anak");
}

// Kondisional switch case
switch (umur) {
  case 1:
    console.log("Anda masih bayi");
    break;
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Anda masih balita");
    break;
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    console.log("Anda masih anak-anak");
    break;
  default:
    console.log("Anda sudah dewasa");
}