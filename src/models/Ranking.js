class Ranking {
    constructor(listaAlunos, criterioDesempate) {
        this.listaAlunos = listaAlunos;
        this.criterioDesempate = criterioDesempate;
    }

    calcularRanking() {
        this.listaAlunos.sort((a, b) => {
            const mediaA = a.calcularMedia();
            const mediaB = b.calcularMedia();
            
            if (mediaB !== mediaA) {
                return mediaB - mediaA;
            } else {
                return this.criterioDesempate.aplicarCriterios([a, b]);
            }
        });
    }

    atualizarRanking() {
        this.calcularRanking();
    }
}

module.exports = Ranking;
