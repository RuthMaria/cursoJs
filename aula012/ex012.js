var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var mes = agora.getMonth()
console.log(`Agora são exatamente ${hora}h${min} do mês ${mes}`)

if(hora < 12){
    console.log('Bom dia')
} else if (hora <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}