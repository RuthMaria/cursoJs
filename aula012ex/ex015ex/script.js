
function verificar(){

    var data = new Date()
    var ano_atual = data.getFullYear() // pega o ano_atual com apenas quatro dígitos, ex. 2020

    var ano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (ano.value.length == 0 || Number(ano.value) > ano_atual) {
        
        alert('[ERRO] Preencha os dados corretamente!')    

    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano_atual - Number(ano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // cria um img com id foto
        
        var genero =  ''

        if (sexo[0].checked) {
            genero = 'homem'     
            
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {                              
                img.setAttribute('src', 'foto-idoso-m.png')
            }

        } else if (sexo[1].checked){
            genero = 'mulher'              
            
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {                              
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ` Detectamos ${genero} com ${idade} anos `
        res.appendChild(img) // adiciona um elemento
    }


}