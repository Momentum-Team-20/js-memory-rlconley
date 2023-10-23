console.log('connected')

let backOfCard = document.querySelector(".backOfCard")
let menuOptions = document.querySelectorAll('.menuOptions')
let backOfCardSrc = "https://images.pexels.com/photos/3418068/pexels-photo-3418068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"


backOfCard.addEventListener('click', (event) => {
    console.log("clicked!")
    backOfCard.src = "https://images.pexels.com/photos/706194/pexels-photo-706194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
}
)


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