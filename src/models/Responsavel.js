class Responsavel {
    constructor(nome, idResponsavel) {
        this.nome = nome;
        this.idResponsavel = idResponsavel;
        this.dependentes = [];
    }

    visualizarDesempenhoDependentes() {
        return this.dependentes.map((dependente) => ({
            aluno: dependente.nome,
            media: dependente.calcularMedia(),
            notas: dependente.visualizarNotas(),
        }));
    }

    acessarHubInformacoes(hubInformacoes) {
        return hubInformacoes.acessarDesempenhoResponsavel(this);
    }

    adicionarDependente(aluno) {
        if (!this.dependentes.includes(aluno)) {
            this.dependentes.push(aluno)
        }
    }
}

export default Responsavel;
