//* --- Hide main page -> get into game play
const restartGame = document.querySelector('#restart');
restartGame.addEventListener("click", function() {
  location.reload();
});

const buttonEasy = document.querySelector("#easy");
buttonEasy.addEventListener("click", function(){
  document.querySelector(".mainPage").style.display = "none";
  document.querySelector(".easyPage").style.display = "block";
  restartGame.style.display = "block";
  
});

const buttonInt = document.querySelector("#int");
buttonInt.addEventListener("click", function(){
  document.querySelector(".mainPage").style.display = "none";
  document.querySelector(".intPage").style.display = "block";
  restartGame.style.display = "block";
  countDown;
});

const buttonHard = document.querySelector("#hard");
buttonHard.addEventListener("click", function(){
  document.querySelector(".mainPage").style.display = "none";
  document.querySelector(".hardPage").style.display = "block";
  restartGame.style.display = "block";
});


// Question & Answer input
let resultEasy;
let resultInt;
let resultHard;
function calculate() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 100);
  const num3 = Math.floor(Math.random() * 100);
  document.querySelector("#num1").innerText = num1;
  document.querySelector("#num2").innerText = num2;
  document.querySelector("#num3").innerText = num2;
  document.querySelector("#num4").innerText = num3;
  document.querySelector("#num5").innerText = num1;
  document.querySelector("#num6").innerText = num2;
  document.querySelector("#opEasy").innerText = "+";
  document.querySelector("#opInt").innerText = "+";
  document.querySelector("#opHard").innerText = "x";
  resultEasy = num1 + num2;
  resultInt = num2 + num3;
  resultHard = num1 * num2;
}

// **------- Easy level ------- 

// Easy - Timer -> https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
let time = 20; 
let countDown = setInterval(function(){
    if(time === 0){
    clearInterval(countDown);
    const display = document.querySelector("#prompt");
    display.innerText = "Time's up! You lose!";
    document.querySelector("#ans").disabled = true;
  }
  document.querySelector("#timer").innerHTML = time
  time -= 1;
}, 1000);

// Easy - Press "enter" using keyboard -> https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
const input = document.querySelector("#ans");
const display = document.querySelector("#prompt");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
  event.preventDefault();
  if (input.value == resultEasy) {
        calculate();
        display.innerText = "Correct";
      }
  else {
        calculate();
        display.innerText = "Wrong";
    }
    input.value = "";
  }});
  calculate();


// **------- Intermediate level ------- 

// Int - Timer 
let time2 = 20; 
let countDown2 = setInterval(function(){
    if(time2 === 0){
    clearInterval(countDown2);
    const display2 = document.querySelector("#prompt2");
    display2.innerText = "Time's up! You lose!";
    document.querySelector("#ans2").disabled = true;
  }
  document.querySelector("#timer2").innerHTML = time2;
  time2 -= 1;
}, 1000);

// Int - Enter Key
const input2 = document.querySelector("#ans2");
const display2 = document.querySelector("#prompt2");
input2.addEventListener("keypress", function(event2) {
  if (event2.key === "Enter") {
  event2.preventDefault();
  if (input2.value == resultInt) {
        calculate();
        display2.innerText = "Correct";
      }
  else {
        calculate();
        display2.innerText = "Wrong";
    }
    input2.value = "";
  }});
  calculate();


// **------- Hard level ------- 

// Hard - Timer
let time3 = 20; 
let countDown3 = setInterval(function(){
    if(time3 === 0){
    clearInterval(countDown3);
    const display3 = document.querySelector("#prompt3");
    display3.innerText = "Time's up! You lose!";
    document.querySelector("#ans3").disabled = true;
  }
  document.querySelector("#timer3").innerHTML = time3;
  time3 -= 1;
}, 1000);

// Hard - Enter Key
const input3 = document.querySelector("#ans3");
const display3 = document.querySelector("#prompt3");
input3.addEventListener("keypress", function(event3) {
  if (event3.key === "Enter") {
  event3.preventDefault();
  if (input3.value == resultHard) {
        calculate();
        display3.innerText = "Correct";
      }
  else {
        calculate();
        display3.innerText = "Wrong";
    }
    input3.value = "";
  }});
  calculate();