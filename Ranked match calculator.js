// Ranked match calculator, a logic programming training challenge.

// Saldo de Rankeadas é feito através do calculo (vitórias - derrotas).

let jogador = "MtLessa";
let vitorias = 99;
let derrotas = 12;

function rankedCalculator(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel = "";

if (saldo === 10) {
    nivel = "Ferro";
} 
else if (saldo <= 11 || saldo <= 20) {
    nivel = "Bronze";
} 
else if (saldo <= 21 || saldo <= 50) {
    nivel = "Prata";
} 
else if (saldo <= 51 || saldo <= 80) {
    nivel = "Ouro";
} 
else if (saldo <= 81 || saldo <= 90) {
    nivel = "Diamante";
} 
else if (saldo <= 91 || saldo <= 100) {
    nivel = "Lendario";
} 
else if (saldo <= 101) {
    nivel = "Imortal";
}

console.log(`O jogador ${jogador}, tem de saldo de: ${saldo} vitórias, e está no nível: ${nivel}!`);
    return saldo;
}

let resultado = rankedCalculator(vitorias, derrotas);