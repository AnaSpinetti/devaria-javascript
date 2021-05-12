const Animal = require('./Animal');

class Reptil extends Animal {
    constructor(nome, controlaTemperatura){
        super(nome);
        this.controlaTemperatura = controlaTemperatura || false; //Se não for passada a temperatura ela assume o valor de false
    }
}

module.exports = Reptil;