
function getCards(params){
    let path = "/party-mime/database/" + params.folder + "/subjects.csv";
    readFile(path).then((value) => {
        console.log(value);
        let temp = value.text();
        console.log(temp);
    })
    .catch((err)=>{
        console.log(err + ' Could not find data');
    });
}


function readFile(file){
    console.log("readTextFile", file)
    let myPromise = new Promise((resolve, reject)=>{
        let content = fetch(file);
        if(content != undefined){
            resolve(content);
        }
        else{
            reject('failed')
        }
    })
    return myPromise;
}


function convertToJSON(data){
    console.log('convertToJSON');
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