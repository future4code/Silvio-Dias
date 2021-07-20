import {Request,Response} from "express"
import { users } from "../data"

export const payBill = (
    req:Request,
    res:Response
): void => {
    let errorCode = 400

    try{
        if(!req.body.Nome && !req.body.CPF){
            errorCode = 401
            throw new Error("Nome ou CPF não enviados")
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

        if(users[userIndex].Saldo <  req.body.pagamento){
            throw new Error("Saldo insuficiente")
        }

        if(!req.body.descricao){
            throw new Error("Descrição de pagamento não enviada")
        }

        users[userIndex].Saldo = users[userIndex].Saldo - req.body.pagamento
        users[userIndex].Extrato.push({valor:req.body.pagamento,data: Date.parse(req.body.data) || Date.now(),descricao:req.body.descricao})

        res.status(200).send({Mensagem:"Pagamento Fetuado com sucesso", Extrato: users[userIndex].Extrato })
    }catch(Error){
        res.status(errorCode).send(Error.message)
    }

}