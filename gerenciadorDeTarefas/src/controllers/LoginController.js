const HttpController = require('./HttpController');

class LoginController extends HttpController {
    configurarRotas(baseUrl){
        this.express.post(`${baseUrl}/login`, (req, res) =>{
            this.login(req, res);
        })
    }

    login(req, res){
        // Validando se foi passado um usuário e senha no corpo da solicitação
        const body = req.body;
        if(!body || !body.login || !body.senha){
            return res.status(400).json({
                status: 400, 
                erro: "Parâmetros de entrada inválidos"
            })
        }

        res.json({
           token: 'token gerado pela api' 
        });
    } 

}

module.exports = LoginController;