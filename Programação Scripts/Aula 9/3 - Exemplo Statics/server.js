const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/css", express.static("./node_modules/bootstrap/dist/css"));
app.use("/js", express.static("./node_modules/bootstrap/dist/js"));

app.get("/", (req, res) => {
  let nome = "JR";
  let ling = "Nodejs";
  res.render("index.ejs", {
    nome: nome,
    ling: ling,
    empresa: "FATEC",
  });
});

app.get("/cadastro", (req, res) => {
  res.render("frmCadastro.ejs");
});

app.use(express.urlencoded({ extended: true }));
app.post("/salvarpergunta", (req, res) => {
  const { titulo, descricao } = req.body;

  res.send(
    `"Formulário Recebido!"<br>Obrigado pela pergunta ${titulo}, sendo: ${descricao}`
  );

  console.log(`Obrigado pela pergunta ${titulo}, sendo: ${descricao}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
