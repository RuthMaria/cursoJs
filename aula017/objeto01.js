let amigo = {
    nome:'Ruth',
    idade: 28,
    peso: 65,

    engordar(p = 0){
        console.log('engordou')
        this.peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)