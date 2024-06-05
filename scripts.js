var chatbot = document.getElementById('bot');
var count = 1;

function getNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let response = ['Si', 'No', 'No se', 'Tal vez'];

function getResponse() {
    chatbot.textContent = count + ". " + response[getNumber(0, response.length - 1)];
    count++;
}