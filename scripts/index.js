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