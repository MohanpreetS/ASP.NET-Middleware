const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}


// const btn1 = document.querySelector('#p1Btn');
// const btn2 = document.querySelector('#p2Btn');
// const resetBtn = document.querySelector('#reset');
// const p1Display = document.querySelector('#p1Display');
// const p2Display = document.querySelector('#p2Display');
// const winningScoreSelect = document.querySelector('#playto');

// p1Score = 0;
// p2Score = 0;

// let isGameOver = false;
// let winningScore = 3;

// // function changeScore(player, opponent) {
// //     if 
// // }

// winningScoreSelect.addEventListener('change', function () {
//     winningScore = parseInt(this.value);
//     reset();
// })


// btn1.addEventListener('click', function () {
//     if (!isGameOver) {
//         p1Score++;
//         p1Display.textContent = p1Score;
//         if (winningScore === p1Score) {
//             isGameOver = true;
//             btn1.disabled = true;
//             btn2.disabled = true;
//             p1Display.classList.add('has-text-success');
//             p2Display.classList.add('has-text-danger');
//         }
//     }
// })

// btn2.addEventListener('click', function () {
//     if (!isGameOver) {
//         p2Score++;
//         p2Display.textContent = p2Score;
//         if (winningScore === p2Score) {
//             isGameOver = true;
//             btn1.disabled = true;
//             btn2.disabled = true;
//             p2Display.classList.add('has-text-success');
//             p1Display.classList.add('has-text-danger');
//         }
//     }
// })

// resetBtn.addEventListener('click', reset);


