/*ID PROFISSIONAL
NOME
ESPECIALIDADE(MODALIDADE)
RESERVAS[ID RESERVA]
 */


let funcionario1 = {
    id:"1",
    nome: "Guilherme Barbosa",
    nomeUtilizador: "Gui002",
    email:"guilhermebarbosa2002@live.com.pt",
    password:"12345678",
    especialidadeModalidade:"2",
    reservas:["1","2"], //ver com stor
    complexo:"1",
    foto: "images/Funcionario_Rodrigo.jpeg"
}

let funcionario2 = {
    id:"2",
    nome: "Beatriz Morais",
    nomeUtilizador: "urdbea",
    email:"guilhermebarbosa2002@live.com.pt",
    password:"12345678",
    especialidadeModalidade:"2",
    reservas:["1","2"], //ver com stor
    complexo:"1",
    foto: "images/Funcionaria_Bia.jpeg"
}


export function funcionarios(){
if(!localStorage.getItem("funcionarios")){
    let funcionarios = Array();
    funcionarios.push(funcionario1)
    funcionarios.push(funcionario2)
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
}
}