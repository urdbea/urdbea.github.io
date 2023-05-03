/*RESERVA
ID RESERVA
ID CLIENTE
ID CAMPO
ID MODALIDADE
ID FUNCIONÁRIO RESPONSÁVEL
ID CODIGO PROMOÇÃO
DIA
HORA
HASMAP(ID MATERIAL, QUANTIDADE)
NºPESSOAS
PREÇO
METODO_PAGAMENTO
ESTADO (PENDENTE, APROVADO, CANCELADO, REALIZADO).
FOTO
REVIEW
 */

let reserva1 ={
    id:"1",
    cliente1: "1",
    recinto:"1",
    modalidade:"1",
    funcionario:"1",
    promocao:"",
    dia:"2023-02-01",
    horaInicio:"22",
    horaFim:"24",
    /*
    materiais:[
        material = {
            idMaterial:"1",
            quantidade:4,
        },
        material ={
            idMaterial:"2",
            quantidade:4,
        },
        material ={
            idMaterial:"3",
            quantidade:2,
        }

    ],*/
    numeroPessoas:15,
    preco: 30,
    metodoPagamento:"Presencial",
    estado:"Pendente",
    foto:"./images/blablabla",
    review:"1",
    requisicaoMaterial: "Sim"
}

let reserva2 ={
    id:"2",
    cliente1: "1",
    recinto:"1",
    modalidade:"2",
    funcionario:"2",
    promocao:"",
    dia:"2023-06-29",
    horaInicio:"22",
    horaFim:"24",
    /*
    materiais:[
        material = {
            idMaterial:"1",
            quantidade:4,
        },
        material ={
            idMaterial:"2",
            quantidade:4,
        },
        material ={
            idMaterial:"3",
            quantidade:2,
        }

    ],*/
    numeroPessoas:15,
    preco: 30,
    metodoPagamento:"Presencial",
    estado:"Efetuado",
    foto:"./images/blablabla",
    review:"1",
    requisicaoMaterial: "Sim"
}
let reserva3 ={
    id:"3",
    cliente1: "1",
    recinto:"2",
    modalidade:"3",
    funcionario:"2",
    promocao:"",
    dia:"2023-04-27",
    horaInicio:"22",
    horaFim:"24",
    /*
    materiais:[
        material = {
            idMaterial:"1",
            quantidade:4,
        },
        material ={
            idMaterial:"2",
            quantidade:4,
        },
        material ={
            idMaterial:"3",
            quantidade:2,
        }

    ],*/
    numeroPessoas:15,
    preco: 30,
    metodoPagamento:"Presencial",
    estado:"Cancelado",
    foto:"./images/blablabla",
    review:"1",
    requisicaoMaterial: "Não"
}

let reserva4 ={
    id:"4",
    cliente1: "1",
    recinto:"3",
    modalidade:"4",
    funcionario:"1",
    promocao:"",
    dia:"2023-04-27",
    horaInicio:"22",
    horaFim:"24",
    /*
    materiais:[
        material = {
            idMaterial:"1",
            quantidade:4,
        },
        material ={
            idMaterial:"2",
            quantidade:4,
        },
        material ={
            idMaterial:"3",
            quantidade:2,
        }

    ],*/
    numeroPessoas:15,
    preco: 30,
    metodoPagamento:"Presencial",
    estado:"Aprovado",
    foto:"./images/blablabla",
    review:"1",
    requisicaoMaterial: "Não"
}


export function reservas(){
    if(!localStorage.getItem("reservas")){
        let reservas = Array();
        reservas.push(reserva1)
        reservas.push(reserva2)
        reservas.push(reserva3)
        reservas.push(reserva4)
        localStorage.setItem("reservas", JSON.stringify(reservas));
    }
    }
    