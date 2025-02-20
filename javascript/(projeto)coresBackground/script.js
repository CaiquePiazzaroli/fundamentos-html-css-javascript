var valorInput = document.querySelector("#cor");
var botaoInput = document.querySelector(".corDeFundo");
var corpo = document.querySelector("body");

botaoInput.addEventListener("click", function () {
    corpo.style.backgroundColor = valorInput.value;
})
