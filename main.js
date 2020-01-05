// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
axios({
    method: 'get',
    url: 'https://ghibliapi.herokuapp.com/films'
    })
    .then(response => {
        console.log(response);
        for(i = 0; i < 5; i++){
            console.log(response.data[i].title);
            console.log(response.data[i].description);
            document.getElementById("title" + i).innerText = response.data[i].title;
            document.getElementById("description" + i).innerText = response.data[i].description;
        }
    })
    .catch(error => {
        console.log(error);
    })