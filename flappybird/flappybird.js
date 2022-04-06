
// HOME

let play_button = document.querySelector("#play_button")
let birds = document.querySelectorAll(".bird")
let bird = Array.from(birds)
let home = document.querySelector("[home]")
let playing = document.querySelector("[playing]")
let reset_button = document.querySelector("#reset_button")

play_button.addEventListener("click", start)

let link = ''
bird.forEach(e => {
    e.addEventListener("click", select => {

        bird.forEach(ele => {
            ele.style.backgroundColor = "#46565d"
            ele.style.border = "none"
        })

        e.style.backgroundColor = "#728b96"
        e.style.border = "solid 1px black"
        link = e.getAttribute("src")
        console.log('selecionou' + link)
    })
});


reset_button.addEventListener("click", reset)


function reset() {

    home.style.display = "flex"
    playing.style.display = "none"

}

function start() {

    home.style.display = "none"
    playing.style.display = "flex"
}


// Game Started

