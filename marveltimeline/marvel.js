// jquery para animar as informações sobre o filme
$('.movieCard').children('a').children('img').addClass('notmobile')
$('.movieCard').children('a').children('img').addClass('mobile')

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
        }
        ,
        function () {
            $(this).children('.info').hide(300)
            $(this).children('a').children('img').filter('.notmobile').animate({
                opacity: '0.2',
                width: '250px'
            }, 500)
            $(this).children('a').children('img').filter('.mobile').animate({
                opacity: '0.2',
                width: '30vw'
            }, 500)
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


// código para retirar links quando for mobile



$(function () {
    let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

    if (isMobile) {

        $('.movieCard').children('a').children('img').removeClass('notmobile')


        let links = []
        let a = Array.from(document.querySelectorAll('a'))
        a.forEach(e => {
            links.push(e.href)
            e.removeAttribute("href")
        })

        console.log('mobile');
    }
});