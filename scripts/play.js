
var iterator = 0;
var cards = [];


function init_1(){
    cards = [
        'Mathew Mercer',
        'Brennan Lee Mulligan',
        'Jeff',
        'Lich'
    ];
    iterator = -1;
    //updateCard();
}
function getParams(){
    let paramString = location.href.split("?")[1];
    let paramStrings = paramString?.split("&");
    let params = {};
    if(paramStrings){
        for(let parStr of paramStrings){
            let temp = parStr.split("=");
            params[temp[0]] = temp[1];
        }
    }
    return params;
}

function test1(){
    init();
}

function init(){
    let params = getParams();
    cards = getCards(params);
    console.log(cards);
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
    el.innerHTML = cards[iterator].value;
}


init_1();