/**
 * 
 * Arquivo: api/models/post.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável pelo modelo: 'Post' para realizar a conexão com a base
 *  de dados via Moongose.
 * Data: 14/05/2018
 * 
 */

/**
 * Infos inerentes a classe: 
 * ==== Post ====
 * id: number
 * title: string
 * name: string
 * email: string
 * body: string
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Esquema do 'Post':
const PostSchema = new Schema({
    title: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    body: { type: String, required: true },
}, {
    versionKey: false
});

//Exportando o Schema do 'Post' para ser usada:
module.exports = mongoose.model('post', PostSchema);
