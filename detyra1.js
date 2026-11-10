const cmimiLibrit = 12.5;
const sasiaLibrit = 3;

const cmimiFletores = 1.8;
const sasiaFletores = 4;

let totaliLibrit = cmimiLibrit * sasiaLibrit;
let totaliFletores = cmimiFletores * sasiaFletores;

let totali = totaliLibrit + totaliFletores;

totali += 2.5;

console.log("Fatura");
console.log("Totali Librit" + totaliLibrit);
console.log("Totali Fletores" + totaliFletores);
console.log("Transporti 2.50");
console.log("Totali" + totali);
