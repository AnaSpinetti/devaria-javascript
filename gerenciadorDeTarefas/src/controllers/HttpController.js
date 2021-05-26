const { BASE_API_URL } = require('../enum/AppConstants');
const AppConstants = require('../enum/AppConstants')

class HttpController {
    constructor(express){
        if(!express) {
            throw new Error ("É necessário instanciar o express.");
        }

        this.express = express;
        this.configurarRotas(AppConstants.BASE_API_URL);
    }

    configurarRotas(baseUrl){
        throw new Error ("o método configurar rotas precisa ser implementado");
    }
}

module.exports = HttpController;