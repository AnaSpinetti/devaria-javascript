const FormaPagamento = require ('./FormaPagamento');

class Pix extends FormaPagamento{
    efetuarPagamento(valor){
        console.log("pagamento efetuado com pix de R$" + valor)
    }
}

module.exports = Pix;