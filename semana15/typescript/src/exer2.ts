type Estatisticas = {
    maior: number,
    menor:number,
    media:number
}

function obterEstatisticas(numeros:number[]):Estatisticas {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type AmostraIdades = {
    numeros: number[],
    obterEstatisticas: (number: number[]) => Estatisticas
}

const amostraIdades: AmostraIdades = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas
}

console.log(obterEstatisticas([2,5,7,2,1]))
console.log(amostraIdades.obterEstatisticas(amostraIdades.numeros))
