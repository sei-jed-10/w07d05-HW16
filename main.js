// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

//movies
function Movies(){

    axios({
        method: 'get',
        url:"https://ghibliapi.herokuapp.com/films"
        })
        .then(response =>{
            if(document.getElementById('ShowMovie').hasChildNodes()==true){ 
                document.getElementById('ShowMovie').innerHTML = '';
                displayMovie(response);
            }
            else {
                displayMovie(response);
        }
        })
        .catch(error=>{
        console.log(error)
        })
}

function displayMovie(response){
    for(var i=0;i<response.data.length;i++){                
        var movie = document.getElementById('ShowMovie');
        var divShow = document.createElement('div');
        $(divShow).addClass("center");
        divShow.innerHTML="<h1>"+response.data[i].title+"</h1><br><p>"+response.data[i].description+"</p><br>"  
        movie.appendChild(divShow);        
} 
}