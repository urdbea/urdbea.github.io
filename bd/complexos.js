/*
id
nome
localizacao
*/


let complexo1 = {
    id:"1",
    nome: "Complexo de Braga",
    localizacao:"Braga, Avenida 25 de Abril"

}


let complexo_lisboa = {
    id:"3",
    nome: "Complexo de Lisboa",
    localizacao:"Lisboa"

}


export function complexos(){
if(!localStorage.getItem("complexos")){
    let complexos = Array();
    complexos.push(complexo1)
    localStorage.setItem("complexos", JSON.stringify(complexos));
}
}