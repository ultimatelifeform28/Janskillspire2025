function reverseArr(arr){

    return arr
}


function miaaingValues(arr){
    arr,sort((a,b) => a-b)

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1]){
            arr.splice(i,1)
            i--
        }
    }
    return arr
}