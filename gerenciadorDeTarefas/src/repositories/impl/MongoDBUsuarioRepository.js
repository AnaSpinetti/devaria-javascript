const UsuarioRepository = require('../UsuarioRepository'); 
const Usuario = require('../../models/Usuario'); 


class MongoDBUsuarioRepository {
    static cadastrar(dadosUsuario){
        // Salvando no banco de dados
        return Usuario.create(dadosUsuario);
    }
}

module.exports = UsuarioRepository(MongoDBUsuarioRepository);