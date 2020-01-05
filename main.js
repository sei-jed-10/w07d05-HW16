$("#photo").click(function(){
    for (i =1 ; i <=5 ; i ++){
    var photo =$.get(`https://rickandmortyapi.com/api/character/${i}`);
    

    photo.then(function(data){
        console.log(data)
        var photo1 = document.createElement("IMG");
        var name = document.createElement("p")
        var div = document.createElement("Div")

        photo1.setAttribute("src", data.image);
        photo1.setAttribute("width", "290px");
        photo1.setAttribute("height", "228");
        div.setAttribute("width", "290px");

        name.innerHTML= data.name
        div.appendChild(name)
         div.appendChild(photo1)
         div.classList.add("q")
         

        document.getElementById("aaa").appendChild(div)



        
        

})
    }
})