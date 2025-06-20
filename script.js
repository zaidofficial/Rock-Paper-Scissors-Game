let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let resetGame = document.querySelector("#reset");
//generate user choice
choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
//generate comp choice
const genCompChice = () => {
    const option = ["rock","scissors","paper"];
    const optionIdx = Math.floor(Math.random()*3);
    return option[optionIdx];
}
//draw game
const gameDraw = () => {
    msg.innerText = "Game was draw // paly again";
}
//show winner
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin === true){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you are Win! your ${userChoice} beat the ${compChoice}`;

    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you are lose comp's ${compChoice} beat your ${userChoice}`;
    }
}

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    const compChoice = genCompChice();
    if(userChoice === compChoice){
        //draw game
        gameDraw();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors,paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            // scissors,rock
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // paper,rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
const rGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText =  0;
    compScorePara.innerText =  0;
    msg.innerText = "let's start";
    playGame(userChoice);
}
resetGame.addEventListener("click",rGame);