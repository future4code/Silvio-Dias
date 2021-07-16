import {Request,Response} from "express"
import { users } from "../data"
import { user } from "../types"

export const addUser = (
    req:Request,
    res:Response
): void => {
    let errorCode:number = 400
    try{

        if(!req.body.name && !req.body.email && !req.body.type && !req.body.age){
            throw new Error("Parametros invalidos")
        }

        const userList:number = users.findIndex(
            (user) => user.name = req.body.name
        )

        if(userList !== -1){
            errorCode = 409
            throw new Error("Usuario já existe")
        }

        const newUser:user = {
            id:Date.now(),
            name:req.body.name,
            email:req.body.email,
            type:req.body.type,
            age:req.body.age     
        }

        users.push(newUser)
        res.status(200).send({message:"Usuario cadastrado com sucesso",Usuario: users})
    }catch(Error){
        res.status(errorCode).send(Error.message)
    }

}