import {Response,Request} from "express"
import { connection } from "../connection"
import { user } from "../type"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {

      const name = req.query.name || "%"
      const result = await connection("aula48_exercicio")
         .where("name", "LIKE", `%${name}%`)
         
      const users = result.map(toUser)

      res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 const toUser = (input:any):user => {
   return{
      id:input.id,
      name:input.name,
      email:input.email,
      type:input.type
   }
 }