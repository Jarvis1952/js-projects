async function bubbleSort(barsArr){

    let length =  barsArr.length;
    let isSwapped = false;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < (length - i - 1); j++) {

            barsArr[j].style.background = '#0072ff';
            barsArr[j+1].style.background = '#0072ff';
            await new Promise(resolve => setTimeout(resolve, 500));

            if (parseInt(barsArr[j].style.height) > parseInt(barsArr[j+1].style.height)) {
                await swap(barsArr[j], barsArr[j+1]);
                isSwapped = true;
            }

            barsArr[j].style.background = "#ffd000";
            barsArr[j+1].style.background = "#ffd000";
        }
        if(!isSwapped){
            break;
        }
        barsArr[length-i-1].style.background = '#15fa00';
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}

