import {Request,Response} from "express"
import { checkDate } from "../scripts/checkDatete"
import { users } from "../data"
import { user } from "../type"

export const addUser = (
    req:Request,
    res:Response
):void => {
    let errorCode:number = 400
    try{

        const checkUser:number = users.findIndex(
            (user) => user.CPF === req.body.CPF
        )

        if(checkUser !== -1){
            errorCode = 409;
            throw new Error("Usuario já cadastrado")
        }

        if(!checkDate(req.body.dataNascimento)){
            throw new Error(`${req.body.dataNascimento} não é uma data válida ou maior de 18 anos` )
        }

        const newUser: user = {
            id: Date.now(),
            Nome:req.body.nome,
            CPF:req.body.cpf,
            Nascimento:req.body.dataNascimento,
            Saldo:0,
            Extrato:[]
        }

        users.push(newUser)
        res.status(200).send({message:"Usuario cadastrado com sucesso", usuario: newUser})

    }catch(Error){
        res.status(errorCode).send(Error.message)
    }
}