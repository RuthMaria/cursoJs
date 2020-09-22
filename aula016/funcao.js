function parImpar(num){

    if (num % 2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

console.log(parImpar(4))


function soma (num1 = 0, num2 = 0){
    return num1+num2
}

console.log(soma(1,9))


var dobro = function(n){
    return n*2
}

console.log(dobro(5))


function fatorial(num){ // usando recursão
    
    if (num == 1) {
        return 1
        
    } else {
        return num * fatorial(num-1)
        
    }
}

console.log(fatorial(5))