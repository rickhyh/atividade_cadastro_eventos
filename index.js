//Sistema de Cadastro de Eventos
console.log ("Sistema iniciado.\n");
console.log("Sistema recebe a data do evento. \n");

//Declarações de variáveis
let DataEventoConverter;
let PartesData;
let DataEvento;
let DataAtual = new Date();
let IdadeParticipante;
let ListaParticipantes = ["Pedro", "Joana", "Gustavo"];
let ListaPalestrantes = ["João", "Maria", "Cleberson"];

let AnoAtual;
let NascimentoParticipante;
let QuantidadeParticipantes = 0;

//Verificação 01 - data evento > data atual = permitir evento; se não, alertar que o cadastro não será permitido por data inválida.
DataEventoConverter = "20/10/2021"
PartesData = DataEventoConverter.split("/");
DataEvento = new Date(PartesData[2], PartesData[1] - 1, PartesData[0]);

if (DataEvento > DataAtual) {
    console.log("Sistema recebe sua data de nascimento.\n");
    
} else {
    console.log("Permissão negada, data inválida.\n");
}

//Verificação 02 - participante > 18 anos, permitir o cadastro; se não, alertar que o cadastro não é permitido pela idade.
AnoAtual = 2021;
NascimentoParticipante = 1990;
IdadeParticipante = AnoAtual - NascimentoParticipante;

if (IdadeParticipante >= 18) {
    //Listar participantes e palestrantes por evento
    ListaParticipantes.push("Usuário");
    console.log("Sistema gera lista de participantes e palestrantes.\n");

    console.log("Palestrantes: " + ListaPalestrantes +"\n");

    console.log("Participantes: " + ListaParticipantes +"\n");
} else {
    console.log("Permissão negada, idade inválida.\n");
}

//Enquanto qtd participantes < 100, permitir cadastro; se não, alertar que o cadastro não será permitido por ter excedido o limite.
if (ListaParticipantes.length <= 100) {
    console.log("Cadastro realizado com sucesso!\n");
} else {
    console.log("Desculpe! Quantidade máxima de participantes atingida!\n");
}

console.log("FIM DO PROGRAMA");