'use strict';

const numberBox = document.querySelector(".number");
const guessValue = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const messageBox = document.querySelector(".message");
const scoreBox = document.querySelector(".score");
const highscoreBox = document.querySelector(".highscore"),
againBtn=document.querySelector(".again"),
container=document.querySelector("body");


let score =20;
let highscoreNumber=0;

let randomNumber = Math.trunc(Math.random() * 20) ;
console.log(randomNumber);


checkBtn.addEventListener("click", function () {
    let guessNumber = Number(guessValue.value);
    if (guessNumber === randomNumber ) {
        if(score> highscoreNumber){
            highscoreNumber=score
        }
         container.style.  backgroundColor="#4fca50"; 
   
        numberBox.textContent= randomNumber;
        messageBox.textContent = "🎉 Correct Number"
        highscoreBox.textContent=highscoreNumber;
        
    } else if (guessNumber > randomNumber){
        messageBox.textContent= "👀 Too high!";
        score--;
        scoreBox.textContent=score;
    }
    
    else if (guessNumber < randomNumber){
        messageBox.textContent= "👀 Too low!";
        score--;
        scoreBox.textContent=score;
    }
    
  
});


againBtn.addEventListener("click", function () {
    score=20;
    container.style.backgroundColor="#222222";
    numberBox.textContent="?";
    messageBox.textContent=" start guessing...";
    scoreBox.textContent=score;
    guessValue.value="";
});
    
  
    


