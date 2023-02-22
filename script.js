// Question & Answer input
let resultEasy;
let resultInt;
let resultHard;

function calculate() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const num3 = Math.floor(Math.random() * 100);
  const num4 = Math.floor(Math.random() * 100);
  document.querySelector("#num1").innerText = num1;
  document.querySelector("#num2").innerText = num2;
  document.querySelector("#num3").innerText = num3;
  document.querySelector("#num4").innerText = num2;
  document.querySelector("#num5").innerText = num3;
  document.querySelector("#num6").innerText = num4;

  const operator = ["+", "-"];
  const operatorRandom = operator[Math.floor(Math.random() * operator.length)];
  document.querySelector("#opEasy").innerText = operatorRandom;
  document.querySelector("#opInt").innerText = operatorRandom;
  document.querySelector("#opHard").innerText = operatorRandom;

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

const restartGame = document.querySelector('#restart');
restartGame.addEventListener("click", function() {
  location.reload();
});

// Superhero -> Moving image ref: https://www.includehelp.com/code-snippets/move-object-with-arrow-keys-using-javascript-function.aspx#:~:text=Move%20object%20(image)%20with%20arrow,moved%20on%20the%20browser%20screen.
const cat = document.querySelector("#cat");
const happyCat = document.querySelector("#happyCat");
const superHero = document.querySelector("#superhero");
  superHero.style.position = "absolute";
  superHero.style.left = "530px";
  superHero.style.top = "650px";

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

//** ----- Easy level ----- **
const buttonEasy = document.querySelector("#easy");
buttonEasy.addEventListener("click", function(){
  document.querySelector(".mainPage").style.display = "none";
  document.querySelector(".easyPage").style.display = "block";
  restartGame.style.display = "block";
  
 // Timer -> https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown

let time = 20; 
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

// Enter key -> https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp

let correctAns = [];
const input = document.querySelector("#ans");
const display = document.querySelector("#prompt");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
  event.preventDefault();
  if (input.value == resultEasy) {
        calculate();
        display.innerText = "Correct";
        correctAns.push('1');
        moveUp();
  }
  else {
        calculate();
        display.innerText = "Wrong";
        correctAns.pop();
        moveDown();
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
  }
  }});
  calculate();
  moveUp();
  moveDown();
 
});

//** ----- Int level ----- **

const buttonInt = document.querySelector("#int");
buttonInt.addEventListener("click", function(){
  document.querySelector(".mainPage").style.display = "none";
  document.querySelector(".intPage").style.display = "block";
  restartGame.style.display = "block";

  // Timer

let time2 = 20; 
let countDown2 = setInterval(function(){
  if(time2 === 0){
  clearInterval(countDown2);
  const display2 = document.querySelector("#prompt2");
  display2.innerText = "Time's up! You lose!";
  superHero.style.top = "670px";
  superHero.style.transform = "rotate(70deg)";
  cat.style.transform = "rotate(300deg)";
  cat.style.left = "350px";
  cat.style.top = "230px";
  document.querySelector("#ans2").disabled = true;
  }
  document.querySelector("#timer2").innerHTML = time2
  time2 -= 1;
}, 1000);

// Enter key 

let correctAns2 = [];
const input2 = document.querySelector("#ans2");
const display2 = document.querySelector("#prompt2");
input2.addEventListener("keypress", function(event2) {
  if (event2.key === "Enter") {
  event2.preventDefault();
  if (input2.value == resultInt) {
        calculate();
        display2.innerText = "Correct";
        correctAns2.push('1');
        moveUp();
  }
  else {
        calculate();
        display2.innerText = "Wrong";
        correctAns2.pop();
        moveDown();
    }
    input2.value = "";
  if (correctAns2.length == 10) {
     superHero.style.left = "450px"
  }
  else if (correctAns2.length == 11) {
  display2.innerText = "You win!";
  clearInterval(countDown2);
  document.querySelector("#ans2").disabled = true;
  superHero.style.top = "350px";
  superHero.style.left = "580px";
  cat.style.display = "none";
  happyCat.style.display = "block";
  }
  }});
  calculate();
  moveUp();
  moveDown();
 
});

 
//** ----- Hard level ----- **
const buttonHard = document.querySelector("#hard");
buttonHard.addEventListener("click", function(){
  document.querySelector(".mainPage").style.display = "none";
  document.querySelector(".hardPage").style.display = "block";
  restartGame.style.display = "block";

  // Timer

let time3 = 30; 
let countDown3 = setInterval(function(){
  if(time3 === 0){
  clearInterval(countDown3);
  const display3 = document.querySelector("#prompt3");
  display3.innerText = "Time's up! You lose!";
  superHero.style.top = "670px";
  superHero.style.transform = "rotate(70deg)";
  cat.style.transform = "rotate(300deg)";
  cat.style.left = "350px";
  cat.style.top = "230px";
  document.querySelector("#ans3").disabled = true;
  }
  document.querySelector("#timer3").innerHTML = time3
  time3 -= 1;
}, 1000);

// Enter key 

let correctAns3 = [];
const input3 = document.querySelector("#ans3");
const display3 = document.querySelector("#prompt3");
input3.addEventListener("keypress", function(event3) {
  if (event3.key === "Enter") {
  event3.preventDefault();
  if (input3.value == resultHard) {
        calculate();
        display3.innerText = "Correct";
        correctAns3.push('1');
        moveUp();
  }
  else {
        calculate();
        display3.innerText = "Wrong";
        correctAns3.pop();
        moveDown();
    }
    input3.value = "";
  if (correctAns3.length == 10) {
     superHero.style.left = "450px"
  }
  else if (correctAns3.length == 11) {
  display3.innerText = "You win!";
  clearInterval(countDown3);
  document.querySelector("#ans3").disabled = true;
  superHero.style.top = "350px";
  superHero.style.left = "580px";
  cat.style.display = "none";
  happyCat.style.display = "block";
  }
  }});
  calculate();
  moveUp();
  moveDown();
 
});
