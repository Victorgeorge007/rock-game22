const rock=document.querySelector("#rock-button-element")
const paper=document.querySelector("#paper-button-element")
const scissors=document.querySelector("#scissors-button-element")

const resultPara =document.querySelector("#results")
const scorePara =document.querySelector("#score")

const displayPara = document.querySelector(("#display"))

const buttonReset= document.querySelector("#reset-button")
let result ='';
let score ={
    win: 0,
    tie: 0,
    losses: 0
};
// window.addEventListener("load", function(){
//     time=JSON.parse(localStorage.getItem("score"))
//     score=time

//     scorePara.innerHTML =`Wins:${score.win}, Draws: ${score.tie}, Losses:${score.losses}`
// })

rock.addEventListener("click", function(){
    playGame("rock")
    console.log("rock")
    console.log(score)
    console.log(result)
    rock.classList.toggle("fa-beat")
    paper.classList.remove("fa-beat")
    scissors.classList.remove("fa-beat")
}) 
paper.addEventListener("click", function(){
    playGame("paper")
    console.log("paper")
    paper.classList.toggle("fa-beat")
    scissors.classList.remove("fa-beat")
    rock.classList.remove("fa-beat")
}) 
scissors.addEventListener("click", function(){
    playGame("scissors")
    console.log("scissors")
    scissors.classList.toggle("fa-beat")
    rock.classList.remove("fa-beat")
    paper.classList.remove("fa-beat")
}) 


const computerMove =() =>{
    let computerChoice='';
    const decider =Math.random();
    if(decider<0.3 && decider>0) {
        computerChoice="rock"
    }
    if(decider>0.3 && decider<0.6) {
        computerChoice="paper"
    }
    if(decider>0.6 && decider<1) {
        computerChoice="scissors"
    }
    return computerChoice
}

function playGame(playermove){
    const computerChoice = computerMove();

    if(playermove=="rock") {
    if(computerChoice =="rock"){
        result = "Tie"
        score.tie +=1
    }
    if(computerChoice== "paper"){
        result= "You lose"
        score.losses+=1
    }
    if(computerChoice== "scissors"){
        result= "You Win"
        score.win +=1
    }
}

if(playermove=="paper") {
    if(computerChoice =="paper"){
        result = "Tie"
        score.tie+=1
    }
    if(computerChoice== "scissors"){
        result= "You lose"
        score.losses++
    }
    if(computerChoice== "rock"){
        result= "You Win"
        score.win ++
    }
}


if(playermove=="scissors") {
    if(computerChoice =="scissors"){
        result = "Tie"
        score.tie ++
    }
    if(computerChoice== "rock"){
        result= "You lose"
        score.losses++
    }
    if(computerChoice== "paper"){
        result= "You Win"
        score.win ++
    }
}
displayPara.innerHTML =`You: ${playermove}- Computer: ${computerChoice}`
resultPara.innerHTML = result
scorePara.innerHTML =`Wins:${score.win}, Draws: ${score.tie}, Losses:${score.losses}`
// localStorage.setItem("score", JSON.stringify(score))
}
buttonReset.addEventListener("click", function() {
    score.win=0
    score.tie=0
    score.losses=0
    displayPara.innerHTML =``;
    scorePara.innerHTML =`Wins:${score.win}, Draws: ${score.tie}, Losses:${score.losses}`
    resultPara.innerHTML = "";
    // localStorage.setItem("score", JSON.stringify(score))
})

console.log(score)

