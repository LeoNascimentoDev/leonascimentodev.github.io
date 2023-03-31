// Funções em jquery

$(function () {

    // # Código de navegação e seleção de filtros

    //alocação dos cards para uma variável
    let cards = [...document.getElementsByClassName('card')]

    //alocação dos botões marcados como "selector" em sua classe e adicionando uma função de espera de click para cada um
    const allSelectors = [...$('.selector')]
    allSelectors.forEach(e => {
        e.addEventListener('click', clickSelector)
    })

    //Função de click altera a classe de botão selecionado nos botões, é feita uma verificação nos cards para mostra-los caso sua tag seja válida.  
    function clickSelector(e) {
        $('#nav-filter .button').removeClass('bt-selected') //desmarca todos e abaixo marca somente o clicado. 
        $(e.target).parent().addClass('bt-selected')
        cards.forEach(card => {
            if ($(e.target).attr('id') == "All") {
                showCard(card)
            }
            else if ($(e.target).attr('id') == card.id) {
                card.style.display = "block" // poderia ser utilizada a função showCard
            }
            else {
                hideCard(card)
            }
        })
    }
    function hideCard(e) {
        e.style.display = "none"
    }
    function showCard(e) {
        e.style.display = "block"
    }

    // # Seleção de cards

    $('.card-link').click(function (e) {
        if ($(this).parent().hasClass('selected')) {
            return
        }
        else {
            e.preventDefault()
            $('.card-link').parent().removeClass('selected').addClass('not-selected')
            $(this).parent().addClass('selected').removeClass('not-selected')

            // # A ser implementado card 3d!!!

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

    document.addEventListener('click', clickCard)
    function clickCard(e) {
        let card = Array.from($('.card-link'))
        card.forEach((el, i) => {
            if (!$(e.target.parentElement).hasClass('card-link') && !$(e.target).hasClass('card-link')) {
                $('.card-link').parent().removeClass('selected not-selected')
            }
        })
    }
})
