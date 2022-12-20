console.log('JS OK');

// In pieno tema natalizio sfruttiamo le timing functions per  fare il conto alla rovescia per il Natale!
// Ogni secondo il nostro countdown dovrà scalare fino alla mezzanotte del 25 dicembre!



// Prendo gli elementi di interesse dalla pagina
const counterDays = document.getElementById('days');
const counterHours = document.getElementById('hours');
const counterMinutes = document.getElementById('minutes');
const counterSeconds = document.getElementById('seconds');

// Stablisco la data di fine countdown e la determino in millisecondi 
const deadLine = new Date ("December 25 2022");
console.log(deadLine);

const deadLineMs = deadLine.getTime();
console.log(deadLineMs);

// Determino giorno ora minuto e secondi in millisecondi
const secondMs = 1000;
const minuteMs = secondMs * 60;
const hourMs = minuteMs * 60;
const dayMs = hourMs * 24;
console.log(dayMs, hourMs, minuteMs, secondMs);


// Creo la variabile timer
const timerElement = setInterval(timer , 1000);

// Creo la funzione di countdown
function timer () {
    // Determino la data attuale in millisecondi
    const nowDateMs = new Date().getTime();
    console.log(nowDateMs);
    
    // Calcolo la differenza 
    const diff = deadLineMs - nowDateMs;
    console.log(diff);

    // Inserisco in countdown in pagina
    counterDays.innerHTML = Math.floor (diff / dayMs);
    counterHours.innerHTML = Math.floor ((diff % dayMs) / hourMs);
    counterMinutes.innerHTML = Math.floor ((diff % hourMs) / minuteMs);
    counterSeconds.innerHTML = Math.floor ((diff % minuteMs) / secondMs);
}

