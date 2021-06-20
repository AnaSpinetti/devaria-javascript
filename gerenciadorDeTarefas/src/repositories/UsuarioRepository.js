// Faz a definição do repositório de usuários,os métodos que vão precisar ser implementados ao utilizar a classe
module.exports = (Implementacao) => {

    if(!Implementacao.cadastrar){
        throw new Error ("O método cadastrar precisa ser implementado")
    }
    return Implementacao;
}