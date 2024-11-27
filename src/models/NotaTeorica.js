const Nota = require('./Nota');

class NotaTeorica extends Nota {
    constructor(valor, disciplina, pesoTeorico) {
        super(valor, disciplina);
        this.pesoTeorico = pesoTeorico;
    }

    calcularNota() {
        return this.valor * this.pesoTeorico;
    }
}

module.exports = NotaTeorica;
