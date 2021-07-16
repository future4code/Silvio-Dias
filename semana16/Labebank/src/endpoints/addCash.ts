import {Request,Response} from "express"
import { users } from "../data"

export const addCash = (
    req:Request,
    res:Response
): void => {
    let errorCode = 400
    try{

        if(!req.body.Nome && !req.body.CPF){
            errorCode = 401
            throw new Error("Nome ou CPF não enviados")
        }
        
        if(!req.body.addCash || isNaN(req.body.addCash)){
            errorCode = 401
            throw new Error("Valor à adicionar não enviado ou não é um numero")
        }

        if(req.body.addCash <= 0){
            throw new Error("Valor a adicionar é menor ou igual a 0")
        }

        const userIndex:number = users.findIndex(
            (user) => user.CPF === req.body.CPF
        )

        if(userIndex === -1){
            throw new Error("CPF não encontrado")
        }

        if(users[userIndex].Nome !== req.body.Nome){
            throw new Error("Não encontramos usuario com a combinação de Nome e CPF")
        }

        users[userIndex].Saldo = users[userIndex].Saldo + req.body.addCash


        res.status(200).send({Message: "Saldo adicionado com sucesso", Usuario: users[userIndex]})

    }catch(Error){
        res.status(errorCode).send(Error.message)
    }

}
