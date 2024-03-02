let delay = 100
let array = [];
let arraySize = document.querySelector('.array_size');
let animationSpeed = document.querySelector('.speed');  


function createBars(size){
    
    for(let i = 0; i < size; i++){
        let barsHeight = Math.floor(Math.random()*100 + 1)
        array.push(barsHeight)
        let bar = document.createElement('div');
        bar.classList.add("bar")
        bar.style.width = `15px`;
        bar.style.height = barsHeight  + `%`;
        bar.style.backgroundColor = 'lightblue';
        bar.style.display = `inline-block`;
        bar.style.gap = `10px`
        document.getElementById('bars').appendChild(bar);
    }
}

function removeBars(){
    document.querySelectorAll(".bar").forEach(el => el.remove());
}

// create new array
document.querySelector('#newArray').addEventListener('click', function(){
    removeBars();
    createBars(arraySize.value);
});

// change the size of array using slider
arraySize.addEventListener('input', () => {
    removeBars();
    createBars(arraySize.value)
});

// animation speed logic
animationSpeed.addEventListener('input', () => {
    delay = 5000 - animationSpeed.value + 100 ;
    console.log(delay)
    document.querySelectorAll('.bar').forEach((bar) => {
        bar.style.transitionDuration  = ((delay/1000)) + "s";
    })
});

document.querySelector('.bubbleSort').addEventListener('click', function(){
    let bars = document.querySelectorAll('.bar')
    bubbleSort(bars)
});

document.querySelector('.selectionSort').addEventListener('click', function(){
    let bars = document.querySelectorAll('.bar')
    selectionSort(bars)
});

document.querySelector('.insertionSort').addEventListener('click', function(){
    let bars = document.querySelectorAll('.bar')
    insertionSort(bars)
});

document.querySelector('.mergeSort').addEventListener('click', function(){
    let bars = document.querySelectorAll('.bar')
    mergeSort(bars, 0, bars.length-1)
});

document.querySelector('.quickSort').addEventListener('click', function(){
    let bars = document.querySelectorAll('.bar')
    quickSort(bars, 0, bars.length-1)
});

async function swap(ele1, ele2){
    ele1.style.background = '#f00000'
    ele2.style.background = '#f00000'

    await new Promise(resolve => setTimeout(resolve, delay));

    let heightBar1 = ele1.style.height
    let heightBar2 = ele2.style.height

    ele1.style.height = heightBar2
    ele2.style.height = heightBar1

    await new Promise(resolve => setTimeout(resolve, delay));
}

createBars(arraySize.value)