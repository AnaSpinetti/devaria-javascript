//Importando as classes utilizadas
const Boleto = require('./Boleto');
const Pix = require('./Pix');
const TipoPagamento = require('./TipoPagamento');

//Capturando os dados digitados nos argumentos e adicionando às constantes
const formaDePagamento = process.argv[2];
const valor = process.argv[3];

//Validando se algum argumento foi passado
if(!formaDePagamento){
    console.log("Nenhuma forma de pagamento informada.")
    return;
}
if(!valor){
    console.log("Valor não informado");
    return;
}

//Criando a variavel onde vamos instanciar a classe Forma de pagamento
let objetoFormaPagamento;

//Adicionando às variaveis o tipo de pagamento que foi passado no argumento comparado ao Tipo de pagamento da nossa classe
const isBoleto = formaDePagamento.toLowerCase() === TipoPagamento.BOLETO.toLowerCase();
const isPix = formaDePagamento.toLocaleLowerCase() === TipoPagamento.PIX.toLowerCase();

//Instanciando as classes
if(isBoleto){
    objetoFormaPagamento = new Boleto;
}
else if(isPix){
    objetoFormaPagamento = new Pix;
}
else {
    console.log("Forma de pagamento não aceita")
    return;
}

//Efetuando o pagamento com o método efetuarPagamento da nossa classe pai, que tivemos acesso após instanciar as classes
objetoFormaPagamento.efetuarPagamento(valor);