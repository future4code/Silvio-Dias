// ----------------------> Exercicio 1 <---------------------------

//O código verifica se i é menor que 5, se sim, i recebe + 1 e valor recebe valor + i
//Dessa forma, o loop que acontece até que i seja maior que 5
//No console, o valor terá 10, já que soma com i toda vez que entra no loop

// ----------------------> Exercicio 2 <---------------------------

// Números de lista com valor maior que 18 serão impressos no console
//Sim, para acessar cada indice,
// precisariamos de uma variavel index que começa em 0 e recebe um a cada entrada entrada no for
//Dessa forma, além do valor de numero, teriamos o index

// ----------------------> Exercicio 3 <---------------------------

//a.

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let arrayPar = []

// for (let numero of array) {
// console.log(numero)
// }

//b.

// for (let numero of array) {
//     numero = numero /10
//     console.log(numero)
// }

//c.


// for (let numero of array){
//     if(numero % 2 === 0){
//         arrayPar.push(numero)
//     }
       
// }

// console.log(arrayPar)

//d.
// let index = 0

// for (let numero of array) {
//     console.log(`O elemento do índex ${index} é ${numero} `)
//     index ++
// }

//e.

// let maiorNumero = 0
// let menorNumero = 0

// for(let numero of array){
    
//     while(numero > maiorNumero){
//         maiorNumero = numero
//         menorNumero = maiorNumero
//     }
//     while(numero < menorNumero){
//         menorNumero = numero
//     }
// }

// console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)

// ----------------------> Desafio 1 <---------------------------

// let numero = Number(prompt('Escolha um número'))
// console.log('Vamos Jogar')

// let chute = Number(prompt('Chute o número'))

// let qtd = 0
    

// while(chute != numero){
//     qtd ++
//     if(chute > numero){
//         console.log(`O número chutado foi: ${chute}`)
//         console.log('Errrrrrrrou, é menor')
//     }else if(chute < numero){
//         console.log(`O número chutado foi: ${chute}`)
//         console.log('Errrrrrrrou, é maior')
//     }


//     chute = Number(prompt('Chute o número'))
// }


// if(chute === numero){
//     qtd ++
//     console.log(`O número chutado foi: ${chute}`)
//     console.log(`Acertou!!`)
//     console.log(`O número de tentativas foi: ${qtd}`)
// }

// ----------------------> Desafio 2 <---------------------------


// let numero = Math.floor(Math.random() * 101); 
// console.log('Vamos Jogar')

// let chute = Number(prompt('Chute o número'))

// let qtd = 0
    

// while(chute != numero){
//     qtd ++
//     if(chute > numero){
//         console.log(`O número chutado foi: ${chute}`)
//         console.log('Errrrrrrrou, é menor')
//     }else if(chute < numero){
//         console.log(`O número chutado foi: ${chute}`)
//         console.log('Errrrrrrrou, é maior')
//     }


//     chute = Number(prompt('Chute o número'))
// }


// if(chute === numero){
//     qtd ++
//     console.log(`O número chutado foi: ${chute}`)
//     console.log(`Acertou!!`)
//     console.log(`O número de tentativas foi: ${qtd}`)
// }


//Foi bem simples implementar a aleatoriedade ao sistema, bastou mudar o que estava na variavel. 