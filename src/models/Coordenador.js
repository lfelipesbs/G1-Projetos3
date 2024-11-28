class Coordenador {
    constructor(nome, idCoordenador) {
        this.nome = nome;
        this.idCoordenador = idCoordenador;
        this.turmas = [];
    }

    gerenciarTurmas(turma) {
        if (!this.turmas.includes(turma)){
            this.turmas.push(turma);
        }
    }

    // escolherInformacoesDivulgadas() {
    //   // Implementação da lógica para escolher informações divulgadas
    // }

    adicionarNota(aluno, nota) {
        aluno.notas.push(nota);
    }

    removerNota(aluno, nota) {
        aluno.notas = aluno.notas.filter((n) => n !== nota);
    }

    modificarNota(aluno, notaAntiga, notaNova) {
        const index = aluno.notas.indexOf(notaAntiga);
        if (index !== -1) {
            aluno.notas[index] = notaNova;
        }
    }

    // gerarPDFInformacoes(aluno) {
    //   // Implementação da lógica para gerar PDF com informações do aluno
    // }
}

export default Coordenador;
