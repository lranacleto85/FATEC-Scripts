const bodyParser = require("body-parser"); // Importa o middleware body-parser para processar dados do formulário
const express = require("express"); // Importa o módulo Express para criar o servidor
const app = express(); // Cria uma instância do servidor Express

app.set("view engine", "ejs"); // Configura o EJS como motor de visualização para renderizar templates

app.use(express.static("public")); // Configura o servidor para servir arquivos estáticos da pasta "public"
app.use(express.urlencoded({ extended: true })); // Middleware para processar dados do formulário no formato URL-encoded

app.use("/css", express.static("./node_modules/bootstrap/dist/css")); // Servir arquivos CSS do Bootstrap a partir do node_modules
app.use("/js", express.static("./node_modules/bootstrap/dist/js")); // Servir arquivos JS do Bootstrap a partir do node_modules

app.use(bodyParser.urlencoded({ extended: true })); // Middleware do body-parser para processar dados URL-encoded
app.use(bodyParser.json()); // Middleware do body-parser para processar dados JSON

const homeRoutes = require("./routes/home");
const perguntaRoutes = require("./routes/pergunta");
app.use("/", homeRoutes);
app.use("/pergunta", perguntaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
