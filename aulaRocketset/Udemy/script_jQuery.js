// $(seletor).acao()

$(function () { // carrega o documento
    $('#esconder').click(function () { // define o que será feito ao clicar no botão
        $('#ola').hide()
        $('#ola').fadeIn(5000) // esconde e depois volta

    })
})

$(function () {
    $('#red').click(function () {
        $('#hello').css('color', 'red')

        $('#msg')
            .text('Cor alterada com sucesso')
            .css({ color: 'red', border: '1px solid red' }) // declaração multipla de css
            .delay(3000) // espera 3s antes do texto desaparecer
            .fadeOut(1000) // faz o texto desaparecer aos poucos, enfraquecendo as cores
            .addClass('green')

        $('button').removeClass('red')
    })
})

$(function(){

    $('#link1').click(function(){
        $('#img2').hide()
        $('#img3').hide()
        $('#img1').show()
    })

    $('#link2').click(function(){
        $('#img1').hide()
        $('#img3').hide()
        $('#img2').show()
    })

    $('#link3').click(function(){
        $('#img1').hide()
        $('#img2').hide()
        $('#img3').show()
    })

    
})