function Produto(nome, preco, desconto = 0){
    this.nome = nome,
    // this.preco = preco,
    this.preco = preco,
    this.desconto = desconto,
    this.precoFinal = function() {
        return(` ${this.nome} - R$ ${ this.preco * ( 1 - this.desconto ) }`)
    } 
}

const p1 = new Produto('iPad 128GB', 7500, .1533)
const p2 = new Produto('PS5 2TB', 5500, .1)

// console.log(p1.precoFinal(), p1.precoFormatado())
console.log(p1.precoFinal() )
