// --- Hide main page -> get into game play
const buttonEasy = document.querySelector("#easy");
buttonEasy.addEventListener("click", function(){
    document.querySelector(".mainPage").style.display = "none";
    document.querySelector(".easyPage").style.display = "block";
});

const buttonInt = document.querySelector("#int");
buttonInt.addEventListener("click", function(){
    document.querySelector(".mainPage").style.display = "none";
    document.querySelector(".intPage").style.display = "block";
});

const buttonHard = document.querySelector("#hard");
buttonHard.addEventListener("click", function(){
    document.querySelector(".mainPage").style.display = "none";
    document.querySelector(".hardPage").style.display = "block";
});


// ****** -------------- Easy level page---

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
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
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


// ****** ------------- Int level page---

// Restart button

document.querySelector('#restart2').addEventListener("click", function() {
    location.reload();
});


// Timer -> https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
let time2 = 20; 
let countDown2 = setInterval(function(){
    if(time2 === 0){
    clearInterval(countDown2);
    const display = document.querySelector("#prompt2");
    display.innerText = "Time's up! You lose!";
    document.querySelector("#ans2").disabled = true;
  }
  document.querySelector("#timer2").innerHTML = time2;
  time2 -= 1;
}, 1000);


// Question & Answer input

let resultInt;

function calculate2() {
  const num3 = Math.floor(Math.random() * 100);
  const num4 = Math.floor(Math.random() * 10);
  document.querySelector("#num3").innerText = num3;
  document.querySelector("#num4").innerText = num4;
  document.querySelector("#opInt").innerText = "x";
  resultInt = num3 * num4;
}

// Press "enter" using keyboard -> https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp


const input2 = document.querySelector("#ans2");
const display2 = document.querySelector("#prompt2");
input2.addEventListener("keypress", function(event2) {
  if (event2.key === "Enter") {
  event2.preventDefault();
  if (input2.value == resultInt) {
        calculate2();
        display2.innerText = "Correct";
      }
  else {
        calculate2();
        display2.innerText = "Wrong";
    }
    input2.value = "";
  }});

  calculate2();


  // ****** ------------- Hard level page------

// // Restart button

// document.querySelector('#restart3').addEventListener("click", function() {
//     location.reload();
// });


// // Timer 
// let time3 = 20; 
// let countDown3 = setInterval(function(){
//     if(time3 === 0){
//     clearInterval(countDown3);
//     const display3 = document.querySelector("#prompt3");
//     display3.innerText = "Time's up! You lose!";
//     document.querySelector("#ans3").disabled = true;
//   }
//   document.querySelector("#timer3").innerHTML = time3;
//   time3 -= 1;
// }, 1000);


// // Question & Answer input

// let resultHard;

// function calculate3() {
//   const num5 = Math.floor(Math.random() * 100);
//   const num6 = Math.floor(Math.random() * 10);
//   document.querySelector("#num5").innerText = num5;
//   document.querySelector("#num6").innerText = num6;
//   document.querySelector("#opHard").innerText = "x";
//   resultHard = num5 * num6;
// }

// // Press "enter" using keyboard -> https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp


// const input3 = document.querySelector("#ans3");
// const display3 = document.querySelector("#prompt3");
// input3.addEventListener("keypress", function(event3) {
//   if (event3.key === "Enter") {
//   event3.preventDefault();
//   if (input3.value == resultHard) {
//         calculate3();
//         display3.innerText = "Correct";
//       }
//   else {
//         calculate3();
//         display3.innerText = "Wrong";
//     }
//     input3.value = "";
//   }});

//   calculate3();