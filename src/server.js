/**
 * 
 * Arquivo: server.js
 * Author: Glaucia Lemos
 * Description: Arquivo principal e responsável por executar a API.
 * Data: 14/05/2018
 * 
 */

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 8000;

const post = require('./api/routes/post');
const config = require('config'); // aqui estaremos carregando a localização da base de dados através dos arquivos JSON.

//Opção das base de dados:
const options = {
    server: {
        socketOptions: {
            keepAlive: 1,
            connectTimeoutMS: 30000
        }
    },
    replset: {
        socketOptions: {
            keepAlive: 1,
            connectTimeoutMS: 30000
        }
    }
};

//Conexão com a base de dados:
mongoose.connect(config.DBHost, options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro ao conectar com a Base de Dados....: '));

//Essa parte do código estaremos mostrando os logs quando acontecer os testes:
if (config.util.getEnv('NODE_ENV') !== 'Test') {

    //Aqui estamos usando 'morgan'. Ele é responsável por realizar as requisições de logger no middleware para Node.Js
    app.use(morgan('combined'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/json'
}));

app.get("/", (req, res) => res.json({
    message: "Sejam Bem-Vindos a API: Lambda3!"
}));

//Definição das rotas para: GET (Selecionar Todos)
app.route("/posts")
    .get(post.getAllPosts)

//Definição das rotas para: POST:   
app.route("/post")
    .post(post.addPost);

//Definição das rotas para: GET, DELETE & PUT (todos por Id)
app.route("/post/:id")
    .get(post.postById)
    .delete(post.deletePost)
    .put(post.updatePost);

app.listen(port);
console.log("Aplicação executando na porta " + port);

module.exports = app;
