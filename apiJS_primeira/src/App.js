//Instanciando as dependencias do projeto
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger/swagger.json')
const ApiConstants = require('./enums/ApiConstants');
const UserController = require('./controller/UserController');

//Classe App que vai inicializar o servidor, controlers e a instancia do Express
class App {
	start(){
		this.setupExpress();
		this.loadControllers();
		this.startServer();
	}
	
	setupExpress(){
		this.express = express();
		
		// configura o swagger na api
		this.express.use(`${ApiConstants.BASE_PATH}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerFile));
		
		// definindo middlweare para imprimir cada requisição nova (rotas que serão acessadas)
		this.express.use((req, res, next) => {
			console.log(req.method, req.url)
			next();
		})
	}
        // instanciando os controllers
		loadControllers(){
		this.controllers = [
			new UserController(this.express)
		];
	}
	
	// startando o servidor na porta 9000
	startServer(){
		const port = 9000;
		this.express.listen(port, () => {
			console.log("Api sendo executada na porta", port)
		})
	}
}

module.exports = App;