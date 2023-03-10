const clickedArray = [];

const flipCards = document.querySelectorAll(".flip-card");

for(let flipCard of flipCards) {
    flipCard.addEventListener('click', function() {
        cardClicked(flipCard);
    });
}

function cardClicked(card) {

    card.classList.add("clicked");

    clickedArray.push(card);

    if(clickedArray.length < 2) { return; }

    checkIfCardsMatch(clickedArray[0], clickedArray[1]);
}

function checkIfCardsMatch(cardOne, cardTwo) {
    let cardOneImg = cardOne.querySelector(".flip-card-back .backImg")
    let cardTwoImg = cardTwo.querySelector(".flip-card-back .backImg")

    if(cardOneImg.alt === cardTwoImg.alt) {
       let winningTextHeader = document.createElement("h2");
       winningTextHeader.innerText = "YOU WIN!";
       document.body.appendChild(winningTextHeader);
    }
    else {
        cardOne.classList.remove("clicked");
        cardTwo.classList.remove("clicked");

        clickedArray.splice(0, clickedArray.length);
    }
}
