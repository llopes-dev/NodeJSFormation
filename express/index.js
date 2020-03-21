const express = require("express"); // importando o express

const app = express(); // Iniciando o express com a variavel app


app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um Erro!")
    }else{
        console.log("Servidor Iniciado com Sucesso!")
    }
})

