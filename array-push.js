lista = []

nome = "joão silva"; idade = 18; cidade = "goiânia"; nota = 10;

function adicionar(){
    lista.push(nome, idade, cidade, nota)
    return console.log(lista[0], lista[1], lista[2], lista[3])
}
// console.log(adicionar())

function adicionar2(){
    users = { nome, idade, cidade, nota }
    lista.push(users, users, users)
    return console.log(lista)
}

adicionar2()