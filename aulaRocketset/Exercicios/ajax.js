/*
// Biblioteca AJAX permite fazer uma requisição assincrona a algum back-end sem precisar atualizar a pagina.
var xhr = new XMLHttpRequest()

xhr.open('GET', 'https://api.github.com/users/diego3g') // URL que se quer buscar os dados
xhr.send(null)

xhr.onreadystatechange = function () {

    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText))    
    }   
}*/


/* Promise são códigos que não vão influenciar na linha do tempo do JS, são funções que vão devolver o valor
 do resultado, de sucesso ou erro, depois de algum tempo. Mas o JS vai continuar executando normalmente*/
 /*
var minhaPromise = function () {
    return new Promise(function (resolve, reject) {

        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.github.com/users/diego3g')
        xhr.send(null)

        xhr.onreadystatechange = function () {

            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject('Erro na requisição')
                }
            }
        }
    })
}

minhaPromise()
    .then(function(response){
        console.log(response)
    })

    .catch(function(error){
        console.warn(error)
    })
 */   

// Axios
axios.get('https://api.github.com/users/diego3g')
   .then(function(response){
    //console.log(response.data.avatar_url)
    console.log(response)
})

.catch(function(error){
    console.warn(error)
}) 