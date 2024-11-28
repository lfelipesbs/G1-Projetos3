import { Router } from 'express';
import { adicionarNota, consultarRanking, acessarDesempenhoResponsavel } from '../controllers/NotaController';

const router = Router();

router.post('/notas', adicionarNota);
router.get('/ranking', consultarRanking);
router.get('/responsavel/:idResponsavel', acessarDesempenhoResponsavel);

export default router;
