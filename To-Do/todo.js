const input = document.querySelector('#input-box');
const addButton = document.querySelector('.add');
const listContainer = document.querySelector('#list-container');

function addToList(){
    if(input.value == ''){
        alert(`Please add any Task`)
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    input.value = ''
    saveDataToLocalStorage()
}

function saveDataToLocalStorage(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function getDataFromLocalStorage(){
    listContainer.innerHTML = localStorage.getItem("data")
}

addButton.addEventListener('click', ()=>{
    addToList()
})

listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked")
        saveDataToLocalStorage()
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveDataToLocalStorage()
    }
}, false);

getDataFromLocalStorage()
