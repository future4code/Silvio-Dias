import { Request,Response } from "express"
import selectUserById from "../data/selectUserById"

export default async function getUsers(
    req:Request,
    res:Response
){
    try{
        const users = await selectUserById(req.params.id)

        if(!users){
            res.status(400).send({
                message:"Usuario Não Encontrado"
            })
        }

        res.status(200).send({
            message:"Sucesso!",
            id: users.id,
            nickname: users.nickname
        })

    }catch(error){
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}