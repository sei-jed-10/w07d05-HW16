// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
 iName = document.querySelector('.name')
 show5 = document.querySelector('.show5')
iMage = document.querySelectorAll('.image')

contain = document.querySelector('.container')
  clickit =document.querySelector("#random")


function Responsetoclick(  ){   



axios({   
    method: 'get', 
    
    url: " https://rickandmortyapi.com/api/character/1,2,3,4,5"
    
    
    
    
    
    }).then(response=> { 
    
    console.log(response.data[4].image);
    console.log(response.data);
  
iMage[0].children[0].innerText= response.data[0].name;
 iMage[0].children[1].src=response.data[0].image;
 
 iMage[1].children[0].innerText= response.data[1].name;
 iMage[1].children[1].src=response.data[1].image;
 
 iMage[2].children[0].innerText= response.data[2].name;
 iMage[2].children[1].src=response.data[2].image;



 iMage[3].children[0].innerText= response.data[3].name;
 iMage[3].children[1].src=response.data[3].image;

 iMage[4].children[0].innerText=response.data[4].name;
 iMage[4].children[1].src=response.data[4].image;

// show5.src=response.data[4].image;
    
    }). catch(error=>{  
        console.log(error);
    
    
    })
}
clickit.addEventListener('click',Responsetoclick); 
