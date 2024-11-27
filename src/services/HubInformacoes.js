const RankingService = require('./RankingService');

class HubInformacoes {
    constructor() {
        this.alunos = [];
        this.responsaveis = [];
        this.rankingService = new RankingService();
    }

    adicionarNota(aluno, nota) {
        aluno.notas.push(nota);
    
        this.rankingService.calcularRanking(this.alunos.filter((a) => a.turma === aluno.turma));
    }

    consultarRanking(turma) {
        return this.rankingService.consultarRanking(turma, this.alunos);
    }

    acessarDesempenhoResponsavel(responsavel) {
        return responsavel.visualizarDesempenhoDependentes();
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }

    adicionarResponsavel(responsavel) {
        this.responsaveis.push(responsavel);
    }
}

module.exports = HubInformacoes;
