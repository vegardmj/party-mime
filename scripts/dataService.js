
function getCards(params){
    let path = "/party-mime/database/" + params.folder + "/subjects.csv";
    return new Promise((resolve, reject)=>{
        let result = readFile(path).then((value) => {
            let jsonList = convertToJSON(value);
            console.log("readFile.then(convertToJSON(value))", jsonList);
            return jsonList;
        })
        .catch((err)=>{
            console.log(err + ' Could not find data');
        });
        if(result != undefined){
            resolve(result);
        }
        else{
            reject('Failed')
        }
    })
}


function readFile(file){
    console.log("readTextFile", file)
    let myPromise = new Promise((resolve, reject)=>{
        let content = fetch(file).then((result)=>{
            return result.text();
        });
        if(content != undefined){
            resolve(content);
        }
        else{
            reject('Failed')
        }
    })
    return myPromise;
}


function convertToJSON(data){
    let dataList = data.split("\n");
    let rows = dataList;
    let columns = dataList[0].split(",");
    let datatable = [];
    for(let i = 1; i < rows.length; i++){
        let row = {};
        let rowValues = rows[i].split(",");
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