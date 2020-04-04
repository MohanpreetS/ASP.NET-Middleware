const btn1 = document.querySelector('#p1Btn');
const btn2 = document.querySelector('#p2Btn');
const resetBtn = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');

p1Score = 0;
p2Score = 0;

let isGameOver = false;
let winningScore = 3;

// function changeScore(player, opponent) {
//     if 
// }

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    btn1.disabled = false;
    btn2.disabled = false;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
}




