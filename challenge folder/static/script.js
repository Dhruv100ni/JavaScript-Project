// Challenge 1 : Your age in days
function ageInDays() {
    var birthYear = prompt("what year were you born... Good friend? ");
    var ageInDayss = (2021 - birthYear) * 365;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("You are " + ageInDayss + " day");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
    document.getElementById("appInDays").remove();
}

// Challenge 2: Cat generator
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif";
    div.appendChild(image);
}

// Challenge 3: Rock paper scissor
function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log("Computer choice ", botChoice);
    results = decideWinner(humanChoice, botChoice); // [0,1] human loss bot won 
    console.log(results);
    massage = finalMassage(results); // {'massage' : 'You won'. 'color' : 'green'}
    console.log(massage);
    rpsFrontEnd(yourChoice.id, botChoice, massage);

}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ["rock", "paper", "scissor"][number];

}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        "rock": {
            "scissor": 1,
            "rock": 0.5,
            "paper": 0
        },
        "paper": {
            "scissor": 0,
            "rock": 1,
            "paper": 0.5
        },
        "scissor": {
            "scissor": 0.5,
            "rock": 0,
            "paper": 1
        }
    }
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMassage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'massage': 'You lost!', 'color': 'red' };
    }
    else if (yourScore === 0.5) {
        return { 'massage': 'You tied!', 'color': 'yellow' };
    }
    else {
        return { 'massage': 'You won!', 'color': 'green' };
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMassage) {
    var imageDatabase = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissor": document.getElementById("scissor").src
    }

    // Lets remove all the images 
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissor").remove();

    var humanDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var massageDiv = document.createElement("div");

    humanDiv.innerHTML = "<img src = '" + imageDatabase[humanImageChoice] + "'height = 150, width = 150 style = 'box-shadow : 0px 10px 50px blue'>";
    massageDiv.innerHTML = "<h1 style = 'color : " + finalMassage['color'] + "; font-size: 60px ; padding : 30px; '>" + finalMassage['massage'] + "</h1>";
    botDiv.innerHTML = "<img src = '" + imageDatabase[botImageChoice] + "'height = 150, width = 150 style = 'box-shadow : 0px 10px 50px red'>";

    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(massageDiv);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);

}

// Challenge 4: Change the color of all buttons
var all_butttons = document.getElementsByTagName('button');
console.log(all_butttons);

var copyAllbuttons = [];
for (let i = 0; i < all_butttons.length; i++) {
    copyAllbuttons.push(all_butttons[i]);
}

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === "red") {
        buttonRed();
    }
    else if (buttonThingy.value === "green") {
        buttonGreen();
    }
    else if (buttonThingy.value === "reset") {
        buttonColorReset();
    }
    else if (buttonThingy.value === "random") {
        randomColors();
    }
}

function buttonRed() {
    for (let i = 0; i < all_butttons.length; i++) {
        all_butttons[i].classList.remove(all_butttons[i].classList[1]);
        all_butttons[i].classList.add('btn-danger');
    }
}
function buttonGreen() {
    for (let i = 0; i < all_butttons.length; i++) {
        all_butttons[i].classList.remove(all_butttons[i].classList[1]);
        all_butttons[i].classList.add('btn-success');
    }
}
function buttonColorReset() {
    for (let i = 0; i < all_butttons.length; i++) {
        all_butttons[i].classList.remove(all_butttons[i].classList[1]);
        all_butttons[i].classList.add(copyAllbuttons[i]);
    }
}
function randomColors() {
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for (let i = 0; i < all_butttons.length; i++) {
        var randomNumber = Math.floor(Math.random() * 4);
        all_butttons[i].classList.remove(all_butttons[i].classList[1]);
        all_butttons[i].classList.add(choices[randomNumber]);
    }
}

// Challenge 5: Blackjack

let blackjackGame = {
    "you": {
        "scoreSpan": "#your-blackjack-result",
        "div": "#your-box",
        "score": 0
    },
    "dealer": {
        "scoreSpan": "#dealer-blackjack-result",
        "div": "#dealer-box",
        "score": 0
    },
    "cards": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "J", "Q", "A"],
    "cardsMap": { "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "K": 10, "Q": 10, "J": 10, "A": (1, 11) },
    "wins": 0,
    "losses": 0,
    "draws": 0,
    "inStand": false,
    "turnsOver": false,
};

const YOU = blackjackGame["you"]
const DEALER = blackjackGame["dealer"]

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);


function blackjackHit() {
    if (blackjackGame["inStand"] === false) {
        let card = randomCard();
        console.log(card);
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
        console.log(YOU["score"]);
    }

}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame["cards"][randomIndex];
}

function showCard(card, activePlayer) {
    if (activePlayer["score"] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `static/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }

}

function blackjackDeal() {
    if (blackjackGame["turnsOver"] === true) {
        blackjackGame["inStand"] = false;
        //    let winner = computeWinner();
        // showResult(winner);
        // showResult(computeWinner());
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');


        for (i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }

        for (i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }

        YOU["score"] = 0;
        DEALER["score"] = 0;

        document.querySelector("#your-blackjack-result").textContent = 0;
        document.querySelector("#dealer-blackjack-result").textContent = 0;

        document.querySelector("#your-blackjack-result").style.color = "white";
        document.querySelector("#dealer-blackjack-result").style.color = "white";

        document.querySelector("#blackjack-result").textContent = "Let's Play";
        document.querySelector("#blackjack-result").style.color = "black";

        blackjackGame["turnsOver"] = true;

    }

}

function updateScore(card, activePlayer) {
    // if (card === "A"){
    //     // If adding 11 keeps me below 21, add 11, Otherwise, add 1.
    //     if (activePlayer["score"] + blackjackGame["cardsMap"][card][1] <= 21){
    //         activePlayer["score"] += blackjackGame["cardsMap"][card][1];
    //     } else {
    //         activePlayer["score"] += blackjackGame["cardsMap"][card][0];
    //     } 
    // } else{

    // }
    activePlayer["score"] += blackjackGame["cardsMap"][card];
}

function showScore(activePlayer) {
    if (activePlayer["score"] > 21) {
        document.querySelector(activePlayer["scoreSpan"]).textContent = "BUST!";
        document.querySelector(activePlayer["scoreSpan"]).style.color = "red";

    } else {
        document.querySelector(activePlayer["scoreSpan"]).textContent = activePlayer["score"];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
    blackjackGame["inStand"] = true;

    while (DEALER["score"] < 16 && blackjackGame["inStand"] === true){
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        // showResult();
        await sleep(1000);
    }

        blackjackGame["turnsOver"] = true;
        let winner = computeWinner();
        showResult(winner);   

}

// Compute winner and return winner who just won
// update the wins, draws and losses
function computeWinner() {
    let winner;

    if (YOU["score"] <= 21) {
        // Condition : higher score than dealer or when dealer busts but you're not
        if (YOU["score"] > DEALER["score"] || (DEALER["score"] > 21)) {
            blackjackGame["wins"]++;
            console.log("You won!");
            winner = YOU;
        }
        else if (YOU["score"] < DEALER["score"]) {
            blackjackGame["losses"]++;
            console.log("You lost!");
            winner = DEALER;
        }
        else if (YOU["score"] === DEALER["score"]) {
            blackjackGame["draws"]++;
            console.log("You drew!");
        }
    }
    // Condition : When user busts but dealer doesn't
    else if (YOU["score"] > 21 && DEALER["score"] <= 21) {
        blackjackGame["losses"]++;
        console.log("You lost!")
        winner = DEALER;
    }
    // Condition: When you AND the ddealer busts
    else if (YOU["score"] > 21 && DEALER["score"] > 21) {
        blackjackGame["draws"]++;
        console.log("You drew!");
    }

    console.log(blackjackGame);
    console.log("Winner is ", winner);
    return winner;
}

function showResult(winner) {
    let message, messageColor;

    if (blackjackGame["turnsOver"] === true){

    if (winner === YOU) {
        document.querySelector('#wins').textContent = blackjackGame["wins"];
        message = "You won!";
        messageColor = "green";
        winSound.play();
    }
    else if (winner === DEALER) {
        document.querySelector('#losses').textContent = blackjackGame["losses"];
        message = "You lost!";
        messageColor = "red";
        lossSound.play();
    }
    else {
        document.querySelector('#draws').textContent = blackjackGame["draws"];
        message = "You drew!";
        messageColor = "black";
    }

    document.querySelector("#blackjack-result").textContent = message;
    document.querySelector("#blackjack-result").style.color = messageColor;
    }
}

