const HubInformacoes = require('../services/HubInformacoes');
const Aluno = require('../models/Aluno');
const Nota = require('../models/Nota');
const NotaTeorica = require('../models/NotaTeorica');
const NotaPratica = require('../models/NotaPratica');

const hubInformacoes = new HubInformacoes();

const adicionarNota = (req, res) => {
    const { matriculaAluno, valor, disciplina, tipoNota, peso } = req.body;

    const aluno = hubInformacoes.alunos.find((a) => a.matricula === matriculaAluno);
    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }

    let nota;
    if (tipoNota === 'teorica') {
        nota = new NotaTeorica(valor, disciplina, peso);
    } else if (tipoNota === 'pratica') {
        nota = new NotaPratica(valor, disciplina, peso);
    } else {
        nota = new Nota(valor, disciplina);
    }

    hubInformacoes.adicionarNota(aluno, nota);
    res.status(200).json({ mensagem: 'Nota adicionada com sucesso' });
};

const consultarRanking = (req, res) => {
    const { turma } = req.query;
    const ranking = hubInformacoes.consultarRanking(turma);
    res.status(200).json(ranking);
};

module.exports = {
    adicionarNota,
    consultarRanking,
};
