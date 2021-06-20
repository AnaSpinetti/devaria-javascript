const HttpController = require("./HttpController");
const UsuarioService = require("../services/UsuarioService");

class UsuarioController extends HttpController {
    configurarRotas(baseUrl) {
        // define a rota de cadastro de usuário
        this.express.post(`${baseUrl}/usuario`, this.cadastrar.bind(this));
    }

    async cadastrar(req, res) {
        const dadosUsuario = req.body;

        try{
            const servico = new UsuarioService();
            const retornoServico = await servico.cadastrar(dadosUsuario);

            if (retornoServico.erros) {
                return res
                    .status(400)
                    .json({
                        status: 400,
                        erro: retornoServico.erros.join(', ')
                    })
            }

            req.logger.info('usuário cadastrado com sucesso');
            res.json({msg: "Usuario criado com sucesso"});
        }
        catch(error){
            req.logger.error("Erro ao cadastrar usuário, erro = " + error.message);
            res.status(500).json({
                erro: "Ocorreu um problema ao cadastrar o usuário, tente novamente mais tarde",
                status: 500 
            })
        }
    }
}

module.exports = UsuarioController;