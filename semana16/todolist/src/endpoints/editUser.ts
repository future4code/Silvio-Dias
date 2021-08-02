import { Request,Response } from "express"

export default function editUser(
    req:Request,
    res:Response
){
    try{

    } catch(error){
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}