import sequelize from "../config/database.js";

sequelize
  .query("CREATE DATABASE ../teste_app")
  .then(() => {
    console.log("BD criado com sucesso");
  })
  .catch((error) => {
    console.log("Erro ao criar BD:", error);
  });
