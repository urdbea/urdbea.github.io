let cliente1 = {
    id:"1",
    nome: "Guilherme Barbosa",
    nomeUtilizador: "Gui002",
    email:"guilhermebarbosa2002@live.com.pt",
    password:"12345678",
    reservas:["1","2"],
    tipo: "Cliente"
}


export function clientes(){
if(!localStorage.getItem("clientes")){
    let clientes = Array();
    clientes.push(cliente1)
    localStorage.setItem("clientes", JSON.stringify(clientes));
}
}
