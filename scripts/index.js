function gotoPlay(){
    let file = '';
    document.querySelectorAll("option").forEach((option)=>{
        if(option.selected == true){
            file = option.value;
        }
    })
    location.href = "/party-mime/play.html?file=" + file;
}