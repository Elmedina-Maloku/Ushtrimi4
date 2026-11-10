const aktiviteti = 18;
const projekti = 24;
let provimi = 43;

let totali = aktiviteti + projekti + provimi;
let perqindja = (totali / 100) * 100;

console.log("Rezultati fillestar:");
console.log("Totali i pikeve:", totali);
console.log("Perqindja:", perqindja, "%");

provimi = 48;
let totaliNdryshuar = aktiviteti + projekti + provimi;

console.log(totaliNdryshuar);
