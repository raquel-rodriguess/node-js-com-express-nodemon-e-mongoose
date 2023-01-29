// configuracão inicial
const express = require ('express')
const res = require('express/lib/response')
//estar importando a biblioteca express nesse codico e atribuindo-a a variavel 'express'
const app  = express()
//variavel chamada app que executa o express como uma funcao

//forma de ler json/ middlewares; recursos que sao executados entre as requisiçoes respostas
app.use(                 // criar middlewares
    express.urlencoded({
        extended: true,   // vai utilizar a biblioteca qs,enquanto "extended: false" usa a querystring
    })
)

app.use(express.json())  // função adiciona um novo middleware ao aplicativo. 
//Essencialmente, sempre que uma solicitação atingir seu back-end, 
//o Express executará as funções que você passou app.use()em ordem.
// agora se e enviar json vou conseguir ler e o express vai conseguir enviar json de volta.

//rota inicial /endpoint
app.get('/',( req, res)=> {
    
    res.json({message: "oi express"})// resposta para "/" irá ser um json: "oi express"; parametro: message

})
// Serve para o express ler a requisicao e que posso enviar uma resposta
// req, res pode ser inseridos numa função anonima

//entregar uma porta
app.listen(3000) // disponebeliza para o navegador ver o express( esculta uma porta)  
