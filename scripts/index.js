function gotoPlay(){
    location.href = "/party-mime/play.html";
}

function saveCards(){
    let files = getFiles();
    constructCards(files).then((result)=>{
        let cards = result;
        console.log(cards);
        window.sessionStorage.setItem("cards", JSON.stringify(cards));
    });
}

function getFiles(){
    let filename = '';
    document.querySelectorAll("option").forEach((option)=>{
        if(option.selected == true){
            filename = option.value;
        }
    })
    let config = [
        {
            filename: filename,
            column: "value"
        }
    ]
    return config;
}


function upload() {
    let fileUpload = document.getElementById("fileUpload");
    let regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
    if (regex.test(fileUpload.value.toLowerCase())) {
            let reader = new FileReader();
            reader.onload = function (e) {
                console.log('e.target.result', e.target.result);
                let arr = shuffleArray(convertToJSON(e.target.result, "value"))
                console.log('arr', arr);
                window.sessionStorage.setItem("cards", JSON.stringify(arr));
            }
            reader.readAsText(fileUpload.files[0]);
    } else {
        alert("Please upload a valid CSV file.");
    }
}
