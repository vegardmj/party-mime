
var iterator = 0;
var cards = [];

function init(){
    cards = JSON.parse(window.sessionStorage.getItem("cards"));
}

function newCard(){
    iterator += 1;
    if(iterator >= cards.length){
        alert('This was the last Card')
        location.href = "/party-mime/";
    }
    else{
        updateCard();
    }
}

function updateCard(){
    let el = document.getElementById("card");
    el.innerHTML = cards[iterator];
}

init();