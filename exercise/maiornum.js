function searchmaior(idade){
    let maior = idade[0];
    for (let i = 0; i < idade.length; i++)
        if (idade[i] > maior){
            maior = idade[i]
        }
        return maior
}

console.log(searchmaior([3, 7, 2, 9, 1]));