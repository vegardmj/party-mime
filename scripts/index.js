function gotoPlay(){
    let folder = 'none';
    document.querySelectorAll("option").forEach((option)=>{
        if(option.selected == true){
            folder = option.value;
        }
    })
    location.href = "/party-mime/play.html?folder=" + folder;
}