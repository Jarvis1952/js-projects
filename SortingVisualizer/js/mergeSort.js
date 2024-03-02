async function mergeSort(barsArr, start, end){
    if(start >= end){
        return;
    }
    // color change
    for (let i = start; i <= end; i++) {
        barsArr[i].style.background = "#ff0077";
    }
    
    if ((end - start) == barsArr.length-1)
        await new Promise(resolve => setTimeout(resolve, delay));

    let midValue = start + Math.floor((end - start) / 2);
    for (let i = midValue + 1; i <= end; i++) {
        barsArr[i].style.background = "#ffdd00";
    }
    await new Promise(resolve => setTimeout(resolve, delay));

    // left array 
    await mergeSort(barsArr, start, midValue);

    await new Promise(resolve => setTimeout(resolve, delay));

    // right array
    await mergeSort(barsArr, midValue + 1, end);

    for (let i = start; i <= end; i++) {
        barsArr[i].style.background = "#ff0077";
    }
    await new Promise(resolve => setTimeout(resolve, delay));

    // merging
    await merge(barsArr, start, end);

    if ((end - start) == barsArr.length-1) {
        for (let i = start; i <= end; i++) {
            barsArr[i].style.background = "#15fa00";
        }
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}

async function merge(barsArr, start, end){

    for (let i = start; i <= end; i++) {
        barsArr[i].style.background = "#0072ff";
    }
    await new Promise(resolve => setTimeout(resolve, delay));

    let midValue = start + Math.floor((end - start) / 2);

    let leftArrayLength = midValue - start + 1;
    let rightArrayLength = end - midValue;

    let leftArray = [];  
    let rightArray = [];  

    let mainArrayIndex = start;
    for (let i = 0; i < leftArrayLength; i++)
    {
        leftArray[i] = barsArr[mainArrayIndex++].style.height;
    }

    mainArrayIndex = midValue + 1;
    for (let i = 0; i < rightArrayLength; i++)
    {
        rightArray[i] = barsArr[mainArrayIndex++].style.height;
    }

    let index1 = 0;
    let index2 = 0;
    mainArrayIndex = start;

    while(index1 < leftArrayLength && index2 < rightArrayLength){
        if(parseInt(leftArray[index1]) <= parseInt(rightArray[index2])){
            barsArr[mainArrayIndex++].style.height = leftArray[index1++];
        }
        else{
            barsArr[mainArrayIndex++].style.height = rightArray[index2++];
        }
    }

    while(index1 < leftArrayLength){
        barsArr[mainArrayIndex++].style.height = leftArray[index1++];
    }
    while(index2 < rightArrayLength){
        barsArr[mainArrayIndex++].style.height = rightArray[index2++];
    }
    await new Promise(resolve => setTimeout(resolve, delay));
}