const gritar = texto => texto.toUpperCase()
const exagerar = texto => texto.split('').join(' ')
const frases = ['cuidado', 'olha o carro', 'conta venceu']

const final = frases.map(gritar).map(exagerar)

console.log(final)