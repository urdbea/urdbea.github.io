window.onload = function iniciar() {
  let reservaAtiva = localStorage.getItem("reservaAtiva");
  let reservas = JSON.parse(localStorage.getItem('reservas'));
  let recintos = JSON.parse(localStorage.getItem("recintos"));
  let reserva = reservas.find(reserva => reserva.id == reservaAtiva);

  recintos.forEach(recinto => {
    if (reserva.recinto === recinto.id)
      carregarInformacoesRecinto(recinto);
  });

  carregarInformacoesEstadoReserva(reserva);

}


function carregarInformacoesRecinto(recinto) {
  let numEstrelas;
  switch (recinto.clasificacao) {
    case '1':
      numEstrelas = `<div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                </div>`
      break;
    case '2':
      numEstrelas = `<div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                </div>`
      break;
    case '3':
      numEstrelas = `<div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                </div>`
      break;
    case '4':
      numEstrelas = `<div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
                </div>`
      break;
    case '5':
      numEstrelas = `<div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                </div>`
      break;

  }
  localizacao = document.getElementById("localizacaoRecinto");
  localizacao.textContent = recinto.localizacao;

  recintoNome = document.getElementById("nomeRecinto");
  recintoNome.textContent = recinto.descricao;

  estrelas = document.getElementById("estrelasRecinto");
  estrelasRecinto.innerHTML = numEstrelas;

  let direcoesMaps = document.createElement("direcoesMaps");
  direcoesMaps.textContent = recinto.endereço;


}


function carregarInformacoesEstadoReserva(reserva) {
  dataReservaNoEstado = document.getElementById("dataReservaNoEstado");
  dataReservaNoEstado.textContent = reserva.dia;
}





/* */
function toggleAccordion(event) {
  var accordionHeader = event.currentTarget;
  var accordionContent = accordionHeader.nextElementSibling;
  accordionHeader.classList.toggle("open");
  accordionContent.classList.toggle("show");
}







/* --------------------------------------------------------------------------- abrir o acordiao cancelar reserva */

let acc = document.getElementsByClassName("accordion-header");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


/* --------------------------------------------------------------------------- abrir o acordiao cancelar reserva ends here*/








/* -------------------------------------------------------------------------------------- opcoes pagamento aparecem detalhes qnd clicas num metodo de pagamento*/


var radios = document.getElementsByName('options');
var result = document.getElementById('result');

for (var i = 0; i < radios.length; i++) {
  radios[i].addEventListener('change', function () {
    if (this.value === 'option1') {
      result.innerHTML = 'Entidade: 303092';
    } else if (this.value === 'option2') {
      result.innerHTML = 'O montante será devolvido para o seu número de telemóvel.';
    }
  });
}

/* -------------------------------------------------------------------------------------- opcoes pagamento end here*/


function applyDiscount() {
  var codeInput = document.getElementById("discount-code-input").value;
  var correctCode = "RICFAZERES";
  var infoMessage = document.getElementById("discount-info-message");

  if (codeInput == correctCode) {
    // Apply discount code
    infoMessage.innerHTML = "Código válido :)";
  } else {
    // Show error message
    infoMessage.innerHTML = "Código inválido :(";
  }
}






/* */

function openMap() {
  // Retrieve the address from local storage
  var address = localStorage.getItem("mapAddress");

  // Open Google Maps with the specified address
  window.location.href = "https://www.google.com/maps?q=" + encodeURIComponent(address);
}



/* */















// Get the modal and image elements
var modal = document.getElementById("modaal");
var img = document.getElementById("example-img");

// Get the close button and add a click event listener
var close = document.getElementsByClassName("close")[0];
close.addEventListener("click", function () {
  modal.style.display = "none";
});

// Add a click event listener to the image
img.addEventListener("click", function () {
  modal.style.display = "block";
});























































