const FormaPagamento = require ('./FormaPagamento');

class Boleto extends FormaPagamento{
    efetuarPagamento(valor){
        console.log("pagamento efetuado com boleto de R$" + valor)
    }
}

module.exports = Boleto;