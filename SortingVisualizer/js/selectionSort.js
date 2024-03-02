async function selectionSort(barsArr){
    let length = barsArr.length;
    let minValue = 0;
    for (let i = 0; i < length - 1; i++){
        minValue = i;
        barsArr[minValue].style.background = "#0072ff";
        await new Promise(resolve => setTimeout(resolve, delay));

        for(let j = i+1; j < length; j++){
            barsArr[j].style.background = "#0072ff";
            await new Promise(resolve => setTimeout(resolve, delay));

            if(parseInt(barsArr[j].style.height) < parseInt(barsArr[minValue].style.height))
            {
                barsArr[minValue].style.background = "#ffd000";
                minValue = j;
             }
        }
        await swap(barsArr[i], barsArr[minValue]);
        barsArr[minValue].style.background = "#ffd000";
        barsArr[i].style.background = "#15fa00";
        await new Promise(resolve => setTimeout(resolve, delay));
    }
    barsArr[length-1].style.background = '#15fa00';
}