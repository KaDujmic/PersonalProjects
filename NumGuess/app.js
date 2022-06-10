
//Game values

let min = 1,
    max = 10,
    winningNum = getRandomNumber(min, max),
    guessesLeft = 3;



//UI elements

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');


// Assing UI min and max

minNum.textContent = min;
maxNum.textContent = max;

//play again event listener

game.addEventListener('mousedown', function(e){
  console.log(1)
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});




// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max ){
    setMessage(`Please enter a number between ${min} and ${max}...`, 'red')
  }


  //Check if won
  if (guess === winningNum){
    gameOver(true, `You have guessed correct the number is ${winningNum} :)`)
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0){
      gameOver(false, `Game Over ... the winning number was ${winningNum} :(`)
    } else {
      guessInput.value = ''
      guessInput.style.borderColor = 'red';
      setMessage(`Wrong!!! Guesses left ${guessesLeft} !! :(`, 'red');
    }
  }
});


function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  guessInput.disabled = true; // Ugasi imput
  guessInput.style.borderColor = color //postavi boju bordera
  message.style.color = color;
  setMessage(msg, color) // Postavi msg

  //Game over
  guessBtn.value = 'Play again';
  guessBtn.className += 'play-again'
}


function setMessage(msg, color){
  message.style.color = color
  message.textContent = msg;
};


function getRandomNumber(min, max){
  return Math.floor(Math.random()*(max-min+1)+min)
}
