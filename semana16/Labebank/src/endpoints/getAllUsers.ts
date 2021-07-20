import {Request,Response} from "express"
import {users} from "../data"

export const getAllUsers = (
    req:Request,
    res:Response
): void => {
    res.statusMessage = "Usuarios enviados"
    res.send(users)
}