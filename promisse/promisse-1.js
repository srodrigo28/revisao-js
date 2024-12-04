const promeessa = new Promise( function (resolve) {
    resolve('dentro da função')
})

promeessa.then( valor => console.log(valor) )

console.log('fim')