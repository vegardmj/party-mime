function gotoPlay(){
    let file = '';
    document.querySelectorAll("option").forEach((option)=>{
        if(option.selected == true){
            file = option.value;
        }
    })
    location.href = "/party-mime/play.html?file=" + file;
}



function storeInSession(){
    window.sessionStorage.setItem("derp", "Heiasndnak sdlmløa sdma smd klasm dlkasmd lkasm dlaskm dlkasmd ");

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


function constructCards(){
    let params = getParams();
    getCards(params).then((result)=>{
        cards = result;
        console.log(cards);
        updateCard();
    });
}