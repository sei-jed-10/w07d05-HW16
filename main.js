// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
	
 axios({
    method: 'get',
    url: 'https://rickandmortyapi.com/api/character/1,2,3,4,5'
})
.then(response => { 
    console.log(response);

for (i =0; i <5 ; i++){
    console.log(response.data[i].name);
    console.log(response.data[i].image);
    document.getElementById("new"+i).innerText = response.data[i].name;
    document.getElementById("box"+i).innerHTML = "<img src=" + response.data[i].image +" width=200 >" ;

 }
}).catch(error => {
    console.log(error);
})



