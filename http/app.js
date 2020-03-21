var http = require("http");

http.createServer(function(requisicao , resposta){

    resposta.end("Bem Vindo ao meu Servidor!")

}).listen(8181);
console.log("meu servidor está rodando")