
var iterator = 0;
var cards = [];

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

function init(){
    let params = getParams();
    getCards(params).then((result)=>{
        cards = result;
        console.log(cards);
    });
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

init();