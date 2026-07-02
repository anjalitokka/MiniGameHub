let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnMsg = document.querySelector("#turn-msg");
let count = 0;
let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = ()=>{

    turnO = true;
    count = 0;
    enableBtns();
    msgContainer.classList.add("hide");
    turnMsg.innerText = "Player O Turn";
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            box.style.color = "#ff006e";
            turnO = false;
        }

        else{
            box.innerText = "X";
            box.style.color = "#3a86ff";
            turnO = true;
        }

        box.disabled = true;
        count++;
        turnMsg.innerText =
        turnO ? "Player O Turn" : "Player X Turn";

        let isWinner = checkWinner();

        if(count === 9 && !isWinner){
            msg.innerText = "Match Draw";
            msgContainer.classList.remove("hide");
            disableBtns();
        }
    });
});

const disableBtns = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBtns = ()=>{

    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "white";
        box.style.color = "";
    }
};

const showWinner = (winner)=>{
    msg.innerText = `Congratulations ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();
};

const checkWinner = ()=>{

    for(let pattern of winPatterns){

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){

            if(pos1val === pos2val &&pos2val === pos3val){

                boxes[pattern[0]].style.backgroundColor = "#90ee90";
                boxes[pattern[1]].style.backgroundColor = "#90ee90";
                boxes[pattern[2]].style.backgroundColor = "#90ee90";

                showWinner(pos1val);
                return true;
            }
        }
    }
    return false;
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

function goHome() {
    window.location.href = "../index.html";
}