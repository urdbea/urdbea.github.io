/*MATERIAL
ID MATERIAL
NOME
TIPO
DESCRIÇÃO
PREÇO/UNIDADE
 */


let bolaFutebol = {
    id: "1",
    nome: "Bola Futebol",
    tipo: "boolean",
    descricao: "Bola de Futebol - Tamanho 6",
    preco: "0.0"
}

let bolaFutsal = {
    id: "2",
    nome: "Bola Futsal",
    tipo: "boolean",
    descricao: "Bola de Futsal - Tamanho 5",
    preco: "0.0"
}

let bolaBasquetebol = {
    id: "3",
    nome: "Bola Basquetebol",
    tipo: "boolean",
    descricao: "Bola de Basquetebol - Tamanho 5",
    preco: "0.0"
}

let bolaVoleibol = {
    id: "4",
    nome: "Bola Voleibol",
    tipo: "boolean",
    descricao: "Bola de Voleibol - Tamanho 5",
    preco: "0.0"
}

let bolaTenis = {
    id: "5",
    nome: "Bola Tenis",
    tipo: "boolean",
    descricao: "Bola de Tenis - Tamanho 5",
    preco: "0.0"
}

let raquetes = {
    id: "9",
    nome: "Raquetes Tenis",
    tipo: "boolean",
    descricao: "Raquetes Tenis - Marca LIDL",
    preco: "5.0"
}

let coletes = {
    id: "6",
    nome: "Coletes",
    tipo: "int",
    descricao: "Coletes cor de Rosa - Todos os tamanhos",
    preco: "0.20"
}

let cones = {
    id: "7",
    nome: "Cones",
    tipo: "int",
    descricao: "Cones de marcação",
    preco: "0.70"
}

let garrafasAgua = {
    id: "8",
    nome: "Garrafas de Agua",
    tipo: "int",
    descricao: "Garrafas de água para os jogadores se refrescarem",
    preco: "0.50"
}

let toucas = {
    id: "10",
    nome: "Toucas",
    tipo: "int",
    descricao: "Toucas de Natação",
    preco: "1.00"
}

let oculosNatacao = {
    id: "11",
    nome: "Óculos",
    tipo: "int",
    descricao: "Óculos de Natação ",
    preco: "1.00"
}

export function materiais(){
if (!localStorage.getItem("materiais")) {
    let materiais = Array();
    materiais.push(bolaFutebol);
    materiais.push(bolaFutsal);
    materiais.push(bolaBasquetebol);
    materiais.push(bolaVoleibol);
    materiais.push(bolaTenis);
    materiais.push(raquetes);
    materiais.push(coletes);
    materiais.push(cones);
    materiais.push(garrafasAgua);
    materiais.push(toucas);
    materiais.push(oculosNatacao);

    localStorage.setItem("materiais", JSON.stringify(materiais));
}
}