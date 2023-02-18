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

// Timer -> https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
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


// Question & Answer input

let resultEasy;

function calculate() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  document.querySelector("#num1").innerText = num1;
  document.querySelector("#num2").innerText = num2;
  document.querySelector("#opEasy").innerText = "+";
  resultEasy = num1 + num2;
}

// Press "enter" using keyboard -> https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp


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




