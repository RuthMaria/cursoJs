
function gerarTabuada(){
    let n = document.querySelector('input#txtnum')
    let tabuada = document.getElementById('seltab')
    

    if (n.value.length == 0){
        alert('Por favor, digite um número!')

    }else{

        let num = n.valueAsNumber // assim não é preciso converter para number, já faz isso automaticamente
        tabuada.innerHTML = ''

        for(var i = 0; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${num} X ${i} = ${num*i}`
            item.value = `tabuada${i}` // serve para saber qual item foi selecionado das opções do select
            tabuada.appendChild(item)
        } 
    }

}