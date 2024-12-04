const carrinho = [
    { nome: 'Caneta',   qtde: 6, preco: 2 },
    { nome: 'Caderno',  qtde: 2, preco: 20},
    { nome: 'Lapiz',    qtde: 3, preco: 2 },
    { nome: 'Borracha', qtde: 2, preco: 2 },
    { nome: 'mochila',  qtde: 2, preco: 200},
]

// apenas nomes
const funcNomes = produto => produto.nome
console.log(carrinho.map(funcNomes))

// calcular total
console.log( '1. exemplo -----------------------------------------------------------')
    const funcTotalItem = item => item.qtde * item.preco
    lista_totais = carrinho.map(funcTotalItem)
    console.log(lista_totais)

console.log( '2. exemplo-----------------------------------------------------------')
    const total = carrinho.map( n => n.qtde * n.preco )
    console.log(total)
    console.log( '-----------------------------------------------------------')


