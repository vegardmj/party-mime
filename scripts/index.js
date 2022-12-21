function gotoPlay(){
    location.href = "/party-mime/play.html";
}

function saveCards(){
    let filename = getFileName();
    constructCards(filename).then((result)=>{
        let cards = result;
        console.log(cards);
        window.sessionStorage.setItem("cards", JSON.stringify(cards));
    });
}

function getFileName(){
    let filename = '';
    document.querySelectorAll("option").forEach((option)=>{
        if(option.selected == true){
            filename = option.value;
        }
    })
    return filename;
}
