/*Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado vermelho com 100px 
de altura e largura. Sempre que o botão for clicado um novo quadrado deve aparecer na tela */

var botao = document.querySelector('input#botao')

botao.onclick = function () {
    
    var res = document.querySelector('div#res')
    var item = document.createElement('section')
    item.class = 'box'
    item.text = 'kkkkkkkkkkkkkkkk'
    item.style.width = 100
    item.style.height = 100
    item.style.backgroundColor = '#5454e2'
    res.appendChild(item)
}