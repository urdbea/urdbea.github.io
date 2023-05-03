let futebol5 = {
    id: "1",
    nome: "Futebol 5",
    descricao: "Desporto de equipa jogado entre duas equipas, com o objetivo de marcar golos ao colocar a bola dentro da baliza adversária",
    material: ["2", "6", "7", "8"]
}
let futebol7 = {
    id: "2",
    nome: "Futebol 7",
    descricao: "Desporto de equipa jogado entre duas equipas, com o objetivo de marcar golos ao colocar a bola dentro da baliza adversária",
    material: ["1", "6", "7", "8"]
}
let futebol11 = {
    id: "3",
    nome: "Futebol 11",
    descricao: "Desporto de equipa jogado entre duas equipas, com o objetivo de marcar golos ao colocar a bola dentro da baliza adversária",
    material: ["1", "6", "7", "8"]
}

let voleibol = {
    id: "4",
    nome: "Voleibol",
    descricao: "Desporto jogado entre duas equipas, com o objetivo de fazer a bola tocar no chão do campo adversário",
    material: ["4", "6", "7", "8"]
}

let basquetebol = {
    id: "5",
    nome: "Basquetebol",
    descricao: "Desporto de equipa jogado por duas equipas de cinco jogadores, com o objetivo de marcar pontos ao atirar uma bola para o cesto",
    material: ["3", "6", "7", "8"]
}

let tenis = {
    id: "6",
    nome: "Tenis",
    descricao: "Desporto individual/equipa, com o objetivo de fazer a bola tocar no chão no campo adversário",
    material: ["5", "6", "7", "8", "9"]
}

let natacao = {
    id: "7",
    nome: "Natacao",
    descricao: "Desporto individual praticado na água, em que os nadadores percorrem várias distâncias, no menor tempo possível.",
    material: ["8", "10", "11"]
}

export function modalidades(){
if (!localStorage.getItem("modalidades")) {
    let modalidades = Array();
    modalidades.push(futebol5);
    modalidades.push(futebol7);
    modalidades.push(futebol11);
    modalidades.push(voleibol);
    modalidades.push(basquetebol);
    modalidades.push(tenis);
    modalidades.push(natacao);


    localStorage.setItem("modalidades", JSON.stringify(modalidades));
}
}