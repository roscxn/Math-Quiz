const num1 = Math.floor(Math.random() * 10);
document.querySelector('#num1').innerText = num1;

const num2 = Math.floor(Math.random() * 10);
document.querySelector('#num2').innerText = num2;

let operators = ["+", "-", "x"];
const randomOperator = operators[Math.floor(Math.random() * operators.length)];
document.querySelector('#operator').innerText = randomOperator;



// Hide main page -> get into game play
const buttonEasy = document.querySelector('#easy');

buttonEasy.addEventListener('click', function(){
    document.querySelector('.mainPage').style.display = "none";
    document.querySelector('.easyPage').style.display = "block";
    
});
var interval;




const buttonGo = document.querySelector('#go');

buttonGo.addEventListener('click', function() {
    const input = document.getElementById('ans');
    const display = document.querySelector('#prompt');
  
    if (input.value === 'calculation') {
        display.innerText = "Correct";
    }
    else {
        display.innerText = "Wrong";
    }
    
});
