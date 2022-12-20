
function testScript(){
    console.log("hei")
    readTextFile("/party-mime/database/test.txt");
}





function convertToJSON(data){
    return [];
}


function getSubjects(){
    let data = readFile("../database/", "subjects.xls");
    return convertToJSON(data);
}
function getVerbs(){
    let data = readFile("../database/", "verbs.xls");
    return convertToJSON(data);
}

function readFile(path, filename){
    return null;
}

function readTextFile(file)
{
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
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}