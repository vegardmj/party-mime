
let iterator = 0;
let cards = [
    'Mathew Mercer',
    'Brennan Lee Mulligan',
    'Jeff',
    'Lich'
];
let paramString = location.href.split("?")[1];
let paramStrings = paramString?.split("&");
let params = {};
for(let parStr of paramStrings){
    let temp = parStr.split("=");
    params[temp[0]] = temp[1];
}
console.log(params);
readFileDummy(params.chosen)
updateCard();



function gotoHome(){
    location.href = "/party-mime/";
}

function newCard(){
    iterator += 1;
    if(iterator >= cards.length){
        alert('This was the last Card')
        gotoHome();
    }
    else{
        updateCard();
    }
}

function updateCard(){
    console.log('updateCard')
    document.getElementById("card").innerHTML = cards[iterator];
}