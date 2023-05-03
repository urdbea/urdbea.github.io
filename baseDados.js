
const nameForm = document.querySelector("#name-form");
const welcomeContainer = document.querySelector("#welcome");
const logoutBtn = document.querySelector("#logout");

function init(){
    
    let campo1 = {
        id: "1",
        complexo: "2",
        modalidade: ["1", "2"],
        image: "images/campo_paginaPrincipal.png",
        pisoCampo: "Sintético",
        tipoCampo: "Indoor",
        comodidades: ["Balnearios",],
        descricao: "Campo Futebol 7",
        endereço: "", //cordenadas para o google maps
        horarioFuncionamento: "",
        regras: [""],
        politicaCancelamento: "",  //acho que vai ser igual para todos, para ja fica assim
        reviews: ["1", "3"],
        reservas: ["", ""],
        numeroMaximoPessoas: "10",
        preco: "29",      //€/hora
        clasificacao: "4", //estrelas
        localizacao: "Benfica, Lisboa"
    }
    
    let campo2 = {
        id: "2",
        complexo: "2",
        modalidade: ["1", "2"],
        image: "images/campo-real.jpg",
        pisoCampo: "Sintético",
        tipoCampo: "Indoor",
        comodidades: ["Balnearios",],
        descricao: "Campo Futebol 11",
        endereço: "", //cordenadas para o google maps
        horarioFuncionamento: "",
        regras: [""],
        politicaCancelamento: "",  //acho que vai ser igual para todos, para ja fica assim
        reviews: ["1", "3"],
        reservas: ["", ""],
        numeroMaximoPessoas: "30",
        preco: "15",      //€/hora
        clasificacao: "3", //estrelas
        localizacao: "Amares, Braga"
    }
    
    
    let campo3 = {
        id: "3",
        complexo: "3",
        modalidade: [],
        image: "images/campo_paginaPrincipal.png",
        pisoCampo: "Sintético",
        tipoCampo: "Indoor",
        comodidades: ["Balnearios",],
        descricao: "Campo Futebol 5",
        endereço: "", //cordenadas para o google maps
        horarioFuncionamento: "",
        regras: [""],
        politicaCancelamento: "",  //acho que vai ser igual para todos, para ja fica assim
        reviews: ["1", "3"],
        reservas: ["", ""],
        numeroMaximoPessoas: "12",
        preco: "15",      //€/hora
        clasificacao: "3", //estrelas
        localizacao: "Esqueiros, Vila-Verde"
    } 
    let campo_433_footbar = {
        id: "4",
        complexo: "2",
        modalidade: [1],
        image: "images/img_campos/433_Footbar_futebol5_ampolide_Lisboa.png",
        pisoCampo: "Sintético",
        tipoCampo: "Indoor",
        comodidades: ["Balnearios",],
        descricao: "Campo Futebol 5",
        endereço: "", //cordenadas para o google maps
        horarioFuncionamento: "",
        regras: [""],
        politicaCancelamento: "",  //acho que vai ser igual para todos, para ja fica assim
        reviews: ["1", "3"],
        reservas: ["", ""],
        numeroMaximoPessoas: "12",
        preco: "4,03",      //€/hora
        clasificacao: "4", //estrelas
        localizacao: "Campolide, Lisboa"
    } 


    let pavilhoes = new Array();
    pavilhoes.push(campo1);
    pavilhoes.push(campo2);
    pavilhoes.push(campo3);

    

    localStorage.removeItem("pavilhoes");
    localStorage.setItem("pavilhoes", JSON.stringify(pavilhoes));

  

}



window.onload = function pageLoad() {
    init();
    pavilhoes = JSON.parse(localStorage.getItem('pavilhoes'));
    modalidades = JSON.parse(localStorage.getItem('modalidades'));
/** 
    pavilhoes.forEach(pavilhao => {
            let modalidade = pavilhao.modalidade;

            modalidade.forEach(modalidade=>{
                modalidades.forEach(id => {
                    if(id.id===modalidade){
                      //  alert("Descrição: " + pavilhao.descricao + 'Modalidade: ' + id.nome);
                    }
                });
            });
            
            
    });
*/
    let count=1;

    pavilhoes.forEach(pavilhao => {

        let card = document.createElement("div");

    card.setAttribute("class", "card");
    card.style.width = '18rem';


    // create image element
    var image = document.createElement("img");
    image.setAttribute("src", pavilhao.image);
    image.setAttribute("alt", "imagem");
    image.setAttribute("class", "card-img-top img-fluid rounded-top-custom")
    image.style.width = '400px';
    image.style.height = '200px';



    var body = document.createElement("div");
    body.setAttribute("class", "card-body");

    // create title element
    var titleElem = document.createElement("h2");
    titleElem.setAttribute("class", "card-title");
    titleElem.textContent = pavilhao.preco + "€/hora";



    // make the stars
    let divStarts = document.createElement("div");
    divStarts.setAttribute("class", "rating");
    let star1 = document.createElement("i");
    let star2 = document.createElement("i");
    let star3 = document.createElement("i");
    let star4 = document.createElement("i");
    let star5 = document.createElement("i");

    switch (pavilhao.clasificacao) {
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
    descricao.textContent = pavilhao.descricao;

    var localizacao = document.createElement("h4");
    localizacao.textContent = pavilhao.localizacao;

    var br = document.createElement("br");

    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-success btn-sm");
    button.textContent = "Ver mais";


    card.appendChild(image);
    body.appendChild(titleElem);
    body.appendChild(divStarts);
    body.appendChild(descricao);
    body.appendChild(localizacao);
    body.appendChild(br);
    body.appendChild(button);
    card.appendChild(body);

    let carrouselContainer = document.getElementById('campo');
    carrouselContainer.appendChild(card);
    count++;
    });



}







function checkUser() {
    const userName = localStorage.getItem("name");

    if (userName) {
        nameForm.style.display = "none";
        welcomeContainer.style.display = "block";
        const userNameEelement = document.querySelector("#username");
        userNameEelement.textContent = userName;
    } else {
        nameForm.style.display = "block";
        welcomeContainer.style.display = "none";

    }

}

nameForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.querySelector("#name");

    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("pavilhoes", JSON.stringify(pavilhoes));

    nameInput.value = " ";
    checkUser();


});

logoutBtn.addEventListener("click", (e) => {
    localStorage.removeItem("name");
    checkUser();
});


