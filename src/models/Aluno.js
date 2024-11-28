class Aluno {
    constructor(nome, matricula, turma) {
        this.nome = nome;
        this.matricula = matricula;
        this.turma = turma;
        this.notas = [];
    }

    calcularMedia() {
        if (this.notas.length === 0) return 0;
        const soma = this.notas.reduce((acc, nota) => acc + nota.calcularNota(), 0);
        return soma / this.notas.length;
    }

    visualizarNotas() {
        return this.notas.map((nota) => ({
            disciplina: nota.disciplina,
            valor: nota.calcularNota()
        }));
    }

    visualizarRanking(rankingService) {
        return rankingService.consultarRanking(this.turma);
    }
}

export default Aluno;