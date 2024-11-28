import HubInformacoes from '../services/HubInformacoes';
import Aluno from '../models/Aluno';
import Nota from '../models/Nota';
import NotaTeorica from '../models/NotaTeorica';
import NotaPratica from '../models/NotaPratica';
import Responsavel from '../models/Responsavel';
import Coordenador from '../models/Coordenador';

const hubInformacoes = new HubInformacoes();

// Dados para teste
const aluno1 = new Aluno('João', '2021001', 'Turma A');
const aluno2 = new Aluno('Maria', '2021002', 'Turma A');
const aluno3 = new Aluno('Pedro', '2021003', 'Turma B');

hubInformacoes.adicionarAluno(aluno1);
hubInformacoes.adicionarAluno(aluno2);
hubInformacoes.adicionarAluno(aluno3);

const responsavel1 = new Responsavel('Carlos', 'R001');
responsavel1.adicionarDependente(aluno1);
responsavel1.adicionarDependente(aluno2);

hubInformacoes.adicionarResponsavel(responsavel1);

const coordenador = new Coordenador('Ana', 'C001');
coordenador.gerenciarTurmas('Turma A');
coordenador.gerenciarTurmas('Turma B');

hubInformacoes.adicionarCoordenador(coordenador);

const adicionarNota = (req, res) => {
    const { matriculaAluno, valor, disciplina, tipoNota, peso } = req.body;

    const aluno = hubInformacoes.obterAlunoPorMatricula(matriculaAluno);
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

    coordenador.adicionarNota(aluno, nota);

    res.status(200).json({ mensagem: 'Nota adicionada com sucesso' });
};

const consultarRanking = (req, res) => {
    const { turma } = req.query;
    if (!turma) {
        return res.status(400).json({ message: 'Turma não especificada '});
    }
    const ranking = hubInformacoes.consultarRanking(turma);
    res.status(200).json(ranking);
};

const acessarDesempenhoResponsavel = (req, res) => {
    const { idResponsavel } = req.params;
    const responsavel = hubInformacoes.obterResponsavelPorId(idResponsavel);
    if (!responsavel) {
        return res.status(404).json({ message: 'Responsável não encontrado' });
    }
    const desempenho = hubInformacoes.acessarDesempenhoResponsavel(responsavel);
    res.status(200).json(desempenho);
};

export default {
    adicionarNota,
    consultarRanking,
    acessarDesempenhoResponsavel
};
