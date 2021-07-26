import { Request,Response } from "express"
import selectUsers from "../data/selectUsers"


export default async function getUsers(
    req:Request,
    res:Response
){
    try{
        const users = await selectUsers()

        res.status(200).send({
            message:"Sucesso!",
            users
        })

    }catch(error){
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}