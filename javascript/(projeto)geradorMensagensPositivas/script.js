// Lista de histórias
var historias= [
    "Mantenha o rosto voltado para a luz do sol e você não verá nenhuma sombra.","Qualquer coisa positiva é melhor do que nada negativo.","Acredite que vale a pena viver e sua crença ajudará a criar esse fato.","Não importa o quão pequeno você comece, sempre sonhe grande.","A positividade traz paz de espírito que, por sua vez, relaxa todo o seu ser.","Faz uma grande diferença em sua vida quando você se mantém positivo.","Uma atitude de expectativa positiva é a marca da personalidade superior.","Não importa qual seja a situação, lembre-se ‘Eu tenho uma escolha.’","Existem duas maneiras de espalhar a luz: ser a vela ou o espelho que a reflete.","Se a oportunidade não bater, construa uma porta.","Decida que você o quer mais do que tem medo dele.","Aprendi a usar a palavra impossível com a maior cautela.","Escreva em seu coração que todo dia é o melhor dia do ano.","Fé e dúvida não podem existir ao mesmo tempo, pois uma dissipará a outra.","Não é a montanha que conquistamos, mas a nós mesmos.","Pensamentos positivos não são suficientes. Tem que haver sentimentos positivos e ações positivas.","Os seres humanos, ao mudar as atitudes internas de suas mentes, podem mudar os aspectos externos de suas vidas.","O pensamento positivo é esperar, falar e visualizar com certeza o que você deseja alcançar, como um fato consumado.","Eu acredito em Karma. Se o bem é semeado, o bem é coletado. Quando coisas positivas são feitas, isso retorna bem.","Oportunidade é definida como um conjunto de circunstâncias que tornam possível fazer algo.","Ajude-os a crescer ou acompanhe-os: conversas sobre carreira que os funcionários desejam","O sucesso depende de aproveitar o melhor que cada funcionário tem a oferecer e permitir os níveis mais altos possíveis de engajamento.","Você nem sempre será vitorioso, mas nunca sabe o que é realmente possível, a menos que tente.","Arregace as mangas para levantar e jogue o fardo da ignorância para substituir pelo conhecimento.","Há uma sensação de que as coisas, se você se mantiver positivo e otimista sobre o que pode ser feito, dão certo.","Alimente bons pensamentos hoje e aproveite a festa da positividade amanhã.","Sinta-se feliz esquecendo as decepções do dia e esperando que o melhor esteja por vir.","Apenas a mente curiosa pode explorar o mistério por meio da inteligência.", "Sempre que você cair, pegue algo.","Deixe sua luz do sol interior superar a névoa passageira do descontentamento."
]

var paragrafo = document.querySelector(".historia");
var botao = document.querySelector(".botao");
var valorHistorioaAnt;

function novaHistoria () {
    //Limpando o paragrafo
    paragrafo.innerHTML = "";

    //Função para gerar numero aleatorio entre valores
    function numeroAleatorio (min, max) {
        return Math.round(Number(Math.random() * (max-min) + min));
    }

    //gerando um número aleatorio entre os valores 0 e o maior indice do array historias
    var numeroHistoria = numeroAleatorio(0, Number(historias.length - 1));

    //verificando se o número gerado não é igual ao número gerado anteriormente
    while (numeroHistoria === valorHistorioaAnt) {
        var numeroHistoria = numeroAleatorio(0, Number(historias.length - 1));
    }

    //atrinuindo o valor aleatorio atual com o valor anterior
    valorHistorioaAnt = numeroHistoria;

    //gerando história aleatória
    var historiaAleatoria = historias[numeroHistoria];

    //atribuindo a história ao paragrafo
    paragrafo.textContent = historiaAleatoria;
}


botao.addEventListener("click", novaHistoria);
