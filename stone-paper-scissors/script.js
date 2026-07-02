const playbtn=document.querySelector("#play");
const resetBtn=document.querySelector("#reset");

const imageContainer=document.querySelector(".image-container");
const choicesContainer=document.querySelector(".choices");
const scoreBoard=document.querySelector(".score-board");
const msgContainer=document.querySelector(".msg-container");

const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const moveContainer=document.querySelector(".move-container");
const userMoveImg=document.querySelector("#user-move");
const compMoveImg=document.querySelector("#comp-move");

let userScore=0;
let compScore=0;
const images={
    rock:"https://www.pngitem.com/pimgs/m/226-2260873_transparent-rock-paper-scissors-png-png-download.png",
    paper:"https://www.pngitem.com/pimgs/m/266-2667795_rock-paper-scissors-png-transparent-png.png",
    scissors:"https://media.geeksforgeeks.org/wp-content/uploads/20210705223721/scissor.jpeg"
};

playbtn.addEventListener("click",()=>{
    imageContainer.classList.add("hide");
    document.querySelector(".game-title").classList.remove("hide");
    choicesContainer.classList.remove("hide");
    scoreBoard.classList.remove("hide");
    msgContainer.classList.remove("hide");
    document.querySelector(".reset-container").classList.remove("hide");
});

const drawGame=()=>{

    msg.innerText="Game was Draw!";
    msg.style.backgroundColor="white";
    msg.style.color="black";

    msg.style.transform="scale(1.1)";

    setTimeout(()=>{
        msg.style.transform="scale(1)";
    },200);
};

const showWinner=(userWin,userChoice,compChoice)=>{

    if(userWin){

        userScore++;
        userScorePara.innerText=userScore;

        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
    }
    else{

        compScore++;
        compScorePara.innerText=compScore;

        msg.innerText=`You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }

    msg.style.transform="scale(1.1)";

    setTimeout(()=>{
        msg.style.transform="scale(1)";
    },200);
};

const genCompChoice=()=>{

    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);

    return options[randIdx];
};

const playGame=(userChoice)=>{

    const compChoice=genCompChoice();
    moveContainer.classList.remove("hide");
    userMoveImg.src=images[userChoice];
    compMoveImg.src=images[compChoice];

    if(userChoice===compChoice){

        drawGame();
    }
    else{

        const winMap={
            rock:"scissors",
            paper:"rock",
            scissors:"paper"
        };

        let userWin=winMap[userChoice]===compChoice;

        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{

        const userChoice=choice.getAttribute("id").toLowerCase();

        playGame(userChoice);
    });
});

resetBtn.addEventListener("click",()=>{

    userScore=0;
    compScore=0;

    userScorePara.innerText=0;
    compScorePara.innerText=0;

    msg.innerText="Play your move!";
    msg.style.backgroundColor="blanchedalmond";
    msg.style.color="rgb(160,18,42)";

    document.querySelector(".move-container").classList.add("hide");

    userMoveImg.src="";
    compMoveImg.src="";
});

function goHome() {
    window.location.href = "../index.html";
}