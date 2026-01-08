let tarefas = ["Estudar JavaScript", "Fazer Exercicios"]

console.log("=== MINHA LISTA DE TAREFAS ===");
console.log(tarefas);
// Adicionando tarefas
tarefas.push("Ler documentação");
tarefas.push("Criar um projeto");

console.log("\n=== APÓS ADICIONAR TAREFAS ===");
console.log(tarefas);
// Remover a primeira tarefa (concluida)
let concluida = tarefas.shift();
console.log(`\n✅ Tarefa concluída: ${concluida}`);
console.log("Tarefas restantes:", tarefas);

console.log(`\nTotal de tarefas ${tarefas.length}`);