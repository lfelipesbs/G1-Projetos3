class FormulaDesempate {
    aplicarCriterios(alunos) {
        if (alunos[0].nome < alunos[1].nome) return -1;
        if (alunos[0].nome > alunos[1].nome) return 1;
        return 0;
    }
}

export default FormulaDesempate;
