const searchBtn = document.querySelector('#search')
const displayMovies = document.querySelector("#movie-box")


async function searchMovie(movie){
    const url = `https://imdb146.p.rapidapi.com/v1/find/?query=${movie}`;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b7ba503549msh39516e5003fb05bp12c931jsnd7ce89159690',
		'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
	}
    };
    try{
        const response = await fetch(url, options)
        const result = await response.json()
        showMovies(result)
    } catch(error){

    }
}

const showMovies = (data) => {
    const {titleResults} = data;
    const {results} = titleResults;
    results.forEach(movie => {
        console.log(movie)
        const imagePath = movie.titlePosterImageModel.url
        const div = document.createElement('div')
        div.classList.add("box")
        div.innerHTML = `<img src= ${imagePath} /> 
        <div class="overlay">
            <div class="title"> 
                <h2> ${movie.titleNameText}  </h2>
                <span> ${movie.titleReleaseText} <span>
            </div>
        </div>`
    displayMovies.appendChild(div)
    });
}

searchBtn.addEventListener('click',async function(){
    searchMovie(searchBtn.value);    
})

searchBtn.addEventListener("keyup", function(event){
    if(event.target.value!=""){
        displayMovies.innerHTML = ''
        searchMovie(event.target.value)
    }
})