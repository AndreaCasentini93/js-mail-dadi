function play() {

    // 1) Generare un numero random da 1 a 6 per il giocatore
    var userNumber = Math.floor ((Math.random() * 6) + 1);

    console.log("Player = ", userNumber);

    // 2) Generare un numero random da 1 a 6 per il computer
    var computerNumber = Math.floor ((Math.random() * 6) + 1);

    console.log("Computer = ", computerNumber);

    // 3) Stabilire il vincitore, in base a chi fa il punteggio più alto
    if (userNumber == 1) {
        document.getElementById("user").innerHTML = "<img src=\"img/dado-1.png\" alt=\"Image Dice\">"
    } else if (userNumber == 2) {
        document.getElementById("user").innerHTML = "<img src=\"img/dado-2.png\" alt=\"Image Dice\">"
    } else if (userNumber == 3) {
        document.getElementById("user").innerHTML = "<img src=\"img/dado-3.png\" alt=\"Image Dice\">"
    } else if (userNumber == 4) {
        document.getElementById("user").innerHTML = "<img src=\"img/dado-4.png\" alt=\"Image Dice\">"
    } else if (userNumber == 5) {
        document.getElementById("user").innerHTML = "<img src=\"img/dado-5.png\" alt=\"Image Dice\">"
    } else if (userNumber == 6) {
        document.getElementById("user").innerHTML = "<img src=\"img/dado-6.png\" alt=\"Image Dice\">"
    }

    if (computerNumber == 1) {
        document.getElementById("computer").innerHTML = "<img src=\"img/dado-1.png\" alt=\"Image Dice\">"
    } else if (computerNumber == 2) {
        document.getElementById("computer").innerHTML = "<img src=\"img/dado-2.png\" alt=\"Image Dice\">"
    } else if (computerNumber == 3) {
        document.getElementById("computer").innerHTML = "<img src=\"img/dado-3.png\" alt=\"Image Dice\">"
    } else if (computerNumber == 4) {
        document.getElementById("computer").innerHTML = "<img src=\"img/dado-4.png\" alt=\"Image Dice\">"
    } else if (computerNumber == 5) {
        document.getElementById("computer").innerHTML = "<img src=\"img/dado-5.png\" alt=\"Image Dice\">"
    } else if (computerNumber == 6) {
        document.getElementById("computer").innerHTML = "<img src=\"img/dado-6.png\" alt=\"Image Dice\">"
    }

    if (userNumber > computerNumber) {
        document.getElementById("message").innerHTML = "Congratulations, you won!"
    } else if (userNumber < computerNumber) {
        document.getElementById("message").innerHTML = "I'm sorry, you lost..."
    } else {
        document.getElementById("message").innerHTML = "You and the computer tied."
    }

    console.log("End of play");

}

function reset() {

    document.getElementById("user").innerHTML = ""
    document.getElementById("computer").innerHTML = ""
    document.getElementById("message").innerHTML = ""

}