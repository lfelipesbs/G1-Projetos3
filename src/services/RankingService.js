const Ranking = require('../models/Ranking');
const FormulaDesempate = require('../models/FormulaDesempate');

class RankingService {
    constructor() {
        this.formulaDesempate = new FormulaDesempate();
        this.rankings = {}; 
    }

    calcularRanking(alunos) {
        const ranking = new Ranking(alunos, this.formulaDesempate);
        ranking.calcularRanking();
        return ranking.listaAlunos;
    }

    consultarRanking(turma, alunos) {
        if (!this.rankings[turma]) {
            const alunosDaTurma = alunos.filter((aluno) => aluno.turma === turma);
            this.rankings[turma] = this.calcularRanking(alunosDaTurma);
        }
        return this.rankings[turma];
    }
}

module.exports = RankingService;
