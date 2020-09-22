
function contar(){

    var ini = document.getElementById('inicio')
    var fi = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('res')

    var inicio = Number(ini.value)
    var fim = Number(fi.value)
    var passo = Number(pas.value)
    

    if (ini.value.length == 0 || fi.value.length == 0) { // tem que usar lenght, pois verifica se está vazio
        res.innerHTML = 'Impossível contar'

    } else{
        res.innerHTML = 'Contando: <br>' 

        if( passo <= 0 ){
                  alert('Passo inválido! Considerando PASSO 1')
                  passo = 1
        }

        if( inicio < fim){
            
            for(var i = inicio; i <= fim; i+=passo){
                res.innerHTML +=` ${i} \u{1F449}`
            }  
        
        } else {   
            for(var i = inicio; i >= fim; i -= passo){
                res.innerHTML +=` ${i} \u{1F449}`
            }
        }

        res.innerHTML += `\u{1F3C1}`
    }
 
}