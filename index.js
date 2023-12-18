const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtn.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Người chơi: ${player}`;
    computerText.textContent = `Máy: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){
    const randomNum = Math.floor(Math.random() * 3) + 1;

    switch(randomNum){
        case 1:
            computer = "Kéo";
            break;
        case 2:
            computer = "Búa";
            break;
        case 3:
            computer = "Bao";
            break;
    }
}

function checkWinner(){
    if(player == computer)
    {
        return "Hòa";
    }
    else if(computer == "Kéo")
    {
        return (player == "Búa") ? "Bạn đã thắng !!!" : "Bạn đã thua !!!";
    }
    else if(computer == "Búa")
    {
        return (player == "Bao") ? "Bạn đã thắng !!!" : "Bạn đã thua !!!";
    }
    else if(computer == "Bao")
    {
        return (player == "Kéo") ? "Bạn đã thắng !!!" : "Bạn đã thua !!!";
    }
    
}