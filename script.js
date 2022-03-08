console.log("Rock-Paper-Scissors");

//Variables- Caching the DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard")
const result_p = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//MAIN - user will click one of three icons, based on that a paramater is passed to 'game function' and it is called.
function main() {
    //before doing anything, we need to remember last-time score
    remember();

    rock_div.addEventListener('click', () => {
        game("r");
    })
    paper_div.addEventListener('click', () => {
        game("p");
    })
    scissors_div.addEventListener('click', () => {
        game("s");
    })

}

//game function - Takes the parameter from 'main function' which it now calls'userChoice'; It then calls 'getComputerChoice()' for 'computerChoice'; its job now is to decide result, based on that it will one of the three functions- namely win(), lose(), draw()

function game(userChoice){
    const computerChoice=getComputerChoice();

    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }



}

//getComputerChoice()- That was called above to get computerChoice
function getComputerChoice(){
    const chocies=["r", "p", "s"];
    const randomNumber= Math.floor(Math.random()*3);
    return chocies[randomNumber];
}

//Win function- will increment userScore and will display result with the help of 'convertToWord function'
function win(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    localStorage.setItem("userScore", userScore);
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Win!😃`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 400);
}

//Lose function- will increment computerScore and will display result with the help of 'convertToWord function'
function lose(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    localStorage.setItem("computerScore", computerScore);
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Lose!💩`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 400);
}

//Draw function
function draw(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`Game is draw⚖️`;
    userChoice_div.classList.add("yellow-glow");
    setTimeout(() => userChoice_div.classList.remove("yellow-glow"), 500);
}

//convertToWord() - will take a letter and return a word
function convertToWord(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    return "Scissors";
}

// remember function
function remember(){
    if(!localStorage.getItem("userScore")) localStorage.setItem("userScore", "0");
    if(!localStorage.getItem("computerScore")) localStorage.setItem("computerScore", "0");

    let userLastScore=parseInt(localStorage.getItem("userScore"));
    let compLastScore=parseInt(localStorage.getItem("computerScore"));

    userScore=userLastScore;
    computerScore=compLastScore;
    
    document.getElementById("user-score").innerHTML=userScore;
    document.getElementById("computer-score").innerHTML=computerScore;
}

//Calling "Main function" - the action begins
main();