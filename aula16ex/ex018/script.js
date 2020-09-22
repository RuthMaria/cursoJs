let n = document.querySelector('input#txtnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')

let valores = []

function intervalo (num){
    return (num >= 1 && num <= 100)
}

function procurarNum (num){
    return (valores.indexOf(num) == -1) // se for igual a -1 é porque não está na lista
}

function limparTela(){
    res.innerHTML = ''
    n.value = ''
    n.focus() // faz o cursor do mouse voltar para o input
}

function adicionar(){
    
    let num = Number(n.value)
    
    if (n.value.length != 0 && procurarNum(num) && intervalo(num)) {
        valores.push(num)     
        let item = document.createElement('option') 
        item.text = `Valor ${num} adicionado`
        lista.appendChild(item)  
    } else {
          alert('Valor invalido ou já encontrado na lista!')         
    }
   limparTela()
}


function finalizar(){

    if (valores.length == 0) {
        alert('Adicione valores antes de continuar')

    } else {      

        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let i in valores) {
            if (valores[i] > maior) {
                maior = valores[i]
            }

            if(valores[i] < menor){
                menor = valores[i]
            }

            soma += valores[i]
        }

        res.innerHTML = `A lista tem ${valores.length} números cadastrados <br><br>`
        
        res.innerHTML += `O maior número é: ${maior} <br>`

        res.innerHTML += `O menor número é: ${menor} <br>`

        res.innerHTML += `A soma é: ${soma} <br>`

        res.innerHTML += `A média é:  ${soma/valores.length} <br>`   
    }     
}
