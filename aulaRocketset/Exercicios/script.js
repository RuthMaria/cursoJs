function mouse() {
    alert('Vc passou o mouse por cima')
}

function pressionar() {
    alert('Depois aparecerá o que foi digitado')
}

var button = document.querySelector('button#rem')

button.onclick = function () {
    var input = document.querySelector('input#txt')
    var res = document.querySelector('div#res')
    res.removeChild(input)
}


var listaItens = document.querySelector('#app ul')
var addItem = document.querySelector('#app input')
var botao = document.querySelector('#app button')

var arrayItem = JSON.parse(localStorage.getItem('lista_itens')) || [] // pega os dados locais e transforma novamente em array

function renderizarArray() {
    listaItens.innerHTML = ''

    for (i of arrayItem) {

        var item = document.createElement('li')
        var textoItem = document.createTextNode(i)
        item.appendChild(textoItem)

        var linkExcluir = document.createElement('a')
        linkExcluir.setAttribute('href', '#')

        var posicao = arrayItem.indexOf(i)
        linkExcluir.setAttribute('onclick', 'deletaItem('+posicao+')')        
        var textoLink = document.createTextNode('Excluir')

        linkExcluir.appendChild(textoLink)

        item.appendChild(linkExcluir)

        listaItens.appendChild(item)
    }
}

renderizarArray()

function adicionaItem() {
    var textoItem = addItem.value
    arrayItem.push(textoItem)
    addItem.value = ''
    renderizarArray()
    salvarArrayLocalmente()
}

botao.onclick = adicionaItem


function deletaItem(posicao) {  // remove uma quantidade de itens de um array baseado na posição. O primeiro
    arrayItem.splice(posicao, 1) // parameto é a posição do array e o segundo a quantidades a ser removida
    renderizarArray()       
    salvarArrayLocalmente()
}

function salvarArrayLocalmente() { // o primeiro parametro cria uma variável (lista_itens) e o JSON transforma
    localStorage.setItem('lista_itens', JSON.stringify(arrayItem)) //o array numa string e faz a atribuição
}

