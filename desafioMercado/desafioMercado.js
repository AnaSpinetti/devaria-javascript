const readline = require('readline');

//Recebendo os dados passados pelo cliente com o readline
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Lista de produtos disponiveis no mercado criada
const produtosMercado = [
    "feijão",
    "arroz",
    "suco",
    "alface"
];

//Função para validar a nossa lista
const validarLista = (listaMercado) => {
    // verifica se a lista esta vazia, caso sim, retornando erro
    if (!listaMercado) {
        throw Error("A lista não pode ser vazia!");
    }
    
    //itens desejados vão ser os items da nossa listaMercado(argumentos), que vai receber os valores separados por virgula
    const itensDesejados = listaMercado.split(",");
    //itens inválidos serão os itens desejados que separamos acima,filtrados onde cada item sem os espaços não retorna um tamanho (length) 
    const itensInvalidos = itensDesejados.filter(item => !item.trim()).length;
    if (itensInvalidos > 0) {
        throw Error(`Existem ${itensInvalidos} itens inválidos`);
    }
    
    //retornando a nova lista de itens que foram solicitados
    return itensDesejados;
}

//Verificando se os itens desejados estão disponiveis no mercado
const obterDisponibilidade = (listaValida) => {
    const produtosDisponiveis = [];
    const produtosIndisponiveis = [];

    //Para cada item da nossa lista valida (que é o retorno da função validar lista), vamos tirar os espaços e deixar minusculo
    for (const item of listaValida) {
        const itemFormatado = item.trim().toLowerCase();
        //Verificando se nosso item formatado está na lista dos produtos que o mercado tem e realizando o push pro array e itens disponiveis
        if (produtosMercado.includes(itemFormatado)) {
            produtosDisponiveis.push(itemFormatado);
        } else {
            produtosIndisponiveis.push(itemFormatado);
        }
    }
    //Retornando os produtos disponiveis e indisponiveis
    return {
        produtosDisponiveis,
        produtosIndisponiveis
    }
}


//Nosso leitor irá receber a lista de produtos e chamar a função para validar lista e verificar disponibilidade
leitor.question("Digite a lista de produtos separados por virgula:\n", listaProdutos => {
            try {
                const listaValida = validarLista(listaProdutos);
                const disponibilidade = obterDisponibilidade(listaValida);
                
                //Retornando os dados ao usuário
                console.log('Os seguintes produtos estão disponíveis', disponibilidade.produtosDisponiveis);
                console.log('Os seguintes produtos estão indisponíveis', disponibilidade.produtosIndisponiveis);

                //ordenando nossa lista de produtos disponiveis
                const disponiveisOrdenados = disponibilidade.produtosDisponiveis.sort((produto1, produto2) => produto1.localeCompare(produto2));
                
                console.log('Produtos disponíveis ordenados alfabeticamente', disponiveisOrdenados);
            } catch (e) {
                console.log(`Erro ao processar a lista (${e.message})`);
            } finally {
                leitor.close();
            }
        }
    );