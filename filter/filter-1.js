// exercicio separar numeros pares de numeros impas
const par = n => n % 2 === 0
const impar = n => n % 2 !== 0

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log( nums.filter(par))
console.log( nums.filter(impar))

console.log('exercicio semparar notas <= 7')
var notas = [7, 5, 8, 5, 6, 10]
