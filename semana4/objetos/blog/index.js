let postArray = []

function criarPost(){
    let titulo = document.getElementById('titulo-post')
    let autor = document.getElementById('autor-post')
    let conteudo = document.getElementById('conteudo-post')


    const post= {
        titulo_post: `<h1>${titulo.value}</h1>`,
        autor_post:  `<h4>${autor.value}</h4>`,
        conteudo_post: `<p>${conteudo.value}</p>`
    }

    postArray.push(post)
    console.log(postArray)

    titulo.value = ""
    autor.value = ""
    conteudo.value = ""


    imprimirPost(postArray)
}

let criarID = 0

function imprimirPost(post){
    console.log(post)

    let areaPost = document.getElementById('area_post')


    let idPost = `post${criarID}`

    areaPost.innerHTML += `<div id=${idPost}> </div>`
    

    let id_areaPost = document.getElementById(idPost)

        for(let i = 0; i < post.length; i++){ 
        id_areaPost.innerHTML = post[i].titulo_post + post[i].autor_post + post[i].conteudo_post

        console.log(post[i])
        }

    criarID ++

    }