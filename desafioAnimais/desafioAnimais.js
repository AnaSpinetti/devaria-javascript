//Importando as classes
const Ave = require('./Ave')
const Mamifero = require('./Mamifero')
const Peixe = require('./Peixe')
const Reptil = require('./Reptil')

//Capturando do argumento o animal digitado
const animalNome = process.argv[2];

//Verificando se o argumento está vazio com o operador de negação
if(!animalNome){
    console.log("Favor digitar o nome do animal");
    return;
}

//Criando a lista de animais usando as classes importadas
const listaDeAnimais = [
    new Mamifero("vaca", 4),
    new Reptil("cobra"),
    new Peixe("tubarão", 2),
    new Ave("gavião", true)
];

//Adicionando na constante o animalSelecionado que estiver contido na nossa lista de animais
const animalSelecionado = listaDeAnimais.find(animal => animal.nome.toLowerCase() === animalNome.toLowerCase());

//se não achou animal selecionado na lista, retornar mensagem ao usuário
if(!animalSelecionado){
    console.log("O animal não está em nossa lista");
    return;
}

//identificando o grupo  que o animal pertente, validando se ele é uma instancia de uma das classes
if(animalSelecionado instanceof Mamifero){
    console.log(`O animal selecionado é um mamífero com nome ${animalSelecionado.nome} e tem ${animalSelecionado.quantidadeMamas} mamas`);
}
else if(animalSelecionado instanceof Reptil){
    console.log(`O animal selecionado é um reptil com nome ${animalSelecionado.nome} e o controle de temperatura corporal é ${animalSelecionado.controlaTemperatura}`);
}
else if(animalSelecionado instanceof Ave){
    console.log(`O animal selecionado é uma ave com nome ${animalSelecionado.nome}. Ele possui penas? ${animalSelecionado.temPena}`);
}
else if(animalSelecionado instanceof Peixe){
    console.log(`O animal selecionado é um peixe com nome ${animalSelecionado.nome} e tem ${animalSelecionado.quantidadeNadadeiras} nadadeiras`);
}