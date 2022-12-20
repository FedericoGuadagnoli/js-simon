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

// Determino la data attuale in millisecondi
const nowDateMs = new Date().getTime();
console.log(nowDateMs);

// Calcolo la differenza 
const diff = deadLineMs - nowDateMs;
console.log(diff);