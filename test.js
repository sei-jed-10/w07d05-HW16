function display () {
    axios ({
        method: "get",
        url: "https://rickandmortyapi.com/api/character/1,2,3,4,5"
    })
    .then (response => {
        console.log (response);
        for (f = 0; f <= 5 ; f++) {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
            const h1 = document.createElement('h1')
            h1.textContent = response.data[f].name
            const imgRaM = document.createElement('imgRaM')
            imgRaM.setAttribute('class', 'imgRaM')
            imgRaM.css ('background-image', `url(https://rickandmortyapi.com/api/character/avatar/${f}.jpeg)`)

            container.appendChild(card)
            card.appendChild(h1)
            card.appendChild(imgRaM)
        }
    })
    .catch (error => {console.log (error);})
}