console.log('connected')

let backOfCard = document.querySelector(".backOfCard")
let menuOptions = document.querySelectorAll('.menuOptions')


backOfCard.addEventListener('click', (event) => {
    console.log("clicked!")
}
)  


for (let option of menuOptions) {
    option.addEventListener('click', (event) => {
        switch(event.target.value) {    
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