if (window.performance.navigation.type === 1) {
    rollDice();
  }


function rollDice(){
var randomNumber1 = Math.floor(Math.random()*6) +1;
var randomImageSource1 = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
changeTitle(randomNumber1,randomNumber2);
}


function changeTitle(randomNumber1,randomNumber2){
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= "Player 1 Wins🥇"
}
else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML= "Draw😲"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML= "Player 2 Wins🥇"
}
}