console.log('connected')

let allCards = document.querySelectorAll(".card")
let allMenuChoices = document.querySelectorAll('.menuOptions')
let backOfCardSrc = "https://images.pexels.com/photos/3418068/pexels-photo-3418068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

function flipCard (cards) {
    console.log('flipCard function is running, you better go catch it')
    for (let card of cards) {
        card.addEventListener('click', (event) => {
            console.log("clicked!")
            console.log(card.src)
            card.src = "https://images.pexels.com/photos/706194/pexels-photo-706194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
            console.log(card.src)
        }
        )
    }
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

flipCard(allCards)
startMenu(allMenuChoices)