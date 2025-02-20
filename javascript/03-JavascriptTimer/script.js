valor = 0;
const minutosp = document.querySelector(".minutos");
const segundosp = document.querySelector(".segundos");
const horasp = document.querySelector(".horas");

var minuto = 0;
var segundo = 0;



setInterval(function () {
    var data = new Date();
    segundosp.textContent = data.getSeconds();
    minutosp.textContent=data.getMinutes() + ":";
    horasp.textContent=data.getHours() + ":";
}, "1000");
