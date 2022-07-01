$(function () {

    $('.info').hide(0)
    $('.movieCard').hover(
        function () {
            $(this).children('.info').show(600)
            $(this).children('a').children('img').animate({
                opacity: '1',
                width: '300px'
            }, 500)
        }
        ,
        function () {
            $(this).children('.info').hide(300)
            $(this).children('a').children('img').animate({
                opacity: '0.2',
                width: '250px'
            }, 500)
        })
})





let movieCard = Array.from(document.querySelectorAll('.movieCard'))
let a = []
let i=0
movieCard.forEach(e => {
    a.push(e.firstElementChild)
    if (movieCard.indexOf(e) % 2 != 0) {
        movieCard[i].removeChild(a[i])
        movieCard[i].appendChild(a[i])
    }
   i++
})
