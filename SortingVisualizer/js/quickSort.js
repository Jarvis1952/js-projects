async function quickSort(barsArr, start, end){
    await new Promise(resolve => setTimeout(resolve, delay));

    if(start >= end){
        return;
    }

    let pivotAtIndex =await partition(barsArr, start, end);

    await quickSort(barsArr, start, pivotAtIndex - 1);
    await quickSort(barsArr, pivotAtIndex + 1 , end);

    barsArr.forEach(bar => {
        bar.style.background = '#15fa00';
    });
    
}

async function partition(barsArr, start, end){
    let pivot = parseInt(barsArr[start].style.height);
    let count = 0;
    for(let i = start+1; i <= end; i++){
        if(parseInt(barsArr[i].style.height) <= pivot)
            count++;
    }

    let pivotIndex = parseInt(start + count);
    await swap(barsArr[pivotIndex], barsArr[start])
    barsArr[start].style.background = '#0072ff';
    await new Promise(resolve => setTimeout(resolve, delay));

    let i = start;
    let j = end;

    while(i < pivotIndex && j > pivotIndex){
        while(parseInt(barsArr[i].style.height) < pivot)
            i++;
        while(parseInt(barsArr[j].style.height) > pivot)
            j--;
        if(i < pivotIndex && j > pivotIndex)
          {
          await swap(barsArr[i],barsArr[j]) 
          }            
        i++;
        j--;
    }
    await new Promise(resolve => setTimeout(resolve, delay));
    return pivotIndex;
}

