const ApiConstants = require('../enums/ApiConstants');

class BaseController{
    // retornando erro caso o express não tenha sido instanciado
	constructor(expressInstance){
		if(!expressInstance){
		throw new Error("A instancia do express é obrigatoria")
		}
		//criando a rota base /api
		this.express = expressInstance
		this.setupRoutes(ApiConstants.BASE_PATH);
	}
	
	setupRoutes(){
		throw new Error("setupRoutes deve ser implementado");
	}
}

module.exports = BaseController;