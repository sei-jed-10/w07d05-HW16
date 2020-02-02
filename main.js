function display(){
   
    axios({
        method: 'get',
        url: 'https://rickandmortyapi.com/api/character/1,2,3,4,5'
    })
    .then(response => { 
        console.log(response);
        
for (i=0; i<5 ; i++){
        console.log(response.data[i].name);
        console.log(response.data[i].image);
        document.getElementById("title"+i).innerText = response.data[i].name;
        document.getElementById("img"+i).innerHTML = "<img src=" + response.data[i].image +" width=200 >" ;

    }
    }).catch(error => {
        console.log(error);
    })


}
