
// HOME

let play_button = document.querySelector("#play_button")
let birds = document.querySelectorAll(".bird")
let bird = Array.from(birds)
let home = document.querySelector("[home]")
let playing = document.querySelector("[playing]")
let reset_button = document.querySelector("#reset_button")
let selected_bird = document.querySelector("#selected_bird")
let game_area = document.querySelector(".game_area")
let barrier = document.querySelector(".flex2")
let barrier_top = document.querySelector(".barrier_top")
let barrier_bottom = document.querySelector(".barrier_bottom")
let game_over = document.querySelector(".game_over")





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
        selected_bird.setAttribute("src", link || "/flappybird/imgs/bird1.png")
        selected_bird.style.height = "80px"
        home.style.display = "none"
        playing.style.display = "flex"
        
    

    // let alt = 0
    // let alt2 = 0
    // let alt3 = 0
    // let alt4 = 0

    // game_area.addEventListener("click", upping)

    // function dropping(a) {

    //     selected_bird.style.marginTop = a + "px"

    //     a = a + 2
    //     setTimeout(function time() {


    //         if (a < 500)
    //             dropping(a)
    //             else
    //             gameOver()

    //     }, 10);


    // }

    // dropping(50)



    // function upping(a) {
    //     setTimeout(function time() {
    //         console.log("valor da subida" + alt)
    //         alt2 = a > 0 ? a : alt;
    //         console.log("valor verificado " + alt2)

    //         alt3 = alt2 - 2

    //         console.log(alt3)

    //         selected_bird.style.marginTop = alt3 + "px"

    //         if (alt3 != alt - 50) {
    //             upping(alt3)
    //         }
    //         else
    //             dropping(alt3)

    //     }, 30);
    // }



  


    let left = 80
    let allBarrier = document.querySelector(".flex2")



    function barrier() {

        allBarrier.style.left = left + "vw"
        left -= 1

        setTimeout(function time() {

            if (left >= 10)
                barrier()
            else {
                left = 80
                let heightBarrier1 = Math.trunc(Math.random() * (220 - 50) + 50)
                let heightBarrier2 = Math.trunc(Math.random() * (220 - 50) + 50)
                barrier_top.firstElementChild.style.height = heightBarrier1 + "px"
                barrier_bottom.children[1].style.height = heightBarrier2 + "px"
                barrier()
            }

        }, 30);

    }

    barrier()

    let flaying = false
    window.onmousedown =e => flaying = true
    window.onmouseup=e => flaying = false
    let newY = 0
    setInterval(()=>{

        
        function animar  (){
            newY = (flaying ? newY-12 : newY+5)
            
            if (newY > 500)
            gameOver()
            if (newY<0) 
                newY=0
            
            selected_bird.style.marginTop = newY+"px"
        }
        animar()
    
        
    },20)
}

function gameOver() {
    game_area.style.display = "none"
    game_over.style.display = "flex"
    game_over.style.marginTop = "50px"
}




// Game Started

