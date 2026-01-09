let cores = ["vermelho", "azul"]

cores.push("verde")
console.log(cores)

cores.unshift("amarelo")
console.log(cores)

cores.pop()
console.log(cores)
console.log(cores.length)

/*function somarArray(x) {
    let total = 0;
    let num = [0];
    while(i < num.length)
}
*/

total = 0
function somar(num) {
    for(let i = 0; i < num.length; i++){
        total += num[i]
    }
    return total;
}
console.log(somar([10, 10, 10, 10]))