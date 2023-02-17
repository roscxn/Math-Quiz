// --- Hide main page -> get into game play
const buttonEasy = document.querySelector("#easy");

buttonEasy.addEventListener("click", function(){
    document.querySelector(".mainPage").style.display = "none";
    document.querySelector(".easyPage").style.display = "block";
});

// ---- Easy level page---

// Restart button

document.querySelector('#restart').addEventListener("click", function() {
    location.reload();
});

// Timer -> Ref: https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
let time = 5; 
let countDown = setInterval(function(){
    if(time === 0){
    clearInterval(countDown);
    const display = document.querySelector("#prompt");
    display.innerText = "Time's up!";
    document.querySelector("#ans").disabled = true;
    buttonGo.disabled = true;
  }
  document.querySelector("#timer").innerHTML = time
  time -= 1;
}, 1000);



// Question & Answer input

const num1 = Math.floor(Math.random() * 10);
document.querySelector("#num1").innerText = num1;

const num2 = Math.floor(Math.random() * 10);
document.querySelector("#num2").innerText = num2;

let operators = ["+", "-", "x"];
const randomOperator = operators[Math.floor(Math.random() * operators.length)];
document.querySelector("#operator").innerText = randomOperator;

const buttonGo = document.querySelector("#go");

buttonGo.addEventListener("click", function() {
    const input = document.querySelector("#ans");
    const display = document.querySelector("#prompt");
  
    if (input.value === "calculation") {
        display.innerText = "Correct";
    }
    else {
        display.innerText = "Wrong";
    }

});
