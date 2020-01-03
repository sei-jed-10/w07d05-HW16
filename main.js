
$('#rickAndMortyButton').click(function() {
    $('.container').append('<div class="row"> ')

    axios({
            method: 'GET',
            url: '  https://rickandmortyapi.com/api/character/'
        })
        .then(function(response) {
            for (i = 0; i < 5; i++) {
                $('.row').append(
                    `<div class='card' style='width: 18rem; display;inline-block'>
                    <div class='card-body'>
                      <h5 class='card-title'>${response.data.results[i].name}</h5>
                        <img class='card-img-top' id='char-img' src=${response.data.results[i].image}>
                            </div>
                                </div>`)

                $("#rickAndMortySection").fadeOut();
            }
        })
        .catch(function(error) {
            console.log(error);
        })

    $('.container').append('</div')

});


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

$('#studioGhibliButton').click(function() {
    $('.container').append(' <div class="column">')
    studioGhibliMovies = [];
    axios({
            method: 'GET',
            url: 'https://ghibliapi.herokuapp.com/films/'
        })
        .then(function(response) {
            for (item in response.data) {
                $('.column').append(
                    `<div class='film' style='display:inline-block; padding:25px'>
                    <h5>${response.data[item].title}</h5>
                    <p>${response.data[item].description}</p>
                     </div>`)
                $('.film').css("border-style", 'solid')
                $("#studioGhibliSection").fadeOut();

            }
        })
        .catch(function(error) {
            console.log(error);
        })

    $('.container').append('</div>')


});