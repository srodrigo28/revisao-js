const alunos = [
    { nome: '', n1: 5, n2: 6, n3: 7, n4: 8},
    { nome: '', n1: 5, n2: 6, n3: 7, n4: 8},
    { nome: '', n1: 9, n2: 10, n3: 7, n4: 8},
    { nome: '', n1: 5, n2: 6, n3: 7, n4: 8},
    { nome: '', n1: 5, n2: 9, n3: 7, n4: 8},
]

function calcularMedia(aluno){
    return{
        nome: aluno.nome,
        media: (aluno.n1 + aluno.n2 + aluno.n3 + aluno.n4) / 4
    }
}

// console.log(alunos.map(calcularMedia))

var media = alunos.map(calcularMedia)
// media.map(function (el) { console.log(el) })
// media.map(function (el, indice) { console.log(el, indice) })

const nums = [9, 8, 7, 6, 5]

nums.map(function (el, indice){
    console.log(el)
})