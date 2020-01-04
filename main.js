// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

function getInfo(){
    axios({
        method: 'GET',
        url: 'https://rickandmortyapi.com/api/character/'
      })
      .then(function (response) {
        // handle success
        console.log("Axios request success!");
        console.log(response.data.results);
        var character = response.data.results;
        for (var i =0; i<=4; i++){
            console.log(character[i].name)
            $(".container").append(character[i].name);
            $('<img />', {
                src: character[i].image,
                width: '300px',
                height: '300px'
            }).appendTo($('.container')) 
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  }