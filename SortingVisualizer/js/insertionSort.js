async function insertionSort(barsArr){
    let temp = 0;
    let length = barsArr.length;
    for(let i = 1; i < length; i++){
        temp = parseInt(barsArr[i].style.height);
        let j = i - 1;

        barsArr[j+1].style.background = "#0072ff";
        barsArr[j].style.background = "#0072ff";

        await new Promise(resolve => setTimeout(resolve, delay))

        while(j >= 0 && parseInt(barsArr[j].style.height) > temp){
            await swap(barsArr[j+1], barsArr[j])
                
            barsArr[j+1].style.background = "#ffd000";
            barsArr[j].style.background = "#0072ff";
            await new Promise(resolve => setTimeout(resolve, delay))
            j--;
        }   
    }
    barsArr.forEach(bar => {
        bar.style.background = "#15fa00";
    });
}