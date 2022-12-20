
function testScript(){
    console.log("hei")
    let data = readFile("/party-mime/database/test.txt");
    let subjects = readFile("/party-mime/database/subjects.csv");
    subjects = convertToJSON(subjects);
    console.log(subjects);
}





function convertToJSON(data){
    let split = data.split(";");
    let columns = split[0].split(",");
    let datatable = [];
    for(let i = 1; i < split.length; i++){
        let row = {};
        let rowValues = split[i].split(",");
        for(let j = 0; j < columns.length; j++){
            row[columns[j]] = rowValues[j];
        }
        datatable.push(row);
    }
    return datatable;
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
                return allText;
            }
        }
    }
    rawFile.send(null);
}