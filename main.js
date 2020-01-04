// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

$(document).ready(function(){
    // var fired_button = $("#random").val(); 
    // $("#random").click(function() {
    //     var fired_button = $(this).val();
    //     alert(fired_button);
    // });
    

   
    getPhoto = (photoId) =>{
       
        event.preventDefault()
         
         
    var photo = $.get(`https://rickandmortyapi.com/api/character/${photoId.value}`);
    photo.then(function(data){
        var charDiv = document.getElementById('charPhoto')
         
       
        
        var name = document.createElement("p");
        var photo = document.createElement("IMG");
        var div = document.createElement("Div");
        var state = document.createElement("p");
        var species = document.createElement("p");
         
        photo.setAttribute("src", data.image);
        photo.setAttribute("width", "290px");
        photo.setAttribute("height", "228");
         state.setAttribute("background-color" ,"rgba(0,0,255,0.3)")
        div.setAttribute("max-width", "300px");
        div.setAttribute("height", "300px");
        div.classList.add('myclass')
         photo.classList.add('img-rounded')
        
        name.innerHTML = data.name ;
        state.innerHTML = "Status: "+data.status
        species.innerHTML = "Spece: "+data.species
        div.appendChild(name);
        div.appendChild(photo);
        div.appendChild(state)
        div.appendChild(species)
        var charDiv = document.getElementById('charPhoto')
        charDiv.appendChild(div) ;
        
   
        console.log(data) ;
     

    }) //photo fun
}// getPhoto
 
 
    

}) // ready

