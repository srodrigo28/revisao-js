const promessa = new Promise(resolve => {
    resolve(['ana', 'bia', 'carlos', 'daniel'])
})

promessa.then(array => console.log(array))