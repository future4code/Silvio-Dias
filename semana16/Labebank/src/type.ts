export type user = {
    id:number
    Nome:string,
    CPF:string,
    Nascimento:string,
    Saldo:number,
    Extrato: extrato[] | []
}

export type extrato = {
    valor:number,
    data:string,
    descricao:string
}