function esperarPor(tempo = 2000){
    return new Promise(resolve => {
        setTimeout(function () {
            resolve()
        }, tempo)
    })
}
async function executar() {
    await esperarPor(2000)
    console.log('Depois de 2s...')

    await esperarPor(2000)
    console.log('Depois de 4s...')

    await esperarPor(2000)
    console.log('Depois de 5s...')
}

executar()