import {Request,Response} from "express"
import {users} from "../data"

export const usersByType = (
    req:Request,
    res:Response
):void => {
    let errorCode: number = 400

    try{
        const result = users.filter(
            users => users.type.toLocaleLowerCase().includes(req.params.type)
        )

        if(result.length < 1){
            errorCode = 404
            throw new Error()
        }else{
            res.send(result)
        }
    } catch(error) {
        res.status(400).send(error.message)
    }

} 

