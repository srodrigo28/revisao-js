const primeiroElemento = array => array[1]

const promessa = new Promise(resolve => {
    resolve(['ana', 'bia', 'carol', 'amanda'])
})

promessa
    .then(array => primeiroElemento(array))
    .then(elemento => console.log(elemento))