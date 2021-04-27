// ----------------------> Exercicio 1 <---------------------------

//a.

// 10 e 50

//b.

//Nada seria impresso, a função seria chamada, porém, o resultado não seria exibido


// ----------------------> Exercicio 2 <---------------------------

//a.

//"Darvas" e "Caio"


//b.


//"Amanda" e "Caio"

// ----------------------> Exercicio 3 <---------------------------

//A função cria um novo array e verifica os valores do array anterior
//Ele verifica se cada valor do array é par, caso seja, envia para o arrayFinal

//Um nome para a função poderia ser criadorArrayPar()

// ----------------------> Exercicio 4 <---------------------------

//a.

// function apresentaSilvio(){
//     console.log('Eu sou Silvio, tenho 24 anos, moro no Rio de Janeiro e sou estudante')
// }

// apresentaCaio()

//b.

// function apresentador(nome,idade,cidade,estudante){
//     if(estudante){
//         estudante = 'sou estudante'
//     }else{
//         estudante = 'não sou estudante'
//     }
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro no ${cidade} e ${estudante}`)

// }

// apresentador('Silvio', 24, 'Rio de Janeiro', false)


// ----------------------> Exercicio 5 <---------------------------

//a.

// function soma(numero1,numero2){
//     valorSoma = numero1 + numero2
//     return valorSoma
// }

// console.log(soma(5,2))

//b.

// function comparaMaior(numero1,numero2){
//     if(numero1 > numero2){
//         maior = true
//     }else{
//         maior = false
//     }
//     return maior
// }

// console.log(comparaMaior(2,6))

//c.

// function mensagemDez(mensagem){
//     for(let i = 0; i <10; i++){
//         console.log(mensagem)
//     }
// }

// mensagemDez('teste')

// ----------------------> Exercicio 6 <---------------------------

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
let i = 0;

//a.

// function contadorArray(numeros){
//     while(i < numeros.length){
//         i++
//     }

//     console.log('Quantidade no array', i)
// }
// contadorArray(array)

//b.

// function par_impar(numero){
//     let par
//     if(numero % 2 === 0){
//         par = true
//     }else{
//         par = false
//     }

//     return par
// }

// console.log(par_impar(3))

//c.

// function quantidadePar(numeros){
//     for(let valor of numeros){
//         if(valor % 2 === 0){
//             i++
//         }
//     }
//     return i
// }

// console.log(quantidadePar(array))

//d.

// function quantidadePar(numeros){
//     for(let valor of numeros){
        
//         if(par_impar(valor) === true){
//             i++
//         }
//     }
//     return i
// }

// console.log(quantidadePar(array))


// ----------------------> Desafio 1 <---------------------------

//a.
// let arrow = (parametro) =>{
//     return parametro
// }

// console.log(arrow('teste'))


//b.
// let arrowSoma = (val1,val2) =>{
//     soma = val1 + val2
//     console.log(arrow(soma))
// }

// arrowSoma(2,4)

// ----------------------> Desafio 2 <---------------------------

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
let outroArray = []

//a.

// function paresMultiplicados(arrayNumeros){
//     for(let valor of arrayNumeros ){
//         if(valor % 2 === 0){
//             valor = valor * 2
//             outroArray.push(valor)
//         }
//     }
//     console.log(outroArray)
// }

// paresMultiplicados(numeros)

//b.
// function maiorNumero(arrayNumeros){
//     let maior = 0
//     for(let valor of arrayNumeros){
//         if(valor > maior){
//             maior = valor
//         }
//     }

//     return maior
// }

// console.log(maiorNumero(numeros))

//c.
// function indiceMaior(arrayNumeros){

//     let maior = 0
//     let indiceMaior = 0
//     let i = 0

//     for(let valor of arrayNumeros){
       
//         if(valor > maior){
//             maior = valor
//             indiceMaior = i
//         }

//         i++
//     }

//     return indiceMaior
// }

// console.log(indiceMaior(numeros))

function inverterArray(arrayNumeros){
    let arrayInvertido = []
    for(let i = arrayNumeros.length -1; i >= 0;i--){
        arrayInvertido.push(arrayNumeros[i])

    }

    return arrayInvertido
}

console.log(inverterArray(numeros))