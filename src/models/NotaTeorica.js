import Nota from "./Nota.js";

class NotaTeorica extends Nota {
    constructor(valor, disciplina, pesoTeorico) {
        super(valor, disciplina);
        this.pesoTeorico = pesoTeorico;
    }

    calcularNota() {
        return this.valor * this.pesoTeorico;
    }
}

export default NotaTeorica;
