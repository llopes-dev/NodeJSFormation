const express = require("express"); // importando o express

const app = express(); // Iniciando o express com a variavel app

// Criando Rotas
app.get("/" , function(req , res){

    res.send("Bem Vindo ao Servidor")

});

app.get("/blog" , function(req , res){
    res.send("Bem Vindo ao Blog")
});

app.get("/canal/youtube" , function(req, res){
    res.send("Bem Vindo ao meu Canald do Youtube")
})

// Servidor sempre o ultimo a criar
app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um Erro!")
    }else{
        console.log("Servidor Iniciado com Sucesso!")
    }
})

