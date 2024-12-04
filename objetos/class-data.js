class Data{
    constructor(dia, mes, ano){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
    exibir(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}
const d1 = new Data(8, 2, 2022)
const d2 = new Data(31, 10, 2022)
console.log(d1.exibir())