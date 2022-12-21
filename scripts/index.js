function gotoPlay(){
    location.href = "/party-mime/play.html";
}

function saveCards(){
    let choices = getChoices();
    let cards = [];
    for(let choice of choices){
        if(choice.filename == "custom"){
            upload().then((result)=>{
                cards.push(...result);
            })
        }
        else{
            constructCards(choice).then((result)=>{
                cards.push(...result);
            })
        }

    }
    cards = shuffleArray(cards);
    window.sessionStorage.setItem("cards", JSON.stringify(cards));
}

function getChoices(){
    console.log('getChoices')
    let choices = [];
    document.querySelectorAll("option").forEach((option)=>{
        if(option.selected == true && option.value != null){
            choices.push({
                filename: option.value,
                column: option.dataset.column
            });
        }
    })
    console.log('choices', choices)
    return choices;
}

function upload() {
    let column = document.getElementById("column").value;
    let fileUpload = document.getElementById("fileUpload");
    let regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
    if (regex.test(fileUpload.value.toLowerCase())) {
            let reader = new FileReader();
            reader.onload = function (e) {
                let arr = convertToJSON(e.target.result, column)
                return arr;
            }
            reader.readAsText(fileUpload.files[0]);
    } else {
        alert("Please upload a valid CSV file.");
    }
}
