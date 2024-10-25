 // Função para inicializar o timer
 function startTimer(duration, display) {
    let timer = duration, days, hours, minutes, seconds;
    setInterval(function () {
        days = Math.floor(timer / (24 * 60 * 60));
        hours = Math.floor((timer % (24 * 60 * 60)) / (60 * 60));
        minutes = Math.floor((timer % (60 * 60)) / 60);
        seconds = timer % 60;

        // Atualiza o conteúdo dos spans
        display[0].textContent = days < 10 ? "0" + days : days;
        display[1].textContent = hours < 10 ? "0" + hours : hours;
        display[2].textContent = minutes < 10 ? "0" + minutes : minutes;
        display[3].textContent = seconds < 10 ? "0" + seconds : seconds;

        if (--timer < 0) {
            timer = 0; // Quando o timer chega a 0, ele para
        }
    }, 1000);
}

// Inicializa o timer (1 dia, por exemplo)
window.onload = function () {
    const duration = 24 * 60 * 60; // 1 dia em segundos
    const display = [
        document.querySelector('#days'),
        document.querySelector('#hours'),
        document.querySelector('#minutes'),
        document.querySelector('#seconds')
    ]; // Seleciona os elementos onde o timer será exibido
    startTimer(duration, display);
};