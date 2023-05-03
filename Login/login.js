/* const iniciarSessao = document.getElementById("myButton")

iniciarSessao.onclick = function () {
    const nameInput = document.getElementById("email");
    const email = nameInput.value;

    const passWord = document.getElementById("password");
    const pass = passWord.value;


    let utilizadores = JSON.parse(localStorage.getItem("clientes"));
    console.log(utilizadores);

    utilizadores.forEach(utilizador => {
        if (utilizador.email === email && utilizador.password === pass) {
            if (utilizador.tipo === "Cliente") {
                window.open("../Campos/listaCampos.html");
            } else {
                window.open("../Minhas Reservas/detalhesReserva.html");
            }
        } else {
            alert("Campos inválidos");
        }
    });
};
*/