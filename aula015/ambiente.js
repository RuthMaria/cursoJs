var array = []

for (var i = 5; i >= 0; i--){    
    array.push(i)     // adiciona elementos no array
}

for (var i = 0; i < array.length; i++){    // imprima um por um até o tamanho do array
    console.log(array[i])
}

array.sort() // ordena em ordem crescente os valores do array

for(var j in array){ // imprime os elementos do array, mas esse forin só funciona pra arrays e objetos
    console.log(array[j])
}

console.log(array) // imprime todos de uma vez com a formatação dentro de colchetes ex. [1,3,4]

console.log(`A posição do elemento 4 é ${array.indexOf(4)}`)
