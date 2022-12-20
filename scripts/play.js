
var iterator = 0;
var cards = [];

init_1();

function init_1(){
    cards = [
        'Mathew Mercer',
        'Brennan Lee Mulligan',
        'Jeff',
        'Lich'
    ];
    updateCard();
}
function getParams(){
    let paramString = location.href.split("?")[1];
    let paramStrings = paramString?.split("&");
    let params = {};
    for(let parStr of paramStrings){
        let temp = parStr.split("=");
        params[temp[0]] = temp[1];
    }
    return params;
}

function init(){
    let params = getParams();
    cards = getCards(params)
    updateCard();
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
    document.getElementById("card").innerHTML = cards[iterator];
}