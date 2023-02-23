 /*----- constants -----*/

const restartGame = document.querySelector('#restart');
const buttons = document.querySelectorAll(".buttons");
const timer = document.querySelector("#timer");
const input = document.querySelector("#ans");
const display = document.querySelector("#prompt");
const cat = document.querySelector("#cat");
const happyCat = document.querySelector("#happyCat");
const superHero = document.querySelector("#superhero");
superHero.style.position = "absolute";
superHero.style.left = "530px";
superHero.style.top = "650px";

 /*----- state variables -----*/

let num1;
let num2;
let num3;
let num4;
let operator;
let operatorRandom;
let clicked;
let time = "  ";
let resultEasy;
let resultInt;
let resultHard;
let correctAns = [];

 /*----- event listeners -----*/

restartGame.addEventListener("click", function() {
  location.reload();
});

buttons.forEach(function(currentBtn) {
  currentBtn.addEventListener("click", function(e){
  clicked = e.target.id;
    if (clicked === "easy"){
      time = 20;
  }
    else if (clicked === "int"){
      time = 30;
  }
    else{  
      time = 40;
  }
  document.querySelector(".mainPage").style.display = "none";
  document.querySelector(".qnsPage").style.display = "block";
  restartGame.style.display = "block";
  timer.style.display = "block";
  randomized();
  countDown();
  })
});

//https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
  event.preventDefault();
  calculate();
  if (input.value == resultEasy || input.value == resultInt || input.value == resultHard) {
        display.innerText = "Correct";
        correctAns.push("1");
        moveUp(); 
        randomized();
  }
  else {
        calculate();
        display.innerText = "Wrong";
        correctAns.pop();
        moveDown();
        randomized();
    }
  input.value = "";
    if (correctAns.length == 10) {
      superHero.style.left = "450px"
  }
    else if (correctAns.length == 11) {
      display.innerText = "You win!";
      clearInterval(countDown);
      document.querySelector("#ans").disabled = true;
      superHero.style.top = "350px";
      superHero.style.left = "580px";
      cat.style.display = "none";
      happyCat.style.display = "block";
    }}
  });

 /*----- functions -----*/

 // https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown

 let countDown = setInterval(function(){
  if(time === 0){
    clearInterval(countDown);
    const display = document.querySelector("#prompt");
    display.innerText = "Time's up! You lose!";
    superHero.style.top = "670px";
    superHero.style.transform = "rotate(70deg)";
    cat.style.transform = "rotate(300deg)";
    cat.style.left = "350px";
    cat.style.top = "230px";
    document.querySelector("#ans").disabled = true;
  }
  document.querySelector("#timer").innerHTML = time
  time -= 1;
}, 1000);

function randomized(){
  num1 = Math.floor(Math.random() * 10);
  num2 = Math.floor(Math.random() * 10);
  num3 = Math.floor(Math.random() * 100);
  num4 = Math.floor(Math.random() * 100);
  operator = ["+", "-"];
  operatorRandom = operator[Math.floor(Math.random() * operator.length)];

  if (clicked === "easy"){
    document.querySelector("#num1").innerText = num1;
    document.querySelector("#num2").innerText = num2;
    document.querySelector("#operator").innerText = operatorRandom;
  }
  else if (clicked === "int") {
    document.querySelector("#num1").innerText = num3;
    document.querySelector("#num2").innerText = num2;
    document.querySelector("#operator").innerText = operatorRandom;
  }
  else {  
    document.querySelector("#num1").innerText = num3;
    document.querySelector("#num2").innerText = num4;
    document.querySelector("#operator").innerText = operatorRandom;
  }
  
}

function calculate(){
  if (operatorRandom === "+") {
    resultEasy = num1 + num2;
    resultInt = num3 + num2;
    resultHard = num3 + num4;
  }
  else if (operatorRandom === "-") {
    resultEasy = num1 - num2;
    resultInt = num3 - num2;
    resultHard = num3 - num4;
  }
}

// https://www.includehelp.com/code-snippets/move-object-with-arrow-keys-using-javascript-function.aspx#:~:text=Move%20object%20(image)%20with%20arrow,moved%20on%20the%20browser%20screen.

function moveUp() { 
  superHero.style.top = parseInt(superHero.style.top) - 40 + "px";
}

function moveDown() { 
if (superHero.style.top >= "650px"){
    superHero.style.top = "650px";
}
else {
  superHero.style.top = parseInt(superHero.style.top) + 40 + "px";
  }
}


