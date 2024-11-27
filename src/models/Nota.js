class Nota {
    constructor(valor, disciplina) {
        this.valor = valor;
        this.disciplina = disciplina;
    }

    calcularNota() {
        return this.valor;
    }
}

module.exports = Nota;
