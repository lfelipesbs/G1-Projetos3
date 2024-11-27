class FormulaDesempate {
    aplicarCriterios(alunos) {
        // Implementação do critério de desempate
        return alunos[0].nome.localeCompare(alunos[1].nome);
    }
}

module.exports = FormulaDesempate;
