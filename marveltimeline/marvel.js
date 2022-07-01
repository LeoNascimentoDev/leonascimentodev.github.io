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