const express = require("express");
const app = express();

app.listen(4000, function(erro){
    if (erro){
        console.log("Erro!");
    }else{
        console.log("Servidor ON!");
    }
})