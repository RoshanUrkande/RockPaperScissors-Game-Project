
let Player1 = document.getElementById("player1")
let Player2 = document.getElementById("player2")

let hands = ["rock", "paper", "scissor"]
function getHand1(){
    let randomIndex = Math.floor(Math.random() * 3)

    Player1.innerHTML = hands[randomIndex]
}

function getHand2(){
    let randomIndex = Math.floor(Math.random() * 3)

    Player2.innerHTML = hands[randomIndex]
}


