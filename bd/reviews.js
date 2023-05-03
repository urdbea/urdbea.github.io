/*
REVIEW 
ID REVIEW
ID CLIENTE
NÚMERO ESTRELAS ESPAÇO
NÚMERO ESTRELAS BALNEÁRIOS
ESTADO_MATERIAL
RECOMENDARIA_BOOL
COMENTÁRIOS
*/


let review1 = {
    id:"1",
    cliente: "1",
    estrelasEspaco:"5",
    estrelasBalnearios:"4",
    estadoMaterial:"??????",
    recomendaria:"????????????",
    comentario:"Gostei muito, quero voltar a repetir"


}

export function reviews(){
if(!localStorage.getItem("reviews")){
    let reviews = Array();
    reviews.push(review1)
    localStorage.setItem("reviews", JSON.stringify(reviews));
}
}