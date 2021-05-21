const ApiConstants = require('../enums/ApiConstants');
const BaseController = require('./BaseController');

class UserController extends BaseController {
	setupRoutes(basePath){
		this.express.get(`${basePath}/usuario`, (req, res) => {
			this.get(req, res);
		})
	}
	
	get (req, res){
		return res.json({
			nome: 'Ana',
			id: 1
		})
	}
}

module.exports = UserController;