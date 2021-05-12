const Animal = require('./Animal');

class Ave extends Animal {
    constructor(nome, temPena){
        super(nome);
        this.temPena = temPena || false;
    }
}

module.exports = Ave;