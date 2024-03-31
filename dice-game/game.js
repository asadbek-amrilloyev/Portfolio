let diceImg = document.querySelector('.dice');
let reset = document.querySelector('.btn--new');
let roll = document.querySelector('.btn--roll');
let hold = document.querySelector('.btn--hold');

console.log(window)

const name1 = prompt('First player name: ');
const name2 = prompt('Second player name: ');

let player1 = document.getElementById('name--0');
let player2 = document.getElementById('name--1');

player1.textContent = name1;
player2.textContent = name2;

diceImg.style.display='none';
var currentScore = 0;
let activePlayer = 0;
let score = [0, 0];
let gameOver = true;

const switchPlayer =() => {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
}

roll.addEventListener("click", function(){
    if(gameOver){
        diceImg.style.display = 'block';
        const random = Math.floor(Math.random()* 6 + 1)
        diceImg.src = `./dice-${random}.png`;

        if(random != 1) {
            currentScore += random;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }else{
            switchPlayer();
        }
    }
});

hold.addEventListener("click", function(){
    if(gameOver){
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        if(score[activePlayer] >=100){
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            gameOver = false;
        }else{
            switchPlayer();
        }
    }
});

reset.addEventListener('click', function(){
    currentScore = 0;
    activePlayer = 0;
    score = [0, 0];
    gameOver = true;
    document.getElementById(`current--0`).textContent = currentScore;
    document.getElementById(`current--1`).textContent = currentScore;
    document.getElementById(`score--0`).textContent = currentScore;
    document.getElementById(`score--1`).textContent = currentScore;
    document.querySelector('.player--0').classList.remove('player--winner')
    document.querySelector('.player--1').classList.remove('player--winner')
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active')
});








