// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button





    $("#random").click(function(){
       
        axios({
            method:'get',
            url:"https://rickandmortyapi.com/api/character/1,2,3,4,5"
        
        }).then(function(data){
            // $( ".div" + i ).append('<img class="theImg" src="  />');
            for (i = 0 ; i < 5 ; i++){
                document.getElementById("name" + i).innerText = data.data[i].name;
                document.getElementById("image" + i).innerHTML = "<img src=" + data.data[i].image + " width=200 >";
            console.log(data.data[i]);
            }
        }).catch(function(){
          console.log("REQUEST IS NOT PAWSIBBLE");
        })
      

    });
    