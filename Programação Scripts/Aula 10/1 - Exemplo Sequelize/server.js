import bodyParser from "body-parser";
import express from "express";
import homeRoutes from "./routes/home.js";
import perguntaRoutes from "./routes/pergunta.js";
import sequelize from "./config/database.js";

const app = express();

app.set("view engine", "ejs"); // Configura o EJS como motor de visualização

app.use(express.static("public")); // Configura o servidor para servir arquivos estáticos da pasta "public"
app.use(express.urlencoded({ extended: true })); // Middleware para processar dados do formulário no formato URL-encoded

app.use("/css", express.static("./node_modules/bootstrap/dist/css")); // Servir arquivos CSS do Bootstrap
app.use("/js", express.static("./node_modules/bootstrap/dist/js")); // Servir arquivos JS do Bootstrap

app.use(bodyParser.urlencoded({ extended: true })); // Middleware do body-parser para processar dados URL-encoded
app.use(bodyParser.json()); // Middleware do body-parser para processar dados JSON

app.use("/", homeRoutes);
app.use("/pergunta", perguntaRoutes);

const PORT = process.env.PORT || 3000;
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados foi estabelecida com sucesso.");
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (err) {
    console.error("Não foi possível conectar ao banco de dados:", err);
  }
};
startServer();
