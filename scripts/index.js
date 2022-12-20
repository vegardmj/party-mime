function gotoPlay(){
    let folder = 'none';
    let files = '';
    document.querySelectorAll("input").forEach((checkbox)=>{
        if(checkbox.checked){
            files += checkbox.name + "+";
        }
    })
    document.querySelectorAll("option").forEach((option)=>{
        if(option.selected == true){
            folder = option.value;
        }
    })
    location.href = "/party-mime/play.html?folder=" + folder + "&files=" + files;
}