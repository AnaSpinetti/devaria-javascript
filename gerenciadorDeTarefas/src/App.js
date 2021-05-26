const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger/swagger.json');
const LoginController = require('./controllers/LoginController');
const { BASE_API_URL } = require('./enum/AppConstants');
const AppConstants = require('./enum/AppConstants');

class App {
    #controllers;
    
    start(){

        // Configurar o express
        this.#configurarExpress();
        // Carregar os controllers
        this.#carregarControllers();
        // Iniciar o servidor
        this.#iniciarServidor();
    }

    // Método privado que contém a configuração do express
    #configurarExpress = () => {
        // Cria a instancia do express para gerenciar o servidor
        this.express = express();

        // Registra os middlewares para fazer a conversão das requisições da API
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use(express.json());

        // Configura o swagger da aplicação
        this.express.use(`${AppConstants.BASE_API_URL}/docs`,
        swaggerUi.serve,
        swaggerUi.setup(swaggerFile)
        );

        this.express.use((req, res, next) => {
            console.log("Requisição recebida, url=" + req.url, + "método http = "+ req.method);
            next();
        });
    }

    #carregarControllers = () => {
        // Atribui para a propriedade controllers a lista de controllers disponiveis na aplicação
        this.#controllers = [
            new LoginController(this.express)
        ];
    }

    #iniciarServidor = () => {
        const port = process.env.EXPRESS_PORT || 3001;
        this.express.listen(port, () =>{
            console.log("aplicação sendo executada na porta: " + port);
        });
    }
        
}

module.exports = App;