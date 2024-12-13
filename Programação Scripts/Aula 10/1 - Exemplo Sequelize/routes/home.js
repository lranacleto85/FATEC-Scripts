import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  let nome = 'JR';
  let ling = 'Nodejs';
  res.render('index.ejs', {
    nome: nome,
    ling: ling,
    empresa: 'FATEC',
  });
});

export default router;
