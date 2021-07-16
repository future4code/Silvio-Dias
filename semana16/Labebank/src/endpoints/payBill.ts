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
    
        
    }catch(Error){
        res.status(errorCode).send(Error.message)
    }

}