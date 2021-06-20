const e = require('express');
const mongoose = require ('mongoose');

class MongoDBConnectionHelper {
    static conectar(){
        const conexao = mongoose.connect(process.env.MONGO_DB_CONEXAO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // Verificando se a conexão foi com sucesso
        mongoose.connection.on('connected', () => console.log("Conectado ao mongoDb"));

        // Se der erro exibe a mensagem abaixo
        mongoose.connection.on('error',  e => console.error("Erro ao conectar ao mongoDB", e.message));

        return conexao;
    }
}

module.exports = MongoDBConnectionHelper;