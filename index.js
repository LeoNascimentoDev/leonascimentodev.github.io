// Funções em jquery

$(function () {




    // Seleção de filtros
    $('#nav-filter .button').click(function () {
        $(this).toggleClass('bt-selected')
    })


    $('.card-link').on('touchstart', function (e) {
        if ($(this).parent().hasClass('selected')) {
            return
        }
        else {
            e.preventDefault()
            $('.card-link').parent().removeClass('selected').addClass('not-selected')
            $(this).parent().addClass('selected').removeClass('not-selected')
            alert('touch')

        }
    })

    $('.button').on('touchstart', function (e) {
        $('.card-link').parent().removeClass('selected not-selected')
    })



    $('.card-link').click(function (e) {
        if ($(this).parent().hasClass('selected')) {
            return
        }
        else {
            e.preventDefault()
            $('.card-link').parent().removeClass('selected').addClass('not-selected')
            $(this).parent().addClass('selected').removeClass('not-selected')
            alert('mouse')

            // a ser implementado card 3d!!!
            // let mouse = []
            // let cal = []
            // let call = []
            // $(this).parent().on("mousemove", function (event) {
            //     mouse = [event.pageX, event.pageY]
            //     cal = [(event.pageX - $(this).position().left) / 250, (event.pageY - $(this).position().top) / (350)]
            //     call = [cal[0].toFixed(1), cal[1].toFixed(1)]
            //     let ele = document.getElementsByClassName('selected').item(0)
            //     let ell = call[1]*60-20
            //     console.log(ell);
            //     this.style.transform = "rotate3d("+1+","+1+",0,"+ell+"deg)"//`rotate3d(${call[0]},${cal[1]},0,30deg)`
            // });

        }
    })

    $('.button').click(function (e) {
        $('.card-link').parent().removeClass('selected not-selected')
    })
})
