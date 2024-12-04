function Data(dia, mes, ano){
    this.dia = dia
    this.mes = mes
    this.ano = ano
    this.exibir = function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}
const d1 = new Data(1, 1, 2023)
const d2 = new Data(2, 2, 2024)
console.log(d1.exibir(), '\n', d2.exibir())