function gotoPlay(){
    let chosen = 'none';
    document.querySelectorAll("option").forEach((option)=>{
        if(option.selected == true){
            chosen = option.value;
        }
    })
    location.href = "/party-mime/pages/play.html?chosen=" + chosen;
}