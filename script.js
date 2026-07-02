function openTicTacToe() {

    document.body.style.opacity = "0";
    setTimeout(() => {
        window.location.href = "tic-tac-toe/index.html";
    }, 500);

}

function openSPS() {
    document.body.style.opacity = "0";
    setTimeout(() => {
        window.location.href = "stone-paper-scissors/index.html";
    }, 500);
}

function showAbout() {

    document.getElementById("popup").style.display = "flex";

}

function closePopup() {

    document.getElementById("popup").style.display = "none";

}