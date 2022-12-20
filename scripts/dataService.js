
async function testScript(){
    console.log("hei")
    //let data = readFile("/party-mime/database/test.txt");
    let subjects = readFile("/party-mime/database/subjects.csv")
    console.log('subjects', subjects)
    //let subjectsJSON = convertToJSON(subjects);
    let subjectsJSON = convertToJSON("value,dirty,complex;hitler,7,2;");
    console.log(subjectsJSON);
}





function convertToJSON(data){
    console.log('data', data);
    let dataList = data.split(";");
    let columns = dataList[0].split(",");
    let datatable = [];
    for(let i = 1; i < dataList.length; i++){
        let row = {};
        let rowValues = dataList[i].split(",");
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
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                let allText = rawFile.responseText;
                console.log(allText);
                return convertToJSON(allText);
            }
        }
    }
    rawFile.send(null);
}

function shuffleArray(array){
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
}

function combineArrays(array1, array2){
    const lengthToUse = Math.max(array1.length, array2.length)
    let array = [];
    for(let i = 0; i<lengthToUse; i++){
        array.push(array1[i] + '\n' + array2[i]);
    }
}