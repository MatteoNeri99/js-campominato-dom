const buttonPlay =document.querySelector("button.play");

const divContainer=document.querySelector("main div.container");


function newGame (numeroCaselle, classe){


    divContainer.innerHTML="";

    for (let index=0; index < numeroCaselle ; index++){
        

        let articleEl=document.createElement("article");
    
        articleEl.classList.add(classe);
    
        articleEl.classList.add("display-inline-block")
    
    
        divContainer.appendChild(articleEl);

    
    
        articleEl.addEventListener("click", function (){
    
            articleEl.innerHTML=index + 1;

            const bombe=[];

            bombaRandom(bombe, index + 1, numeroCaselle);

            if(bombe.includes(articleEl.innerHTML=index + 1)  === true){

                articleEl.classList.add("bomba");

            }else{
                articleEl.classList.add("active");

            }

    
            console.log("casella numero: ", index + 1)
    
        });
    

    
        buttonPlay.addEventListener("click", function (){
    
            articleEl.innerHTML="";
    
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














function numeroRandom (min, max){

    return Math.floor(Math.random() * ((max + 1 ) - min)+ min);
    
}




function bombaRandom (numeriUsciti, min, max){

    while (numeriUsciti.length < 16){

        let numero=(numeroRandom(min, max));

        if (numeriUsciti.includes(numero) === false ){

            numeriUsciti.push(numero);
        }

    }
    
}
    


