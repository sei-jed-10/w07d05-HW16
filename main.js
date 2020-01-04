const ramApp = document.getElementById('random');
const ramContainer = document.createElement('div');
ramContainer.setAttribute('class', 'container');
ramApp.appendChild(ramContainer);

// -- // -- // -- // // -- // -- // -- // // -- // -- // -- // // -- // -- // -- //

const ghibliApp = document.getElementById('root');
const ghibliContainer = document.createElement('div');
ghibliContainer.setAttribute('class', 'container');
ghibliApp.appendChild(ghibliContainer);

function doSomething () {
  axios ({
    method: 'get',
    url: 'https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20'})
  .then (response => {
    for (f = 0; f <= 20 ; f++) {
      const card = document.createElement('div')
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1')
      h1.textContent = response.data[f].name;
      
      const imgRaM = document.createElement('img')
      imgRaM.src = response.data[f].image;
      
      ramContainer.appendChild(card);
      card.appendChild(h1);
      card.appendChild(imgRaM);
    }
  })
  .catch (error => {
    console.log (error);
  })
}

// -- // -- // -- // // -- // -- // -- // // -- // -- // -- // // -- // -- // -- //

function doSomethingElse () {
  var request = new XMLHttpRequest()
  request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
  request.onload = function() {
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
      data.forEach(movie => {
        const card = document.createElement('div')
        card.setAttribute('class', 'card')
  
        const h1 = document.createElement('h1')
        h1.textContent = movie.title
  
        const p = document.createElement('p')
        movie.description = movie.description
        p.textContent = movie.description
  
        ghibliContainer.appendChild(card)
        card.appendChild(h1)
        card.appendChild(p)
      })
    } else {
      const errorMessage = document.createElement('marquee')
      errorMessage.textContent = `Ooh, Sugar Hony Ice Tea, it's not working!`
      app.appendChild(errorMessage)
    }
  }
  
  request.send()
}