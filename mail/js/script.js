// 1) Chiedi all'utente la sua e-mail
var userMail = prompt("Write your e-mail, please.");

// 2) Controlla che sia nella lista di chi può partecipare
var mailList = ["blue@gmail.com", "green@gmail.com", "yellow@gmail.com", "orange@gmail.com", "pink@gmail.com", "brown@gmail.com", "red@gmail.com", "black@gmail.com", "purple@gmail.com", "white@gmail.com"];

var k = 0;

for (var i = 0; i < mailList.length; i++) {

    if (mailList[i] == userMail) {
        k += 1
    }

}

// 3) Stampa un messaggio appropriato sull'esito del controllo
if (k > 0) {
    document.getElementById("message").innerHTML = "Welcome! Your email is on the guest list."
} else if (k == 0) {
    document.getElementById("message").innerHTML = "Sorry... Your email is not on the guest list."
}