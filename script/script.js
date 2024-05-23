const buttonPlay =document.querySelector("button.play");

const divContainer=document.querySelector("main div.container");


function newGame (numeroCaselle, classe){


    divContainer.innerHTML="";

    const bombe=[];

    bombaRandom(bombe, numeroCaselle);

    for (let index=0; index < numeroCaselle ; index++){

        let articleEl=document.createElement("article");

        articleEl.innerHTML=index + 1;
    
        articleEl.classList.add(classe);
    
        articleEl.classList.add("display-inline-block")
    
        divContainer.appendChild(articleEl);
    
    
        articleEl.addEventListener("click", function (){


            for (let i=0; i<bombe.length; i++){

                console.log(parseInt(articleEl.value));



                if(bombe.includes(index) ){

                    articleEl.classList.add("bomba"); 
                }else{
            
                    articleEl.classList.add("active");
    
                }
        
            }

        });

        buttonPlay.addEventListener("click", function (){
    
            articleEl.classList.remove("active");
    
        
        });
    
    };
    
}





let difficoltaGame =document.querySelector("#livelli")


buttonPlay.addEventListener("click" , function(){

    let caselle;

    let classeDifficolta;

    switch (difficoltaGame.value){
        case "0":
            caselle= 100;
            classeDifficolta="facile"
            break;
        case "1":
            caselle= 81;
            classeDifficolta="medio"
            break;
        case "2":
            caselle= 49;
            classeDifficolta="difficile"
            break;
        default:
            caselle= 49;   
    }
  
    newGame(caselle, classeDifficolta)

});













// funzione che crea numero random


function numeroRandom (min, max){

    return Math.floor(Math.random() * ((max + 1 ) - min)+ min);
    
}



// funzione che aggiunge 16 numeri random diversi e li aggiunge ad un array


function bombaRandom (numeriUsciti, max){

    while (numeriUsciti.length < 16){

        let numero=(numeroRandom( 0 , max));

        if (numeriUsciti.includes(numero) === false ){

            numeriUsciti.push(numero);
        }

    }
    
}
    


