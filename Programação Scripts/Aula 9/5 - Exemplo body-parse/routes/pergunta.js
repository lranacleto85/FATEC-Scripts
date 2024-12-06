const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("frmCadastro.ejs");
});

router.post("/salvar", (req, res) => {
  const { titulo, descricao } = req.body;

  responseMessage = `Obrigado pela mensagem.\n\nTitulo: ${titulo}\nDescrição: ${descricao}`;
  res.json({ message: responseMessage });
});

module.exports = router;
