var botaoSoma = document.querySelector(".soma");
var botaoSub = document.querySelector(".sub");
var botaoIgual = document.querySelector(".igual");
var botaoDiv = document.querySelector(".divisao");
var botaoMult = document.querySelector(".mltiplicacao");
var botaoClear = document.querySelector(".clear");
var resultado = null;
var input = document.querySelector(".input");
var painel = document.querySelector(".painel");
var resultadoDisplay = document.querySelector(".resultado");


function soma () {
    if(resultado===null) {
        resultado = Number(input.value);
        if (painel.textContent === "painel" || painel.textContent === "--") {
            painel.textContent ="";
        }

        painel.textContent += input.value + "+";

        input.value="";
        resultadoDisplay.textContent = resultado;
        
    } else {
        if (input.value !== '') {
            resultado += Number(input.value);

            if (painel.textContent === "painel" || painel.textContent === "--") {
                painel.textContent ="";
            }

            painel.textContent += input.value + "+";

            input.value="";
            resultadoDisplay.textContent = resultado;
        } else {
            window.alert("Insira um valor numérico");
        }
    }
}

function sub () {
    if(resultado===null) {
        resultado = Number(input.value);
        if (painel.textContent === "painel" || painel.textContent === "--") {
            painel.textContent ="";
        }

        painel.textContent += input.value + "+";

        input.value="";
        resultadoDisplay.textContent = resultado;
        
    } else {
        if(input.value !== '') {
            resultado -= Number(input.value);

            if (painel.textContent === "painel" || painel.textContent === "--") {
                painel.textContent ="";
            }

            painel.textContent += input.value + "-";

            input.value="";
            resultadoDisplay.textContent = resultado;
        }
    }
}

function divisao () {
    if(resultado===null) {
        resultado = Number(input.value);
        if (painel.textContent === "painel" || painel.textContent === "--") {
            painel.textContent ="";
        }

        painel.textContent += input.value + "+";

        input.value="";
        resultadoDisplay.textContent = resultado;
        
    } else {
        if(input.value !== '') {
            painel.textContent = resultado;
            resultado = resultado/Number(input.value);

            if (painel.textContent === "painel" || painel.textContent === "--") {
                painel.textContent ="";
            }

            painel.textContent += input.value + "/";

            input.value="";
            resultadoDisplay.textContent = resultado;
        }
    }
}

function multiplicacao () {
    if(resultado===null) {
        resultado = Number(input.value);
        if (painel.textContent === "painel" || painel.textContent === "--") {
            painel.textContent ="";
        }

        painel.textContent += input.value + "+";

        input.value="";
        resultadoDisplay.textContent = resultado;
        
    } else {
        if(input.value !== '') {
            painel.textContent = resultado;
            resultado = resultado*Number(input.value);

            if (painel.textContent === "painel" || painel.textContent === "--") {
                painel.textContent ="";
            }

            painel.textContent += input.value + "*";

            input.value="";
            resultadoDisplay.textContent = resultado;
        }
    }
}

function mostrarResultado () {
    if(resultado===null) {
        resultado = Number(input.value);
        if (painel.textContent === "painel" || painel.textContent === "--") {
            painel.textContent ="";
        }

        painel.textContent += input.value + "+";

        input.value="";
        resultadoDisplay.textContent = resultado;
        
    } else {
        resultadoDisplay.textContent = resultado;
        painel.textContent = resultado;
    }
}
 
function clear () {
    resultado = null;
    painel.textContent = "--";
    resultadoDisplay.textContent = "--";
    input.textContent = "";
}   





botaoSoma.addEventListener("click", soma);
botaoSub.addEventListener("click", sub);
botaoDiv.addEventListener("click", divisao);
botaoMult.addEventListener("click", multiplicacao);
botaoIgual.addEventListener("click", mostrarResultado);
botaoClear.addEventListener("click", clear);
