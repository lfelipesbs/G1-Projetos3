import RankingService from './RankingService';

class HubInformacoes {
    constructor() {
        this.alunos = [];
        this.responsaveis = [];
        this.coordenadores = [];
        this.rankingService = new RankingService();
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }

    adicionarResponsavel(responsavel) {
        this.responsaveis.push(responsavel);
    }

    adicionarCoordenador(coordenador) {
        this.coordenadores.push(coordenador);
    }

    obterAlunoPorMatricula(matricula) {
        return this.alunos.find((aluno) => aluno.matricula === matricula);
    }

    obterResponsavelPorId(idResponsavel) {
        return this.responsaveis.find((resp) => resp.idResponsavel === idResponsavel);
    }

    consultarRanking(turma) {
        return this.rankingService.consultarRanking(turma, this.alunos);
    }

    acessarDesempenhoResponsavel(responsavel) {
        return responsavel.visualizarDesempenhoDependentes();
    }
}

export default HubInformacoes;
