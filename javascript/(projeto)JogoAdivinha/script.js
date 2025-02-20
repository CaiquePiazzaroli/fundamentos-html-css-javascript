var randomNumber = Math.floor(Math.random() * 100) + 1;
var guesses = document.querySelector(".guesses");
var lastResult = document.querySelector(".lastResult");
var lowOrHi = document.querySelector(".lowOrHi");
var guessSubmit = document.querySelector(".guessSubmit");
var guessField = document.querySelector(".guessField");
var guessCount = 1;
var resetButton;

//coloca o cursor no campo de palpite
guessField.focus();

//checar o palpite 
function checkguess () {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Jogadas anterirores: "
    }
    guesses.textContent += `${userGuess} `;

    if (userGuess === randomNumber) {
        lastResult.textContent = "Você acertou!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        var nito = document.querySelector(".nito");
        nito.style.display ="block";
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent ="Game over!!"
        lowOrHi.textContent = "";
        setGameOver()
    } else {
        lastResult.textContent = "Errou!";
        lastResult.style.backgroundColor = "Red";
        if(userGuess < randomNumber) {
            lowOrHi.textContent = "O número é muito baixo!";
        } else if (userGuess > randomNumber){
            lowOrHi.textContent = "O número é muito alto!";
        }
    }

    guessCount = guessCount + 1;
    guessField.value = "";
    guessField.focus();
}

//Informar game over e gerar o botão de reset
function setGameOver() {
    var resultparas = document.querySelector(".resultParas");
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Começar um novo jogo.";
    resetButton.className = "guessSubmit";
    resultparas.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

//Resetar as variáveis e iniciar o novo jogo
function resetGame () {
    //contagem volta a ser 1
    guessCount = 1;

    //limpa todos os paragrafos
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
        resetPara.textContent = "";
    }

    //remove o botão de reset
    resetButton.parentNode.removeChild(resetButton);
    
    //Ativa o campo de imput e submit
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    //remove a cor vermelha do campo ultimo palpite
    lastResult.style.backgroundColor = "transparent";

    //esconde o gif
    var nito = document.querySelector(".nito");
    nito.style.display ="none";

    // gera um novo número aleatório de 1 a 100
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

guessSubmit.addEventListener("click",checkguess);