function verify(nome, idade){
    if(idade >= 18){
        console.log(`${nome}, você possui ${idade} anos. Você é maior de idade!`)
    } else{
        console.log(`${nome}, você possui ${idade} anos. Você é menor de idade`)
    }
}
verify("Rafael", 99)