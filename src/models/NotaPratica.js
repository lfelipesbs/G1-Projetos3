import Nota from "./Nota";

class NotaPratica extends Nota {
    constructor(valor, disciplina, pesoPratico) {
        super(valor, disciplina);
        this.pesoPratico = pesoPratico;
    }

    calcularNota() {
        return this.valor * this.pesoPratico;
    }
}

export default NotaPratica;
