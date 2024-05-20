const buttonPlay =document.querySelector("button.play");

const divContainer=document.querySelector("main div.container");


for (let index=0; index < 100 ; index++){
        

    let articleEl=document.createElement("article");

    articleEl.classList.add("medio");

    articleEl.classList.add("display-inline-block")


    divContainer.appendChild(articleEl);


    articleEl.addEventListener("click", function (){

        articleEl.innerHTML=index + 1;

        articleEl.classList.add("active");

        console.log("casella numero: ", index + 1)

    });


    buttonPlay.addEventListener("click", function (){

        articleEl.innerHTML="";

        articleEl.classList.remove("active");

    
    });

};



const difficoltaMedio =document.querySelector("#medio")

difficoltaMedio.addEventListener("click",function(){

    divContainer.innerHTML="";

    for (let index=0; index < 100 ; index++){
        

        let articleEl=document.createElement("article");

        articleEl.classList.add("medio");

        articleEl.classList.add("display-inline-block")
    
    
        divContainer.appendChild(articleEl);
    
    
        articleEl.addEventListener("click", function (){

            articleEl.innerHTML=index + 1;
    
            articleEl.classList.add("active");
    
            console.log("casella numero: ", index + 1)
    
        });
    
    
        buttonPlay.addEventListener("click", function (){

            articleEl.innerHTML="";
    
            articleEl.classList.remove("active");

        
        });
    
    };

});









const difficoltaFacile =document.querySelector("#facile")

difficoltaFacile.addEventListener("click",function(){

    divContainer.innerHTML="";


    for (let index=0; index < 49 ; index++){

        let articleEl=document.createElement("article");

        articleEl.classList.add("facile");

        articleEl.classList.add("display-inline-block");
    
    
        divContainer.appendChild(articleEl);
    
        
    
        articleEl.addEventListener("click", function (){

            articleEl.innerHTML=index + 1;
    
            articleEl.classList.add("active");
    
            console.log("casella numero: ", index + 1)
    
        });
    
    
        buttonPlay.addEventListener("click", function (){

            articleEl.innerHTML="";
    
            articleEl.classList.remove("active");

        
        });
    
    };

});







const difficoltaDifficile =document.querySelector("#difficile")

difficoltaDifficile.addEventListener("click",function(){

    divContainer.innerHTML="";

    for (let index=0; index < 400 ; index++){

        let articleEl=document.createElement("article");

        articleEl.classList.add("difficile");

        articleEl.classList.add("display-inline-block")
    
    
        divContainer.appendChild(articleEl);
    
       
    
        articleEl.addEventListener("click", function (){

            articleEl.innerHTML=index + 1;
    
            articleEl.classList.add("active");
    
            console.log("casella numero: ", index + 1)
    
        });
    
    
        buttonPlay.addEventListener("click", function (){

            articleEl.innerHTML="";
    
            articleEl.classList.remove("active");
        
        });
    
    };

});

