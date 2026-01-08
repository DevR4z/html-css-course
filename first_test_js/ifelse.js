let idade = 18
if (idade >= 18) {
    console.log("Você é maior de idade");
}

// if, else e else if
let hora = 1
if (hora <= 12){
    console.log("Bom dia!")
}   else if (hora < 18) {
        console.log("Boa tarde!")
}       else {
    console.log("Boa noite!")
}

// o verdadeiro anula os outros
let temp = 35
if (temp > 30){
    console.log("Está muito quente!!!")
} else if (temp > 20){
    console.log("Temperatura agradavel")
} else{
    console.log("Está frio!!")
}
