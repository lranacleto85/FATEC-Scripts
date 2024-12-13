import express from 'express';
import { criarPergunta } from '../controllers/PerguntaControllers.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('frmPergunta.ejs');
});

router.post('/salvar', criarPergunta);

export default router;
