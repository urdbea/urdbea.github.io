/*CODIGO PARA ACEDER A API */
let meteorologia = new Map();
let cities = "https://api.ipma.pt/open-data/distrits-islands.json";
let weather = "http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/"
window.onload = montarPagina();

//carregar os dados da localStorage
function montarPagina() {



    //vamos buscar o campo que foi selecionado previamente
    let campoId = localStorage.getItem("campoAtivo")

    let dataProcurar = document.getElementById("data");
    let recintos = JSON.parse(localStorage.getItem('recintos')); // vamos à localStorage buscar os recintos
    let recinto = recintos.find(recinto => recinto.id == campoId); //vamos à localStorage buscar o Recinto com o id que foi passado

    let nomeCampo = document.getElementById("nomeCampo");
    nomeCampo.textContent = recinto.descricao;

    let localizacao = document.getElementById("localizacao");
    localizacao.textContent = (recinto.localizacao).toUpperCase();

    let localizacaoRua = document.getElementById("localizacaoRua");
    localizacaoRua.textContent = (recinto.rua).toUpperCase();




    //vamos buscar o dia de hoje
    let hoje = diaHoje();
    dataProcurar.value = hoje;

    carregarInformacaoes(recinto);
    carregarModalidade(recinto);
    carregarHorarios(recinto, hoje) //para carregar os horarios disponiveis, temos de ter acesso ao dia e ao recinto
    getId(recinto.localizacao)



    //sempre que o utilizador mudar a data


    dataProcurar.addEventListener("change", function () {
        let dataSelecionada = dataProcurar.value; // obtém o valor selecionado no input
        carregarHorarios(recinto, dataSelecionada);
        camposDisponibilidade();
    });



}
function carregarInformacaoes(recinto) {
    let comodidadesHTML = gerarComodidadesHTML(recinto.comodidades);
    document.getElementById('divComodidades').innerHTML = comodidadesHTML;

    let estrelas = getEstrelas(recinto.clasificacao);
    document.getElementById('estrelas').innerHTML = estrelas;

    document.getElementById('divSobre').innerHTML = recinto.sobre.replace(/\n/g, "<br>");;


    //escrever as modadalidades
    function gerarComodidadesHTML(comodidades) {
        let html = " ";
        for (let i = 0; i < comodidades.length; i += 3) {
            html += '<tr>';
            for (let j = i; j < i + 3 && j < comodidades.length; j++) {

                let icon = getIcon(comodidades[j]);
                html += '<td>' + icon + ' ' + comodidades[j] + '</td>';

            }
            html += '</tr>';
        }
        return html;
    }


    // ir buscar o icon da modalidade
    function getIcon(palavra) {
        switch (palavra) {
            case "Balnearios":
                return '<i class="fa-solid fa-bath"></i>';
            case "Chuveiros":
                return '<i class="fa-solid fa-shower"></i>';
            case "Parque estacionamento":
                return '<i class="fa-solid fa-square-parking"></i>';
            // Adicione mais casos aqui para outras palavras-chave
            case "Acessos mobilidade reduzida":
                return '<i class="fa-solid fa-wheelchair"></i>';
            case "Wifi":
                return '<i class="fa-solid fa-wifi"></i>';
            case "Gravação":
                return '<i class="fa-solid fa-video"></i>';
            default:
                return '<i class="fa-solid fa-xmark"></i>'; // Ícone de ponto de interrogação para palavras desconhecidas
        }

    }

    //estrelas do campo
    function getEstrelas(estrelas) {
        switch (estrelas) {
            case '1':
                return `<div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                </div>`
            case '2':
                return `<div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                </div>`

            case '3':
                return `<div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                </div>`

            case '4':
                return `<div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
                </div>`

            case '5':
                return `<div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                </div>`
            default:
                return `<div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                </div>`


        }
    }

}



//carregarModalidade()
function carregarModalidade(recinto) {
    const selectElement = document.getElementById("esporte");  //vamos buscar a checkbox ao html, para metermos as cenas dinamicas
    let modalidadesStorage = JSON.parse(localStorage.getItem('modalidades')); // vamos buscar as modalidades
    let modalidadesRecintos = recinto.modalidade; // vamos buscar o array com as modalidades dos recintos

    modalidadesRecintos.forEach(modalidadeR => {
        modalidadesStorage.forEach(modalidade => {
            if (modalidadeR === modalidade.id) {
                let option = document.createElement("option");
                option.value = modalidade.nome;
                option.text = modalidade.nome;
                selectElement.add(option);
            }

        })

    });

    carregarMaterial(selectElement.value)

    selectElement.addEventListener('change', function () {
        const selectedOption = this.value;
        carregarMaterial(selectedOption)
    });


}

function horariosDisponiveis(horarios, horariosReservados) {
    let horariosDisponiveis = [];
    for (let i = 0; i < horarios.length; i++) {
        if (!horariosReservados.includes(horarios[i])) {
            horariosDisponiveis.push(horarios[i]);
        }
    }
    return horariosDisponiveis;
}

function carregarHorarios(recinto, dia) {
    let horariosArray = recinto.horarios;

    let horariosFuncionamento = recinto.horariosFuncionamento; //vamos buscar os horarios de funcionamento do recinto
    let horariosReservados;
    try {
        horariosReservados = horariosArray.find(horarios => horarios.dia === dia).horariosReservados; //vamos buscar o elemento do array que tem o dia igual ao dia selecionado e depois vamos buscar os horarios reservados para esse dia
    } catch (excecao) {
        // Bloco de código que lida com a exceção
        horariosReservados = [];
    }



    let horariosLivre = horariosDisponiveis(horariosFuncionamento, horariosReservados); //vamos ficar com os horarios livres

    let horariosHTML = horariosLivre
        .map((hora, index) => `
      <div class="horario" data-hora="${hora}">
        <a id="inicio">${hora}h00 - ${hora + 1}h00</a>
        <a>${recinto.preco}.00€</a>
      </div>
    `)
        .join('');

    document.getElementById('horariosDisponiveis').innerHTML = horariosHTML;


    const horarios = document.querySelectorAll('.horario');
    horarios.forEach(horario => {

        horario.addEventListener('mouseenter', () => {
            horario.style.cursor = 'pointer';
        });
        horario.addEventListener('mouseleave', () => {
            horario.style.cursor = 'default';
        });

        horario.addEventListener('click', () => {
            const hora = horario.dataset.hora;
            let horaSeguinte = parseInt(hora) + 1;

            const computedStyle = window.getComputedStyle(horario);
            const currentColor = computedStyle.getPropertyValue('border-color');

            let valor = parseInt(recinto.preco)
            if (currentColor === '#939292' || currentColor === 'rgb(147, 146, 146)') {
                horario.style.borderColor = '#34A853';
                horario.style.borderWidth = '3px';
                horario.style.backgroundColor = "#00f078"

                primeiraHora(hora, horaSeguinte);
                atualizarHoraSelecionar(hora, horaSeguinte);
                acrescentarPreco(valor);


            } else {
                horario.style.borderColor = '#939292';
                horario.style.borderWidth = '2px';
                horario.style.backgroundColor = "transparent";

                descontarPreco(valor);
                atualizarHoraDeselecionar(hora, horaSeguinte);
            }

        });
    });
}



//carregarMateriais
function carregarMaterial(modalidadeEscolhida) {
    // Recupera os dados dos materiais do LocalStorage
    let materiais = JSON.parse(localStorage.getItem('materiais'))
    let modalidades = JSON.parse(localStorage.getItem('modalidades'))

    let materiaisModalidadeID;
    let materiaisExibir = new Array();
    modalidades.forEach(element => {
        if (element.nome == modalidadeEscolhida) {
            materiaisModalidadeID = element.material; //vamos buscar o array com os materiais daquela modalidade
        }

    });

    materiais.forEach(material => {   //temos os ids, vamos buscar os nomes e os preços
        materiaisModalidadeID.forEach(materialModalidade => {
            if (material.id == materialModalidade) {
                materiaisExibir.push(material) // adicionamos o objeto todo
            }
        });

    });

    /* */
    // Gera o HTML dos materiais com base nos dados recuperados
    let materiaisHTML = materiaisExibir.map((material, index) => 
`
    <div class="inner-box-2">
    <div class="material" id="material-${index}">
      <div class="material-info">
        <h5>${material.nome}</h5>
        ${material.preco == 0 ? '<p>GRATUITO</p>' : `<p class="preco">${material.preco} €</p>`}
      </div>
      <div class="material-selection">
        ${material.tipo == 'boolean'
            ? `<div class="form-check">
                <input type="checkbox" class="form-check-input checkbox-gratis" value="${material.nome}">
                <label class="form-check-label">Selecionar</label>
             </div>`
            : `<div class="btn-group" role="group">
          <button class="btn btn-decrement rounded-circle" data-index="${index}">&#8722;</button>
          <span class="current-number">0</span>
          <button class="btn btn-increment rounded-circle" data-index="${index}">&#43;</button>
             </div>`
        }
      </div>
    </div>
  </div>

    `).join('')

    // Insere o HTML dos materiais na página
    document.getElementById('Material').innerHTML = materiaisHTML

    // Adiciona o evento de clique em cada botão de incremento e decremento
    let incrementButtons = document.querySelectorAll('.btn-increment')
    let decrementButtons = document.querySelectorAll('.btn-decrement')
    let checkboxGratis = document.querySelectorAll('.checkbox-gratis').length;
    let precos = document.querySelectorAll('.preco')
    incrementButtons.forEach((button) => {
        button.addEventListener('click', () => {
            let index = button.dataset.index
            let currentNumber = document.querySelector(`#material-${index} .current-number`)
            currentNumber.innerHTML = parseInt(currentNumber.innerHTML) + 1
            acrescentarPreco(parseFloat(precos.item(index - checkboxGratis).innerHTML));
        })
    })
    decrementButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const index = button.dataset.index
            const currentNumber = document.querySelector(`#material-${index} .current-number`)
            const currentValue = parseFloat(currentNumber.innerHTML)
            if (currentValue > 0) {
                currentNumber.innerHTML = currentValue - 1

                descontarPreco(parseFloat(precos.item(index - checkboxGratis).innerHTML));
            }

        })
    })
}

function diaHoje() {
    let currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    var day = ('0' + currentDate.getDate()).slice(-2);
    var formattedDate = year + '-' + month + '-' + day;
    return formattedDate;
}


//funcão para meter o o tempo dinamico conforme a data escolhida
function getId(cidade) {
    //vamos dar fect por todas as cities, e encontrar o identificador da cidade que estamos a procurar
    fetch(cities)
        .then((response) => response.json())
        .then((data) => {

            data.data.forEach(element => {
                if (element.local.toLowerCase() == cidade.toLowerCase()) {
                    getTempo(element.globalIdLocal);
                    return;
                } else {

                }
            })

        });

}

//obtendo o identificador, podemos ir buscar o tempo para os próximos 5 dias

function getTempo(id) {
    var weather2 = weather + id + ".json"
    var api = "https://api.ipma.pt/open-data/weather-type-classe.json"
    let currentDate = new Date();
    fetch(weather2)
        .then(response => {
            return response.json();
        })
        .then((data) => {

            data.data.forEach(element => {
                //neste codigo vamos buscar as datas dos proximos 5 dias
                var year = currentDate.getFullYear();
                var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
                var day = ('0' + currentDate.getDate()).slice(-2);
                var formattedDate = year + '-' + month + '-' + day;
                meteorologia.set(formattedDate, element.idWeatherType);
                currentDate.setDate(currentDate.getDate() + 1);

            })
        });


    fetch(api)
        .then((response) => response.json())
        .then((data) => {
            for (let [key, value] of meteorologia) {
                data.data.forEach(element => {
                    //metemos tudo num array
                    if (element.idWeatherType == value) {
                        meteorologia.set(key, element.descWeatherTypePT);

                    }
                });

            }
            camposDisponibilidade();
        });

}


//conforme a data escolhida, vamos procurar no array e exibir o tempo!
function camposDisponibilidade() {
    let localizacao = document.getElementById("localizacaoIPMA");
    let data = document.getElementById("data").value;
    let tempo = document.getElementById("tempoIPMA");
    let dia = document.getElementById("diaIPMA");

    meteorologia.forEach((value, key) => {
        if (data === key) {
            tempo.innerHTML = value;
            dia.innerHTML = key;
            iconTempo(value);
        }
    });


}

//para alteramos o icon!
function iconTempo(tempo) {
    let icon = document.getElementById("icon-tempo");

    switch (tempo) {
        case "Chuva/aguaceiros":
            icon.setAttribute("class", "fa-sharp fa-solid fa-cloud-rain fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Céu parcialmente nublado":
            icon.setAttribute("class", "fa-solid fa-sun-cloud");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Céu limpo":

            break;
        case "Céu pouco nublado":
            icon.setAttribute("class", "fa-solid fa-sun-cloud");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Céu parcialmente nublado":
            icon.setAttribute("class", "fa-solid fa-sun-cloud");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Céu muito nublado ou encoberto":
            icon.setAttribute("class", "fa-solid fa-cloud-sun");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Céu nublado por nuvens altas":
            icon.setAttribute("class", "fa-solid fa-cloud");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;

        case "Aguaceiros/chuva":
            icon.setAttribute("class", "fa-sharp fa-solid fa-cloud-rain fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")

            break;
        case "Aguaceiros/chuva fracos":
            icon.setAttribute("class", "fa-sharp fa-solid fa-cloud-rain fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")

            break;
        case "Aguaceiros/rain fortes":
            icon.setAttribute("class", "fa-sharp fa-solid fa-cloud-showers-heavy fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Chuva/aguaceiros":
            icon.setAttribute("class", "fa-sharp fa-solid fa-cloud-showers-heavy fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Chuva fraca ou chuvisco":
            icon.setAttribute("class", "fa-sharp fa-solid fa-cloud-rain fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Períodos de chuva":
            icon.setAttribute("class", "fa-sharp fa-solid fa-cloud-cloud-rain fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Períodos de chuva fraca":
            icon.setAttribute("class", "fa-sharp fa-solid fa-cloud-rain fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Períodos de chuva forte":
            icon.setAttribute("class", "fa-sharp fa-solid fa-cloud-showers-heavy fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Chuvisco":
            icon.setAttribute("class", "fa-sharp fa-solid fa-cloud-rain fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Neblina":
            icon.setAttribute("class", "fa-sharp fa-solid fa-cloud-fog fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Neve":
            icon.setAttribute("class", "fa-sharp fa-solid fa-snow-flakes fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Trovoada":
            icon.setAttribute("class", "fa-sharp fa-solid fa-cloud-bolt fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Aguaceiros e possibilidade de trovoada":
            icon.setAttribute("class", "fa-sharp fa-solid fa-cloud-bolt fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Granizo":
            icon.setAttribute("class", "fa-sharp fa-solid fa-cloud-hail fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Geada":
            icon.setAttribute("class", "fa-sharp fa-solid fa-face-icicles fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Chuva e possibilidade de trovoada":
            icon.setAttribute("class", "fa-sharp fa-solid fa-cloud-bolt fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Nebulosidade convectiva":
            icon.setAttribute("class", "fa-sharp fa-solid fa-cloud fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Céu com períodos de muito nublado":
            icon.setAttribute("class", "fa-sharp fa-solid fa-cloud fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Nevoeiro":
            icon.setAttribute("class", "fa-sharp fa-solid fa-cloud-fog fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Céu nublado":
            icon.setAttribute("class", "fa-sharp fa-solid fa-cloud fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Aguaceiros de neve":
            icon.setAttribute("class", "fa-sharp fa-solid fa-snow-flakes fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;
        case "Chuva e Neve":
            icon.setAttribute("class", "fa-sharp fa-solid fa-snow-flakes fa-shake");
            icon.setAttribute("style", "font-size: 50px; color: grey; padding-top: 20%; padding-right: 10%;")
            break;

        default:
            console.log("Invalid day");
    }
}




/* js do metodo pagamento */

/* js do metodo pagamento ends aqui*/

/*mais imagens dos campos*/
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

/*termina aqui as mais imagens dos campos */


//codigo para o mudar as horas etc


const horarios = document.querySelectorAll('.horario');
const preco = document.getElementById('preco');
const hora = document.getElementById('hora');
let count = 0.0;
let horaInicio = 0;
let horaFim = 0;
let contadorHorario = 0;
horarios.forEach(horario => {

    horario.addEventListener('click', () => {



    });
});

//para a primeira seleção de uma hora
function primeiraHora(inicio, fim) {
    if (contadorHorario == 0) {
        horaInicio = inicio;
        horaFim = fim;
        contadorHorario++;
    }
}

//caso selecione mais de que uma hora
function atualizarHoraSelecionar(inicio, fim) {
    if (inicio <= horaInicio) {
        horaInicio = inicio;
    }
    if (fim >= horaFim) {
        horaFim = fim;
    }
    hora.innerHTML = horaInicio + "h00 - " + horaFim + "h00";
}

//caso des-selecione uma hora
function atualizarHoraDeselecionar(inicio, fim) {

    if (fim == horaFim) {
        horaFim = inicio;
    }
    if (inicio == horaInicio) {
        horaInicio = fim;
    }
    hora.innerHTML = horaInicio + "h00 - " + horaFim + "h00";
}

function atualizarPreco(valor) {
    preco.innerHTML = 'desde ' + valor.toFixed(2) + ' €';
}

let valorAtual = 0;;
//aumentar o preço final
function acrescentarPreco(valor) {

    valorAtual = valorAtual + valor;
    preco.innerHTML = 'desde ' + valorAtual.toFixed(2) + ' €';
}
//diminuir preço final
function descontarPreco(valor) {
    valorAtual = valorAtual - valor;
    preco.innerHTML = 'desde ' + valorAtual.toFixed(2) + ' €';
}

//para aumentar e diminuir o valor
const decrementBtn = document.querySelector('.btn-decrement');
const incrementBtn = document.querySelector('.btn-increment');
const currentNumberSpan = document.querySelector('.current-number');

let currentNumber = 0;

decrementBtn.addEventListener('click', () => {
    if (currentNumber > 0) {
        currentNumber--;
        currentNumberSpan.innerText = currentNumber;
    }
});

incrementBtn.addEventListener('click', () => {
    if (currentNumber < 10) {
        currentNumber++;
        currentNumberSpan.innerText = currentNumber;
    }
});


//quando clicar no botão das direções
const button = document.getElementById("direcoesMaps");

button.addEventListener("click", function () {
    let campoId = localStorage.getItem("campoAtivo")
    let recintos = JSON.parse(localStorage.getItem('recintos')); // vamos à localStorage buscar os recintos
    let recinto = recintos.find(recinto => recinto.id == campoId); //vamos à localStorage buscar o Recinto com o id que foi passado
    openMap(recinto.localizacao + " - " + recinto.rua)
});

//abrir o mapa
function openMap(address) {
    // Open Google Maps with the specified address
    window.open("https://www.google.com/maps?q=" + encodeURIComponent(address));
}

//quando clicar no botão de copiar direções

const copiarDirecoes = document.getElementById("copiarDirecoes");
copiarDirecoes.addEventListener("click", function () {
    let campoId = localStorage.getItem("campoAtivo");
    let recintos = JSON.parse(localStorage.getItem("recintos"));
    let recinto = recintos.find(recinto => recinto.id == campoId);
    let endereco = recinto.localizacao + " - " + recinto.rua;
    navigator.clipboard.writeText(endereco).then(function () {
        alert("Endereço copiado para a área de transferência!");
    }, function () {
        alert("Não foi possível copiar o endereço.");
    });
});


//span Reviews 
const verTodasSpan = document.getElementById("reviews-vertodas");
verTodasSpan.addEventListener("click", function () {
    modal.style.display = "flex";
});

// Selecione o modal e o botão de fechar
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeReview");

// Adicione um event listener para fechar o modal quando o botão de fechar for clicado
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

// Adicione um event listener para fechar o modal quando o usuário clicar fora dele
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
