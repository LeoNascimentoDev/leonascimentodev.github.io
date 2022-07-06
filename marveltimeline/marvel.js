// detectar se é mobile

$(function () {
    let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

    if (isMobile) {

        $('.movieCard').children('a').children('img').addClass('mobile')
        $('.movieCard').children('a').children('img').removeClass('notmobile')

        // código para retirar links da imagem quando for mobile   // Jquery

        $("img").click(function (event) {
            event.preventDefault()

        })

        // código para retirar links quando for mobile javascript

        // let links = []
        // let a = Array.from(document.querySelectorAll('a'))
        // a.forEach(e => {
        //     links.push(e.href)
        //     e.removeAttribute("href")
        // })

    }
});


// jquery para animar as informações sobre o filme

$('.movieCard').children('a').children('img').addClass('notmobile')

$(function () {

    // $('.movieCard').children('a').children('img').addClass('mobile')


    $('.info').hide(0)
    $('.movieCard').hover(
        function () {
            $(this).children('.info').show(600)
            $(this).children('a').children('img').filter('.notmobile').animate({
                opacity: '1',
                width: '300px'
            }, 500)
            $(this).children('a').children('img').filter('.mobile').animate({
                opacity: '1',
                width: '40vw'
            }, 500)

            $(this).children('a').addClass('hasbutton')

            // verificar se ja existe botão
            function hasButton() {

                $(this).children('a').children('button')
                [0]
            }
            // criar botão caso não exista
            if (hasButton() == undefined) {
                $(this).children('.hasbutton').append("<button>IMDB</button>")
            }


            //modificar div selecionada

            $(this).css('background', 'rgb(60, 60, 60)')
            $(this).css('width', '100vw')
            $(this).css('justify-content', 'center')


        
            
        }



        ,
        function () {
            $(this).children('.info').hide(400)
            $(this).children('a').children('img').filter('.notmobile').animate({
                opacity: '0.2',
                width: '250px'
            }, 500)
            $(this).children('a').children('img').filter('.mobile').animate({
                opacity: '0.2',
                width: '30vw'
            }, 500)

            //remover botão
            $(this).children('a').children('button').remove()
            //remover classe 'tem botão'
            $(this).children('a').removeClass('hasbutton')

            //retornar div a valores padrões
            $(this).css('background', 'rgb(41, 41, 41)   ')


        })
})


// script para fazer o texto aparecer ora para direita, ora para esquerda.



let movieCard = Array.from(document.querySelectorAll('.movieCard'))
let a = []
let i = 0
movieCard.forEach(e => {
    a.push(e.firstElementChild)
    if (movieCard.indexOf(e) % 2 != 0) {
        movieCard[i].removeChild(a[i])
        movieCard[i].appendChild(a[i])
    }
    i++
})



