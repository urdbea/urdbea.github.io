window.onload=carregarCampos();


function carregarCampos() {
  let recintosDiv = document.getElementById("recintos");
  let recintosBD = JSON.parse(localStorage.getItem("recintos"));

  for (let i = 0; i < recintosBD.length; i += 3) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    row.style.justifyContent="center";
    

    for (let j = i; j < i + 3 && j < recintosBD.length; j++) {
      let card = document.createElement("div");
      card.setAttribute("class", "card mb-4");
      card.style.maxWidth= '300px';
      card.style.padding="0%";
      card.style.margin="20px";
      

    // create image element
    var image = document.createElement("img");
    image.setAttribute("src", "../"+ recintosBD[i].image);
    image.setAttribute("src", "../"+ recintosBD[j].image);

    image.setAttribute("class", "card-img-top img-fluid rounded-top-custom")
    image.style.maxHeight= '200px';
    image.style.minHeight="200px";




    var body = document.createElement("div");
    body.setAttribute("class", "card-body");

    // create title element
    var titleElem = document.createElement("h2");
    titleElem.setAttribute("class", "card-title");
    titleElem.textContent = recintosBD[i].preco + "€/hora";
    titleElem.textContent = recintosBD[j].preco + "€/hora";




    // make the stars
    let divStarts = document.createElement("div");
    divStarts.setAttribute("class", "rating");
    let star1 = document.createElement("i");
    let star2 = document.createElement("i");
    let star3 = document.createElement("i");
    let star4 = document.createElement("i");
    let star5 = document.createElement("i");

    switch (recintosBD[i].clasificacao) {
        case '1':
            star1.setAttribute("class", "fa fa-star");
            star2.setAttribute("class", "fa fa-star-o");
            star3.setAttribute("class", "fa fa-star-o");
            star4.setAttribute("class", "fa fa-star-o");
            star5.setAttribute("class", "fa fa-star-o");
            break;
        case '2':
            star1.setAttribute("class", "fa fa-star");
            star2.setAttribute("class", "fa fa-star");
            star3.setAttribute("class", "fa fa-star-o");
            star4.setAttribute("class", "fa fa-star-o");
            star5.setAttribute("class", "fa fa-star-o");
            break;
        case '3':
            star1.setAttribute("class", "fa fa-star");
            star2.setAttribute("class", "fa fa-star");
            star3.setAttribute("class", "fa fa-star");
            star4.setAttribute("class", "fa fa-star-o");
            star5.setAttribute("class", "fa fa-star-o");
            break;
        case '4':
            star1.setAttribute("class", "fa fa-star");
            star2.setAttribute("class", "fa fa-star");
            star3.setAttribute("class", "fa fa-star");
            star4.setAttribute("class", "fa fa-star");
            star5.setAttribute("class", "fa fa-star-o");
            break;
        case '5':
            star1.setAttribute("class", "fa fa-star");
            star2.setAttribute("class", "fa fa-star");
            star3.setAttribute("class", "fa fa-star");
            star4.setAttribute("class", "fa fa-star");
            star5.setAttribute("class", "fa fa-star");
            break;

    }

    divStarts.appendChild(star1);
    divStarts.appendChild(star2);
    divStarts.appendChild(star3);
    divStarts.appendChild(star4);
    divStarts.appendChild(star5);

       


    //create description
    var descricao = document.createElement("h6");
    descricao.textContent = recintosBD[i].descricao;
    descricao.textContent = recintosBD[j].descricao;
    var localizacao = document.createElement("h4");
    localizacao.textContent = recintosBD[i].localizacao;
    localizacao.textContent = recintosBD[j].localizacao;
    var br = document.createElement("br");

    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-success btn-sm");
    button.setAttribute('id', "button" + recintosBD[j].id) //cada botão vai ter o id do campo associado
    button.textContent = "Reservar";

    //quando clicarmos isto vai para uma nova página
    button.addEventListener("click", function() {
      const id = this.id.slice(6); // pega apenas o número do id, removendo "button"
      localStorage.setItem("campoAtivo", id); 
      window.location.href = "../Minhas Reservas/fazerReserva.html"; //abre a pagina na mesma cena
    });
    

    card.appendChild(image);
    body.appendChild(titleElem);
    body.appendChild(divStarts);
    body.appendChild(descricao);
    body.appendChild(localizacao);
    body.appendChild(br);
    body.appendChild(button);
    card.appendChild(body);
  

    row.appendChild(card);
    }

    recintosDiv.appendChild(row);
  }


  let numCards = document.createElement("span");
  numCards.setAttribute("id", "num-cards");
  numCards.textContent = "A mostrar "+recintosBD.length + " resultados.";

  let mensagemDiv = document.createElement("div");
  mensagemDiv.appendChild(document.createElement("p").appendChild(numCards));
  mensagemDiv.appendChild(document.createTextNode(" Experimenta mudar a tua pesquisa e encontra o teu campo."));

  recintosDiv.appendChild(mensagemDiv);
}

function toggleWindow(button) {
  var window = button.nextElementSibling;
  var window_filtro = document.getElementById("window_filtro");
  var window_data = document.getElementById("window_data");

  if (window.style.display === "none") {
    // Verifica se a outra janela está aberta e fecha-a antes de abrir a janela atual
    if (window === window_data && window_filtro.style.display === "block") {
      window_filtro.style.display = "none";
    } else if (window === window_filtro && window_data.style.display === "block") {
      window_data.style.display = "none";
    }

    window.style.display = "block";
    window.style.top = button.offsetTop + button.offsetHeight + "px";
    window.style.left = button.offsetLeft + button.offsetWidth - window.offsetWidth + "px";
  } else {
    window.style.display = "none";
  }
}



function LimparPesquisaFiltro() {

  document.getElementById("campo_pesquisa", "").value = "";
  const checkboxes = document.querySelectorAll('#window_filtro input[type="checkbox"]');
  const checkboxes1 = document.querySelectorAll('#window_data input[type="checkbox"]');
  // Uncheck all the checkboxes
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;

  });
  checkboxes1.forEach((checkbox1) => {
    checkbox1.checked = false;
  });
  const window = document.querySelector('#window_filtro');
  const window1 = document.querySelector('#window_data');
  window.style.display = 'none';
  window1.style.display = 'none';

  document.getElementById("data", "").value = "";
  document.getElementById("textoHoraInicio", "").value = "";
  document.getElementById("textoHoraFim", "").value = "";
  document.getElementById("disponibilidade", "").innerHTML = "";



}

function LimparFiltro() {
  // Get all the checkboxes in the window
  const checkboxes = document.querySelectorAll('#window_filtro input[type="checkbox"]');
  const checkboxes1 = document.querySelectorAll('#window_data input[type="checkbox"]');
  // Uncheck all the checkboxes
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  checkboxes1.forEach((checkbox1) => {
    checkbox1.checked = false;
  });


  document.getElementById("data", "").value = "";
  document.getElementById("textoHoraInicio", "").value = "";
  document.getElementById("textoHoraFim", "").value = "";
  document.getElementById("disponibilidade", "").innerHTML = "";


}



function AplicarFiltro() {
  // Hide the window
  //let window = document.querySelector('#window_filtro');
  //window.style.display = 'none';
  let window1 = document.querySelector('#window_data');
  window1.style.display = 'none';

    // Verifica se a checkbox "sintetico" está selecionada
  
      let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
      let recintos = document.querySelectorAll('.card');
    
      recintos.forEach(recinto => {
        let match = false;
    
        checkboxes.forEach(checkbox => {
          if (recinto.dataset.categoria === checkbox.value) {
            match = true;
          }
        });
    
        if (match) {
          recinto.classList.remove('hidden');
        } else {
          recinto.classList.add('hidden');
        }
      });
    }

    




function compararHoras() {
  var horaInicio = document.getElementById("textoHoraInicio").value;
  var horaFim = document.getElementById("textoHoraFim").value;

  if (horaInicio && horaFim) {
    var dataInicio = new Date("2023-01-01 " + horaInicio + ":00");
    var dataFim = new Date("2023-01-01 " + horaFim + ":00");

    if (dataFim <= dataInicio) {
      alert("A hora de início deve ser anterior à hora de fim.");
      document.getElementById("textoHoraFim").value = "";
      return true;
    }
  }

  return false;
}

function camposDisponibilidade() {
  var data = document.getElementById("data");
  var textoHoraInicio = document.getElementById("textoHoraInicio");
  var textoHoraFim = document.getElementById("textoHoraFim");
  var disponibilidade = document.getElementById("disponibilidade");
  var horaFim = document.getElementById("horaFim");

  // Chama a função compararHoras
  var horaFimRemovida = compararHoras();

  disponibilidade.innerHTML = "<span>" + data.value + "</span><br><br>" +
    " <span>" + textoHoraInicio.value + "  >  " + textoHoraFim.value + "</span>";

  // Se a hora de fim foi removida, apaga o valor do campo correspondente
  if (horaFimRemovida) {
    horaFim.value = "";
  }
}

  
