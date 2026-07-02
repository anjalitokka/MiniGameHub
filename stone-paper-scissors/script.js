const playBtn = document.querySelector("#play");
const resetBtn = document.querySelector("#reset");

const imageContainer = document.querySelector(".image-container");
const choicesContainer = document.querySelector(".choices");
const scoreBoard = document.querySelector(".score-board");
const msgContainer = document.querySelector(".msg-container");

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const moveContainer = document.querySelector(".move-container");
const userMoveImg = document.querySelector("#user-move");
const compMoveImg = document.querySelector("#comp-move");

let userScore = 0;
let compScore = 0;

const images = {
    rock: "https://www.pngitem.com/pimgs/m/226-2260873_transparent-rock-paper-scissors-png-png-download.png",
    paper: "https://www.pngitem.com/pimgs/m/266-2667795_rock-paper-scissors-png-transparent-png.png",
    scissors: "https://media.geeksforgeeks.org/wp-content/uploads/20210705223721/scissor.jpeg"
};

// Start Game
playBtn.addEventListener("click", () => {

    imageContainer.classList.add("hide");

    document.querySelector(".game-title").classList.remove("hide");

    choicesContainer.classList.remove("hide");

    scoreBoard.classList.remove("hide");

    moveContainer.classList.remove("hide");

    document.querySelector(".reset-container").classList.remove("hide");

    msg.innerText = "Choose your move!";
});

// Draw
const drawGame = () => {

    msg.innerText = "🤝 It's a Draw!";

    msg.style.background = "#ffffff";

    msg.style.color = "#000";

    animateMessage();

};

// Winner
const showWinner = (userWin, userChoice, compChoice) => {

    if (userWin) {

        userScore++;

        userScorePara.innerText = userScore;

        msg.innerText = `🎉 You Win!\n${capitalize(userChoice)} beats ${capitalize(compChoice)}`;

        msg.style.background = "#16a34a";

        msg.style.color = "#fff";

    }

    else {

        compScore++;

        compScorePara.innerText = compScore;

        msg.innerText = `😢 You Lose!\n${capitalize(compChoice)} beats ${capitalize(userChoice)}`;

        msg.style.background = "#dc2626";

        msg.style.color = "#fff";

    }

    animateMessage();

};

// Animation
function animateMessage() {

    msg.style.transform = "scale(1.08)";

    setTimeout(() => {

        msg.style.transform = "scale(1)";

    }, 200);

}

// Computer Choice
const genCompChoice = () => {

    const options = ["rock", "paper", "scissors"];

    return options[Math.floor(Math.random() * 3)];

};

// Play
const playGame = (userChoice) => {

    const compChoice = genCompChoice();

    moveContainer.classList.remove("hide");

    userMoveImg.src = images[userChoice];

    compMoveImg.src = images[compChoice];

    if (userChoice === compChoice) {

        drawGame();

        return;

    }

    const winMap = {

        rock: "scissors",

        paper: "rock",

        scissors: "paper"

    };

    const userWin = winMap[userChoice] === compChoice;

    showWinner(userWin, userChoice, compChoice);

};

// Click Events
choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        playGame(choice.id);

    });

});

// Reset
resetBtn.addEventListener("click", () => {

    userScore = 0;

    compScore = 0;

    userScorePara.innerText = "0";

    compScorePara.innerText = "0";

    userMoveImg.src = "";

    compMoveImg.src = "";

    moveContainer.classList.add("hide");

    msg.innerText = "Play your move!";

    msg.style.background = "#fff4d6";

    msg.style.color = "#7a003c";

});

// Capitalize
function capitalize(word) {

    return word.charAt(0).toUpperCase() + word.slice(1);

}

// Home
function goHome() {

    window.location.href = "../index.html";

}
