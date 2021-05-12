//Lista de convidados definida
const convidados = ["Ana", "Carol", "Camila", "João"];

//Recebendo em argumentos o nome e idade (argumentos sempre iniciam em posição 2)
const nome = process.argv[2];
const idade = parseInt(process.argv[3]);

//Validando se o nome está na lista com o método includes
if(!convidados.includes(nome)){
    console.log("Seu nome não está na lista de convidados")
    return;
}else if(convidados.includes(nome) && idade < 18){
    console.log("Seu nome está na lista, mas é necesssário ter 18 anos ou mais para entrar.")
    return;
}else{
    console.log("Seja bem vindo!")
    return;
}