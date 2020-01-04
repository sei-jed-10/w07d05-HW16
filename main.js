// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

axios({
    method: "get",
    url: "https://rickandmortyapi.com/api/character/[1,2,3,4,5]",
})
.then(response => {
console.log(response.data);
    response.data.forEach((element) => {
        $(".row").append(
            `<div class='card' style='width: 18rem; display;inline-block'>
            <div class='card-body'>
              <h5 class='card-title'>${element.name}</h5>
                <img class='card-img-top' id='char-img' src=${element.image}>
                    </div>
                        </div>`
        )
    });
})
.catch(error => {
    console.log(error);
});