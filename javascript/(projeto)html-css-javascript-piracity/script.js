let planoDeFundo = document.querySelector(".cabecalho");
let listaImagens = ["1.jpg","2.jpeg","3.jpeg","4.jpeg","5.jpeg"];
let linkMenuHamburguer = document.querySelectorAll(".lista__hamburguer__link");
let caixaCheckBox = document.querySelector("#caixa__checkbox");



let numAleatorioAnt = 0;
let numAleatorio = Math.floor(Math.random() * listaImagens.length);
const timer = setInterval(() => {
    planoDeFundo.style.backgroundImage = `url("assets/${listaImagens[numAleatorio]}")`;
    while(numAleatorio === numAleatorioAnt) {
        numAleatorio = Math.floor(Math.random() * listaImagens.length);
    }
    numAleatorioAnt = numAleatorio;
},"7000");


for(var i = 0; i < linkMenuHamburguer.length; i++){
    linkMenuHamburguer[i].addEventListener("click", () => {
        caixaCheckBox.checked = false;
    })
}


