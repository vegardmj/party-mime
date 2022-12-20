
function testScript(){
    console.log("hei")
    readFile("/party-mime/database/test.txt");
    readFile("/party-mime/database/subjects.csv");
}





function convertToJSON(data){
    let 
    return [];
}


function getSubjects(){
    let data = readFile("/party-mime/database/test.txt");
    return convertToJSON(data);
}
function getVerbs(){
    let data = readFile("/party-mime/database/test.txt");
    return convertToJSON(data);
}

function readFile(file){
    console.log("readTextFile")
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                console.log(allText);
                return convertToJSON(allText);
            }
        }
    }
    rawFile.send(null);
}