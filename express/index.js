const express = require("express"); // importando o express

const app = express(); // Iniciando o express com a variavel app

// Criando Rotas
app.get("/" , function(req , res){

    res.send("Bem Vindo ao Servidor")

});

// paramentro não obrigatório coloca a ? na URL
app.get("/blog/:artigo?" , function(req , res){

    var artigo = req.params.artigo;

    if(artigo){
        res.send("<h2> Artigo: " + artigo + " </h2>");
    }else{
        res.send("Bem Vindo ao Blog")
    }
    
    
});

// Usando Query Paramets
app.get("/canal/youtube" , function(req, res){
    var canal = req.query["canal"];

    if(canal){
        res.send(canal);
    }else{
        res.send("Nenhum canal informado")
    }
    res.send("Bem Vindo ao meu Canald do Youtube")
})

// rota com parametro
app.get("/ola/:nome/:empresa" , function(req, res){
    // req => dados enviados pelo usuário
    // res =>  resposta que vai ser enviada para o usuario
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1> Oi " + nome + " da " + empresa + "</h1>");
})

// Servidor sempre o ultimo a criar
app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um Erro!")
    }else{
        console.log("Servidor Iniciado com Sucesso e agora com Nodemon!")
    }
})

