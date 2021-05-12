//Importando as classes
const readline = require ('readline');
const Produto = require ('./Produto');

//Criando a interface de leitura e saída de dados
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Criando a lista de produtos disponiveis instanciando o objeto
const produtosDisponiveisMercado = [
    new Produto("Feijão", 5),
    new Produto("Arroz", 10),
    new Produto ("Suco", 3),
    new Produto("Carne", 65.5)
];

//Validando se a lista passada pelo usuário é válida, caso não, retornar erro
const validarLista = (listaSolicitada) => {
    if(!listaSolicitada){
        throw Error("A lista não pode ser vazia");
    }

    //items solicitados vai receber os valores passados no argumento, separados por virgula
    const itemsSolicitados = listaSolicitada.split(",");

    //Aqui filtramos cada item que fica sem nenhum valor de length após terem os seus espaços removidos pela função "trim", para não permitir items em branco
    const itensInvalidos = itemsSolicitados.filter(item => !item.trim().length);
    if(itensInvalidos > 0) {
        throw Error(`Existem ${itensInvalidos} itens inválidos na sua lista`);
    }

    //Retornando como resultado da função os itens que foram solicitados
    return itemsSolicitados
}

//Verificando a disponibilidade dos produtos
const obterDisponibilidade = (listaValida) => {
    const produtosDisponiveis = [];
    const produtosIndisponiveis = [];

    //Verificando cada item que foi passado para o programa, removendo espaços, deixando minusculo e comparando com os produtos disponiveis no mercado
    for (const item of listaValida){
        const itemFormatado = item.trim().toLowerCase();
        const produto = produtosDisponiveisMercado.find(produtoMercado => produtoMercado.nome.toLowerCase() === itemFormatado);

        //Realizando o push nos nossos Arrays de itens disponiveis e indisponveis
        if(produto){
            produtosDisponiveis.push(produto);
        }    
        else{
            produtosIndisponiveis.push(itemFormatado);
        }   
    }
    
    //Retornando os Arrays criados com o push
    return{
        produtosDisponiveis,
        produtosIndisponiveis
    }
}

//Recebendo os dados digitados pelo usuário
leitor.question("Digite a lista de produtos separados por virgula:\n", listaProdutos => {
        try {
            //chamando as funções de validar a lista e obter a disponibilidade dos itens
            const listaValida = validarLista(listaProdutos);
            const disponibilidade = obterDisponibilidade(listaValida);
            
            //Retornando as mensagens ao usuário
            console.log('Os seguintes produtos estão disponíveis', disponibilidade.produtosDisponiveis);
            console.log('Os seguintes produtos estão indisponíveis', disponibilidade.produtosIndisponiveis);

            //Retornando os produtos ordenados
            const disponiveisOrdenados = disponibilidade.produtosDisponiveis.sort((produto1, produto2) => produto1.nome.localeCompare(produto2.nome));
             
            console.log('Produtos disponíveis ordenados alfabeticamente', disponiveisOrdenados);
        } 
        catch (e) {
            console.log(`Erro ao processar a lista (${e.message})`);
        } finally {
            leitor.close();
        }
    }

);