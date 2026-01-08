// ===== MEU PRIMEIRO PROGRAMA EM JAVASCRIPT =====

console.log("=== COMEÇANDO COM JAVASCRIPT ===\n");

// 1. Variáveis e Tipos de Dados
let nome = "Rafael";
let idade = 21;
const paisOrigem = "Brasil";
let estudante = true;

console.log("1. INFORMAÇÕES PESSOAIS:");
console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`País: ${paisOrigem}`);
if (estudante === true){
    console.log(`É estudante? Sim\n`);
} else {
    console.log(`É estudante? Não\n`);
}

// 2. Operações Matemáticas
let numero1 = 15;
let numero2 = 3;

console.log("2. CALCULADORA:");
console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
console.log(`${numero1} / ${numero2} = ${numero1 / numero2}\n`);

// 3. Estruturas Condicionais
console.log("3. VERIFICAÇÕES:");

if (idade >= 18) {
    console.log("✅ Você é maior de idade");
} else {
    console.log("❌ Você é menor de idade");
}

let nota = 8.5;
if (nota >= 7) {
    console.log(`✅ Aprovado com nota ${nota}`);
} else {
    console.log(`❌ Reprovado com nota ${nota}`);
}

console.log("\n=== FIM DO PROGRAMA ===");
