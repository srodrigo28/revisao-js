const carrinho = [
    { nome: 'Caneta',   qtde: 0, preco: 2 },
    { nome: 'Caderno',  qtde: 2, preco: 20},
    { nome: 'Lapiz',    qtde: 0, preco: 2 },
    { nome: 'Borracha', qtde: 2, preco: 10 },
    { nome: 'mochila',  qtde: 2, preco: 200},
]

const qtdeMaiorQ   = produto => produto.qtde > 0
const qtdeMaiorQ10 = produto => produto.preco > 10
const apenasNome = produto => produto.nome

const carrinhoFilter1 = carrinho.filter(qtdeMaiorQ)
const carrinhoFilter2 = carrinho.filter(qtdeMaiorQ10)
const listaNomes = carrinho
    .filter(qtdeMaiorQ10)
    .map(apenasNome)

console.log(listaNomes)