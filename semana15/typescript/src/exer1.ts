type person = {
    nome:string,
    idade:number,
    corFavorita:arcoIris
}

enum arcoIris{
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

const minhaString: string = ""

const meuNumero:number = 0

const pessoa1:person  =  {nome:"Silvio",idade:24,corFavorita:arcoIris.VERMELHO}

const pessoa2:person  =  {nome:"Silvio",idade:54,corFavorita:arcoIris.AZUL}

const pessoa3:person  =  {nome:"Ramon",idade:17,corFavorita:arcoIris.VIOLETA}

const pessoa4:person  =  {nome:"Diva",idade:48,corFavorita:arcoIris.VERDE}