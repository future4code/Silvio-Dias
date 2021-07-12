const operacao = process.argv[2] && process.argv[2].toLowerCase()

const valor1 = Number(process.argv[3])

const valor2 = Number(process.argv[4])

if(!process.argv[2] || !process.argv[3] || !process.argv[4]){
    console.log("Algo está faltando, confira se digitou os valores e a operação que gostaria de fazer")
    console.log("Operações possíveis:")
    console.log("Somar: soma")
    console.log("Subtrair: sub")
    console.log("Multiplicação: mult")
    console.log("Dividir: div")
}


switch(operacao){
    case "soma":
        console.log(`Resposta: ${valor1 + valor2}`)
    break;

    case "sub":
        console.log(`Resposta: ${valor1 - valor2}`)
    break;

    case "mult":
        console.log(`Resposta: ${valor1 * valor2}`)
    break;

    case "div":
        console.log(`Resposta: ${valor1 / valor2}`)
    break;
}