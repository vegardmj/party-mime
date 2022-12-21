function gotoPlay(){
    location.href = "/party-mime/play.html";
}

function saveCards(){
    let choices = getChoices();
    if(choices.length > 0){
        getCards(choices).then((cards)=>{
            cards = shuffleArray(cards);
            window.sessionStorage.setItem("cards", JSON.stringify(cards));
        })
    }
}

function getCards(choices){
    return new Promise((resolve, reject)=>{
        let cards = [];
        let promises = [];
        for(let choice of choices){
            if(choice.filename == "custom"){
                promises.push(upload());
            }
            else{
                promises.push(constructCards(choice))
            }
        }
        Promise.all(promises).then((cardLists) => {
            for(let c of cardLists){
                cards.push(...c);
            }
            if(cards.length > 0){
                resolve(cards);
            }
            else{
                reject('Failed')
            }
          });
    });
}

function getChoices(){
    console.log('getChoices')
    let choices = [];
    document.querySelectorAll("option").forEach((option)=>{
        if(option.selected == true && option.value){
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
    return new Promise((resolve, reject)=>{
        let column = document.getElementById("column").value;
        let fileUpload = document.getElementById("fileUpload");
        let regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
        
        if (regex.test(fileUpload.value.toLowerCase())) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    let arr = convertToJSON(e.target.result, column)
                    resolve(arr);
                }
                reader.readAsText(fileUpload.files[0]);
        } else {
            alert("Please upload a valid CSV file.");
            reject('Failed');
        }
    })
}
