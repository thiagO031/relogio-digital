let horas = document.querySelector("#horas");
let minutos = document.querySelector("#minutos");
let segundos = document.querySelector("#segundos");
let body = document.querySelector(".body");

const relogio = setInterval(function time() {
    
    // configuração das horas do relogio
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    
    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

    // configuração da troca de paletas após as 18h
    let b = body

    if(hr >= 18){
        b.style.background = 'linear-gradient(120deg, #a9d6e5, #014f86, #012a4a)';
    }
    
    


})
