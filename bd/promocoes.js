/*CÓDIGO PROMOÇÃO
ID CÓDIGO PROMOÇÃO 
CODIGO
VALOR DO DESCONTO
 */


let promocao1 = {
    id:"1",
    codigo: "RICFAZERES",
    valorDesconto: "10",
}


export function promocoes(){
if(!localStorage.getItem("promocoes")){
    let promocoes = Array();
    promocoes.push(promocao1)
    localStorage.setItem("promocoes", JSON.stringify(promocoes));
    console.log("ola");
}
}

