// ----------------------> Exercicio 1 <---------------------------

// É um verificador de par ou ímpar.
// O usuario insere um número que será dividido por 2,
// caso o resto seja 0 o valor é par e no console imprime "Passou no teste"
// Caso reste algo que não seja 0, imprime no console "Não passou no teste"


// ----------------------> Execicio 2 <---------------------------
//a:
//O código é um verificador de preço,
//O usuario escreve o nume da fruta e o porgrama da o valor dela
//b:
//2.25
//c:
//5, pois o contigo continuaria até o próximo break

// ----------------------> Exercicio 3 <---------------------------

//a:
// A primeira linha recebe um número enviado pelo usuario em formato number e não string
//b:
// Caso o número seja 10, imprime no console "Esse número passou no teste" e um erro pela variavel mensagem
// Caso o número  seja -10, terá um erro no console por a variavel mensagem é criada no if
//c:
//Sim, se o valor for menor que 0 terá um erro pois a variavel mensagem foi criada no bloco do if, fora do escopor da let
//

// ----------------------> Exercicio 4 <---------------------------

// const idade = Number(prompt("Digite sua idade"))

// if(idade >= 18){
//     console.log('Você pode dirigir')
// }else{
//     console.log("Você não pode dirigir.")
// }


// ----------------------> Exercicio 5 <---------------------------

// const turno = prompt("Qual o seu turno? Digite M para Matutino, V para Vespertino ou N para Noturno").toLowerCase()
//     if(turno === 'm'){
//         console.log("Bom Dia!")
//     }else if(turno === 'v'){
//         console.log("Boa Tarde!")
//     }else{
//         console.log("Boa Noite!")
//     }



// ----------------------> Exercicio 6 <---------------------------

// const turno = prompt("Qual o seu turno? Digite M para Matutino, V para Vespertino ou N para Noturno").toLowerCase()

// switch(turno){
//     case 'm':
//         console.log('Bom Dia!')
//         break;
//     case 'v':
//         console.log('Boa Tarde!')
//         break; 
//     case 'n':
//         console.log('Boa Noite!')
//         break;
// }



// ----------------------> Exercicio 7 <---------------------------


// const filmeGenero = prompt("Qual o genêro do filme que vão assistir?").toLowerCase()
// const filmePreco = Number(prompt("Qual o valor do ingresso?"))

// if(filmeGenero === "fantasia" && filmePreco <=15){
//     console.log("Bom filme!")
// }else{
//     console.log("Escolha outro filme :(")
// }


// ----------------------> Desafio 1 <---------------------------

// const filmeGenero = prompt("Qual o genêro do filme que vão assistir?").toLowerCase()
// const filmePreco = Number(prompt("Qual o valor do ingresso?"))

// if(filmeGenero === "fantasia" && filmePreco <=15){
//     let snack = prompt("Qual Snack quer comer?").toLowerCase()

//     console.log(`Bom filme!...com ${snack}`)
// }else{
//     console.log("Escolha outro filme :(")
// }


// ----------------------> Desafio 2 <---------------------------

let nome = prompt("Digite seu nome completo")
let tipo_jogo = prompt("Digite o tipo de jogo").toLowerCase()
let etapa_jogo = prompt("Digite qual a etapa do jogo( SF = Semi Final, DT = Decisão de Terceiro lugar, FL = Final").toLowerCase()
let categoria_jogo = Number(prompt("Digite a categoria do jogo"))
let qtd_ingresso = Number(prompt("Digite a quantidade de ingressos"))

let valor_ingress = 0
let valor_total = 0

let moeda = "R$"

if(etapa_jogo === 'sf'){
    etapa_jogo = 'Semi Final'
    switch(categoria_jogo){
        case(1):
            valor_ingress = 1320
            break;
        case(2):
            valor_ingress = 880 
            break;
        case(3):
            valor_ingress = 550
            break;
        case(4):
            valor_ingress = 220
            break;
    }
}

if(etapa_jogo === 'dt'){
    etapa_jogo = 'Decisão do 3º lugar'

    switch(categoria_jogo){
        case(1):
            valor_ingress = 660
            break;
        case(2):
            valor_ingress = 440 
            break;
        case(3):
            valor_ingress = 330
            break;
        case(4):
            valor_ingress = 170
            break;
    }
}

if(etapa_jogo === 'fl'){
    etapa_jogo = 'Final'

    switch(categoria_jogo){
        case(1):
            valor_ingress = 1980
            break;
        case(2):
            valor_ingress = 1320 
            break;
        case(3):
            valor_ingress = 880
            break;
        case(4):
            valor_ingress = 330
            break;
    }
}

if(tipo_jogo === 'internacional'){
    valor_ingress = valor_ingress * 4.10
    moeda = "U$"
}

console.log('Nome do Cliente:', nome)
console.log('Tipo do jogo:', tipo_jogo)
console.log('Etapa do jogo:', etapa_jogo)
console.log('Categoria:', categoria_jogo)
console.log('Quantidade de Ingressos:', qtd_ingresso)

valor_total = qtd_ingresso * valor_ingress

console.log('Valor do ingresso:', moeda + valor_ingress)
console.log('Valor total:', moeda + valor_total)





