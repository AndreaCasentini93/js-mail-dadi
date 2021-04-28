// 1) Generare un numero random da 1 a 6 per il giocatore
var userNumber = Math.floor ((Math.random() * 6) + 1);

console.log(userNumber);

// 2) Generare un numero random da 1 a 6 per il computer
var computerNumber = Math.floor ((Math.random() * 6) + 1);

console.log(computerNumber);

// 3) Stabilire il vincitore, in base a chi fa il punteggio più alto
if (userNumber > computerNumber) {
    document.getElementById("message").innerHTML = "Congratulations, you won!"
} else if (userNumber < computerNumber) {
    document.getElementById("message").innerHTML = "I'm sorry, you lost..."
} else {
    document.getElementById("message").innerHTML = "You and the computer tied."
}
