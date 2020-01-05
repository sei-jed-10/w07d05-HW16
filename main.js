// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

document.getElementById("random").addEventListener("click", getInfo);


function getInfo()
{
    axios({
        method: 'Get',
        url: 'https://rickandmortyapi.com/api/character/'
    })

        .then(function (res) {
            var place = document.getElementById("yes");
            // var name = document.getElementById("name");

            for (let i = 0; i <= 4; i++) {

                var div = document.createElement("div");
                var img = document.createElement("img");
                var name = document.createElement("h");

                img.src = res.data.results[i].image;
                div.setAttribute("class", "column");
                name.setAttribute("class", "ok")
                div.innerHTML = `<span class="caption"> ${res.data.results[i].name} </span> `;

                place.appendChild(div);
                div.appendChild(img);
                // div.appendChild(name)
                console.log(name)
            }
            console.log(res.data.results);

        }


        ).catch(function (error) {
            console.log(error);
        }
        );

}