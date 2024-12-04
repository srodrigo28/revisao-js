const nomes = ['Amanda', 'Bia', 'Carolina ']
console.log( "1. Inicial: " + nomes )

const caixaAlta = nomes.map(n => n.toUpperCase())
console.log( "2. Caixa alta: " + caixaAlta )

const caixaBaixa = nomes.map(n => n.toLocaleLowerCase())
console.log( "3. Caixa baixa: " + caixaBaixa )

// ESPECIAL
const numeros = nomes.map(n => n.length) 
console.log("4. Contando caracteres: " + numeros) // conta caracteres
// const caixaAlta2 = console.log(nomes.map(n => n.toUpperCase()))
// const caixaBaixa2 = console.log(nomes.map(n => n.toLocaleLowerCase()))