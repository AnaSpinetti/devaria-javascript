const readline = require('readline');

//Criando o leitor para receber os dados do usuário
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Criando as variáveis que vão receber a mensagem enviada ao usuário
const primeiraPergunta = 'Digite o primeiro número: \n';
const segundaPergunta = 'Digite o segundo número: \n';
const operadorSolicitado = 'Digite o operador a ser utilizado no calculo: \n';

//Realizando o calculo

try {
    //Enviando as perguntas ao usuário através do leitor que criamos utilizando o readline
    leitor.question(primeiraPergunta, (primeiroNumero) => {
    
    leitor.question(segundaPergunta, (segundoNumero) =>{
        
    
        leitor.question(operadorSolicitado, (operador) =>{

            const resultado = Calcular(primeiroNumero, segundoNumero, operador)

            if(segundoNumero == '0' && operador == '/'){
                console.log("Não é possivel realizar divisões por zero!")
            } else if (isNaN(resultado)){
                console.log("Digite valores válidos para o calculo.")
            }
            else {
                console.log("O resultado da sua operação é: " + resultado);
            }
            //Fechando o leitor após exibir o resultado
            leitor.close();
        });
    });  
    });

    const Calcular = (num1, num2, operacao) => {
    //Convertendo os números digitados no console para a operação poder ser realizada
    const primeiroNumero = parseInt(num1);
    const segundoNumero = parseInt(num2);

    //Seletor de acordo com a operação
    switch(operacao){
        case "+": return primeiroNumero + segundoNumero;
        case "-": return primeiroNumero - segundoNumero;
        case "*": return primeiroNumero * segundoNumero;
        case "/": return primeiroNumero / segundoNumero;
        default: return "Operador inválido, tente novamente"
    }
    };
} catch (e){
    console.log("Erro na aplicação, verifique os valores passados.")
}
