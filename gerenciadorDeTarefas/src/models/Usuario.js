 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 const md5 = require('md5');

 const mensagemErroObrigatorio = "*Campo obrigatório!"

 const UsuarioSchema = new Schema({
     nome: {
         type: String,
         required: [true, mensagemErroObrigatorio]
     },
     email: {
        type: String,
        required: [true, mensagemErroObrigatorio]
    },
    senha: {
        type: String,
        required: [true, mensagemErroObrigatorio
       ]
    }
 });

 // Criptografando a senha antes de salvar no BD
 UsuarioSchema.pre('save', function(next){
     this.senha = md5(this.senha)
     next();
 });

 // Importando o schema para um modelo
 const Usuario = mongoose.model('usuario', UsuarioSchema);
 module.exports = Usuario;