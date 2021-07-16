import { Request,Response } from "express"
import { users } from "../data"

export const getBySearch = (
    req:Request,
    res:Response
): void => {
    try{

        if(!req.query.name){
            throw new Error("Nome não enviado")
        }

        const query = req.query.name as string

        const userList = users.filter(
            user => user.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        )

        if(userList.length < 1){
            res.status(200).send("Ninguem encontrado")
        }else{
            res.status(200).send(userList)
        }

        }catch(erro) {
        res.status(400).send(req.query.name)
    }
}
