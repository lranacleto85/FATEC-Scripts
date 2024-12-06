const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let nome = "JR";
  let ling = "Nodejs";
  res.render("index.ejs", {
    nome: nome,
    ling: ling,
    empresa: "FATEC",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
