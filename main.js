console.log('connected')


let allMenuChoices = document.querySelectorAll('.menuOptions')
let backOfCardSrc = "https://images.pexels.com/photos/3418068/pexels-photo-3418068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
let resetButton = document.querySelector("#reset")
let cardContainer = document.querySelector('#cardContainer')

resetButton.addEventListener('click', (event) => {
    let allCards = document.querySelectorAll(".llama")
    console.log("clicked!")
    console.log("allCards", allCards)
    for (let card of allCards) {
        resetCard(card)
}
})

/* <img class="card m-2" data-card-front=<imgSrc>
src=backOfCardSrc
value= */
function buildCard(cardInfo) {
    let card = document.createElement('img');
    card.classList.add('llama', 'm-2');
    card.dataset.cardFront = cardInfo.imgSrc
    card.src = backOfCardSrc
    card.value = 'TBD'
    cardContainer.appendChild(card)
    return card
}

function buildAllCards(cardInfoArray) {
    let cardsArray = []
    let value = 0
    for (let cardInfo of cardInfoArray) {
        let newCard = buildCard(cardInfo)
        value += 1
        newCard.value = value
        cardsArray.push(newCard)
        let newCardMatch = buildCard(cardInfo)
        value += 1
        newCard.value = value
        cardsArray.push(newCardMatch)
    }
    // as we build the cards, we put them in an array for other functions to use
    return cardsArray
}


function flipCard (cards) {
    console.log('flipCard function is running, you better go catch it')
    for (let card of cards) {
        card.addEventListener('click', (event) => {
            console.log("clicked!")
            console.log(card.src)
            card.src = card.dataset.cardFront;
            console.log(card.src)
        }
        )
    }
}
function resetCard(card) {
    console.log('resetcard')
    card.src = backOfCardSrc
} 

function startMenu(menuOptions) {
for (let option of menuOptions) {
    option.addEventListener('click', (event) => {
        switch (event.target.value) {
            case 1: console.log("case1");
                break;
            case 2: console.log("case2");
                break;
            case 3: console.log("case3");
                break;
            default: console.log("default")
            }

        })
    }
}



startMenu(allMenuChoices)
let cardsArray = buildAllCards(cardInfoArray)
flipCard(cardsArray)
// flipCard(buildAllCards(cardInfoArray))
// line 78 is the same as lines 76 and 77