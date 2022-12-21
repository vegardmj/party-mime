


function constructCards(files){
    let filename = files[0].filename;
    let column = files[0].column;
    let path = "/party-mime/database/" + filename + ".csv";
    return new Promise((resolve, reject)=>{
        let result = readFile(path).then((value) => {
            return shuffleArray(convertToJSON(value, column));
        })
        if(result != undefined){
            resolve(result);
        }
        else{
            reject('Failed')
        }
    })
}

function readFile(file){
    return new Promise((resolve, reject)=>{
        let content = fetch(file).then((result)=>{
            return result.text();
        });
        if(content != undefined){
            resolve(content);
        }
        else{
            reject('Failed')
        }
    });
}

function convertToJSON(data, column){
    let dataList = data.split("\n");
    let rows = dataList;
    let columns = dataList[0].split(",");
    let index = columns.indexOf(column);
    let datatable = [];
    for(let i = 1; i < rows.length; i++){
        let rowValues = rows[i].split(",");
        datatable.push(rowValues[index]);
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
    const lengthToUse = Math.min(array1.length, array2.length)
    let array = [];
    for(let i = 0; i<lengthToUse; i++){
        array.push(array1[i] + '\n' + array2[i]);
    }
}
function appendArrays(array1, array2){
    array1.push(...array2);
    return array1;
}