alert('Boas vindas ao jogo do número secreto');
let numeroIntervalo = 20;
let numeroSecreto = parseInt(Math.random() * numeroIntervalo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//Enquanto chute não for igual ao numero secreto
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroIntervalo}`);
    // Se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++
    }
}


// if(tentativas > 1){
//     alert(`Isso ai! Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} tentativas!`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} tentativa!`);
// }

//Operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

