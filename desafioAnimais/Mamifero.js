const Animal = require('./Animal');

class Mamifero extends Animal {
    constructor(nome, quantidadeMamas){
        super(nome);
        this.quantidadeMamas = quantidadeMamas;
    }
}

module.exports = Mamifero;