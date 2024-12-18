import Ranking from '../models/Ranking.js';
import FormulaDesempate from '../models/FormulaDesempate.js';

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

export default RankingService;
